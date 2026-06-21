import { makeBadge } from "badge-maker";

export default {
	async fetch(request: Request, env: Env): Promise<Response> {
		const url = new URL(request.url);
		const repo = url.pathname.slice(1);

		if (!repo) {
			return new Response(
				`You probably meant to go to an actual repository, and not this.
		If that isn't the case, then I honestly don't know why you're here.

		https://github.com/playfairs/rv`,
				{
					status: 400,
				},
			);
		}

		if (url.pathname === "/favicon.ico") {
			return new Response(null, { status: 404 });
		}

		await env.DB
			.prepare(`
				INSERT INTO repos (name, views)
				VALUES (?, 1)
				ON CONFLICT(name)
				DO UPDATE SET views = views + 1
			`)
			.bind(repo)
			.run();

		const row = await env.DB
			.prepare(`
				SELECT views
				FROM repos
				WHERE name = ?
			`)
			.bind(repo)
			.first<{ views: number }>();

		const views = row?.views ?? 0;

		const format = {
			label: "Repo views",
			message: views.toLocaleString(),
			color: "#007ec6",
			style: "flat" as const,
		};

		const svg = makeBadge(format);
		const etag = `"${views}-${Date.now()}"`;

		return new Response(svg, {
			headers: {
				"Content-Type": "image/svg+xml",
				"Cache-Control": "no-cache, no-store, must-revalidate, max-age=0, private",
				"Pragma": "no-cache",
				"Expires": "0",
				"ETag": etag,
				"Vary": "*",
			},
		});
	},
} satisfies ExportedHandler<Env>;
