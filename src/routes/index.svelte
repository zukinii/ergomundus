<script context="module">
	export const prerender = true
</script>

<svelte:head>
	<title>Ergomundus - Ergotherapie in Oberndorf bei Salzburg</title>
	<meta name="description" content="Ergotherapie in Oberndorf bei Salzburg" />
	<meta name="theme-color" content="#E2E2E2" />
	<meta property="og:image" content="/assets/images/logo.png" />
	<meta property="og:image:type" content="image/png" />
	<meta property="og:image:width" content="413" />
	<meta property="og:image:height" content="310" />
	<!-- for structured-data info check https://developers.google.com/search/docs/advanced/structured-data/local-business -->
	<script type="application/ld+json">
	{
		"@context": "https://schema.org",
		"@type": "MedicalBusiness",
		"name": "Ergomundus",
		"image": [
			"/assets/images/logo.png"
		],
		"address": {
			"@type": "PostalAddress",
			"streetAddress": "Kirchplatz",
			"addressLocality": "Oberndorf",
			"postalCode": "5110",
			"addressCountry": "AT"
		}  
	}
	</script>
</svelte:head>

<div class="grid min-h-screen grid-cols-1 items-start bg-gray-bg pbl-4">
	<header class="container grid grid-cols-1 justify-items-center mbe-8">
		<picture>
			<img src="/assets/images/logo.png" alt="Ergomundus" class="w-full max-w-md" />
		</picture>
	</header>
	<main class="container grid grid-cols-1 text-center text-lg md:text-2xl 2xl:text-3xl">
		<h1 class="mbe-4">Hallo! Schön dass du uns auf Ergomundus.at besuchst.</h1>

		<div>
			<p>Unsere Website befindet sich aktuell noch im Aufbau, aber wir arbeiten dran!</p>

			<p>Falls du in der Zwischenzeit Fragen hast erreichtst du uns gerne so:</p>
		</div>

		<div class="mbl-8">
			<p>
				<a href="https://goo.gl/maps/rjyaRCh1yAPTWhWb7" target="_blank"
					>Kirchplatz 7, 5110 Oberndorf</a
				>
			</p>
			<p><a href="tel:+43-660-6377967">Birgit Unterrainer: 0660/6377967</a></p>
			<p><a href="tel:+43-699-10707297">Tamara Pranz: 0699/10707297</a></p>
			<p><a href="mailto:ergomundus@gmx.at">ergomundus@gmx.at</a></p>
		</div>

		<p>Wir freuen uns schon auf dich!</p>
	</main>
</div>

<style lang="scss">
	:global() {
		::selection {
			@apply bg-primary text-white;
		}

		:focus-visible {
			@apply outline outline-1 outline-offset-2;
		}
	}

	a {
		@apply underline transition-colors duration-200 ease-in-out;

		&:hover,
		&:focus-visible {
			@apply text-primary;
		}
	}

	p {
		@apply [&:not(:last-child)]:mbe-4;
	}
</style>
