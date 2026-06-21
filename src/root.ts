export default `
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width, initial-scale=1">

	<title>rv</title>

	<style>
		:root {
			color-scheme: dark;
		}

		* {
			box-sizing: border-box;
		}

		body {
			margin: 0;
			min-height: 100vh;

			display: flex;
			align-items: center;
			justify-content: center;

			font-family:
				Inter,
				system-ui,
				sans-serif;

			background: #0d1117;
			color: #f0f6fc;
		}

		.card {
			width: min(700px, 90vw);

			padding: 2rem;

			background: #161b22;
			border: 1px solid #30363d;
			border-radius: 12px;
		}

		h1 {
			margin: 0;
			font-size: 2rem;
		}

		.subtitle {
			margin-top: .5rem;
			color: #8b949e;
		}

		h2 {
			margin-top: 2rem;
			margin-bottom: .75rem;
		}

		pre {
			margin: 0;

			padding: 1rem;

			background: #0d1117;
			border: 1px solid #30363d;
			border-radius: 8px;

			overflow-x: auto;
		}

		code {
			font-family:
				JetBrains Mono,
				ui-monospace,
				monospace;
		}

		a {
			color: #58a6ff;
			text-decoration: none;
		}

		a:hover {
			text-decoration: underline;
		}

		.footer {
			margin-top: 2rem;
			color: #8b949e;
		}
	</style>
</head>
<body>
	<div class="card">
		<h1>rv</h1>

		<p class="subtitle">
			Repository View counter.
		</p>

		<h2>Usage</h2>

		<pre><code>https://rv.playfairs.cc/OWNER/REPOSITORY</code></pre>

		<h2>Example</h2>

		<pre><code>https://rv.playfairs.cc/playfairs/rv</code></pre>

		<h2>Markdown</h2>

		<pre><code>![](https://rv.playfairs.cc/playfairs/rv)</code></pre>

		<p class="footer">
			<a href="https://github.com/playfairs/rv">
				View source on GitHub
			</a>
		</p>
	</div>
</body>
</html>
`;
