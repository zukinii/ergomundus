<script>
	import SparkelSvg from '/src/svgs/sparkel.svg'
	import FacebookSvg from '/src/svgs/facebook.svg'
	import InstaSvg from '/src/svgs/insta.svg'
	import TuesSvg from '/src/svgs/tues.svg'
	import Copy from '$lib/copy/Copy.svelte'
</script>

<svelte:head>
	<title>LOW BROW Exhibition - extasier-kollektiv</title>
	<meta name="description" content="LOW BROW Exhibition - Art as spectacle of everyday life" />
	<meta name="theme-color" content="#F5FC00" />
	<meta property="og:image" content="/assets/images/baby-bg.png" />
	<meta property="og:image:type" content="image/png" />
	<meta property="og:image:width" content="934" />
	<meta property="og:image:height" content="934" />
	<!-- for structured-data info check https://developers.google.com/search/docs/advanced/structured-data/event -->
	<script type="application/ld+json">
		{
      "@context": "https://schema.org",
      "@type": "Event",
      "name": "LOW BROW Exhibition",
      "startDate": "2022-07-16T16:00-22:00",
      "endDate": "2022-07-17T16:00-22:00",
      "eventAttendanceMode": "https://schema.org/OfflineEventAttendanceMode",
      "eventStatus": "https://schema.org/EventScheduled",
      "location": {
        "@type": "Place",
        "name": "LOW BROW Exhibition",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Sterneckstraße 22",
          "postalCode": "5020",
          "addressRegion": "Salzburg",
          "addressCountry": "Österreich"
        }
      },
      "image": [
				"/assets/images/baby-bg.png"
			],
      "description": "Kunst als Spektakel des alltäglichen Lebens",
      "performer": {
        "@type": "PerformingGroup",
        "name": "EXTASIER KOLLEKTIV"
      },
      "organizer": {
        "@type": "Organization",
        "name": "EXTASIER KOLLEKTIV",
        "url": "https://extasier-kollektiv.at/"
      }
    }
	</script>
</svelte:head>

<div class="bg-primary font-copy text-black">
	<div class="container relative z-10 flex min-h-screen flex-col justify-start">
		<header class="pbs-5 mbe-24 lg:pbs-10">
			<div class="header-bar">
				<SparkelSvg />
				<span
					class="text-center text-[min(6vw,1.75rem)] uppercase leading-[calc(30/28)] pbl-[0.125rem] mi-4 lg:text-[3.25rem] lg:leading-[calc(64/52)]"
					>ART AS SPECTACLE OF EVERYDAY LIFE</span
				>
				<SparkelSvg />
			</div>
			<h1 class="font-heading font-bold">
				<div
					class="translate-y-1 -translate-x-[0.125rem] transform text-[50vw] leading-[calc(155/202)] sm:text-[21rem] md:whitespace-nowrap md:text-[14rem] lg:translate-y-4 lg:text-[18.75rem] xl:-translate-x-2 xl:translate-y-6 xl:text-[24rem] 2xl:text-[29rem]"
				>
					LOW BROW
				</div>
				<div
					class="-translate-x-1 transform text-right text-[14vw] leading-none sm:text-7xl lg:text-8xl xl:text-9xl 2xl:text-[9.625rem]"
				>
					EXHIBITON
				</div>
			</h1>
		</header>
		<main>
			<section class="date-section">
				<div class="date-text-sideways flex flex-col items-center">
					<div class="text-[4rem] leading-none lg:text-[12.5rem] lg:leading-[calc(155/200)]">
						16 – 22 H
					</div>
					<div class="text-[2rem] leading-none lg:text-[4.875rem] lg:leading-[calc(87/121)]">
						STERNECKSTR. 22, 5020
					</div>
				</div>
				<div class="date-decoration-1">
					<SparkelSvg />
					<SparkelSvg />
				</div>
				<div class="date-decoration-2">
					<SparkelSvg />
					<SparkelSvg />
				</div>
				<div
					class="date-text-sideways justify-self-end text-[4rem] leading-none lg:text-[12.5rem] lg:leading-[calc(155/200)]"
				>
					<div>16.+17.</div>
					<div>JULY '22</div>
				</div>
			</section>
			<section class="mbe-44">
				<header class="copy-header">
					<h2>WE LIKE IT LOW BRO(W)</h2>
				</header>
				<div class="mbe-8 lg:mbe-28">
					<Copy
						>Denn wir sind für eine Kunst, die etwas anderes tut, als im Museum auf ihrem Arsch zu
						sitzen! Die niemanden ausschließt, jedes Material verwendet, Fähigkeiten und
						Ideenlosigkeit zelebriert und die Frage stellt „Ist das Kunst, oder kann das weg?“ Eine
						Kunst die Schwächen als Talente deutet und selbst die banalsten Alltagssituationen zum
						ihrem Thema macht. Das ist LOW BROW und das sind WIR – KOLLEKTIV EXTASIER.</Copy
					>
				</div>
				<header class="copy-header">
					<p>KUNST ALS SPEKTAKEL DES BANALEN</p>
				</header>
				<div class="flex">
					<div>
						<Copy
							>Diese Ausstellung widmen wir der vermeintlich intellektuell anspruchslosen Kunst:
							Low-Brow! Was macht Kunst zur Kunst? Braucht sie die weiße Wand und perfekte
							Inszenierung?</Copy
						>
						<Copy
							>Wir nehmen das in unserer Ausstellung selbst in die Hand und emanzipieren Schönes und
							Kunstvolles des alltäglichen Lebens durch die museale Zurschaustellung. Wir
							präsentieren Techniken und Werke, Materialien und Formate, die in uns die Frage
							aufrufen, ob sie kunstwürdig sind. In der LOW BROW-Ausstellung werden rund 30 Werke
							aus den Bereichen Bildhauerei, Malerei, Architektur, Publikation, Installation,
							digitale Formate und mehr, ausgestellt.</Copy
						>
					</div>
					<div class="copy-decoration-1">
						<SparkelSvg />
						<SparkelSvg />
					</div>
				</div>
			</section>
			<section class="mbe-36">
				<header class="copy-header">
					<div class="flex">
						<h2>EXTASIER- KOLLEKTIV</h2>
						<div class="copy-decoration-2">
							<SparkelSvg />
						</div>
					</div>
					<p>WIR STELLEN UNS VOR</p>
				</header>
				<div class="flex">
					<div>
						<Copy
							>Wir sind eine plurale Gruppe mit Headquarter in Salzburg, die sich aus den
							verschiedensten Disziplinen und Interessen zusammensetzt. Wir – Künstler*innen,
							Handwerker*innen, Arbeiter*innen, Reisende, Entwerfer*innen, Forscher*innen – haben
							uns alliiert und sind zusammen das Kunstkollektiv EXTASIER.</Copy
						>
						<Copy
							>Es geht nicht immer um den Ort, an dem Kunst passiert. Niemand gibt vor, was es ist
							oder wohin es geht: Die Kiste mit der Katze ist unser Schaffensraum! Wir wollen
							niemanden ausschließen, jedes Material verwenden, Fähigkeiten sowie Ideenlosigkeit
							zelebrieren und damit alle Facetten der Kunst neu beschreiben – nichts erfüllen.
							Gerade durch die künstlerische Arbeit und Auseinandersetzung, wollen wir soziale und
							gesellschaftliche Thematiken, die uns alle betreffen können, sichtbar machen.</Copy
						>
					</div>
					<div class="copy-decoration-3">
						<SparkelSvg />
					</div>
				</div>
			</section>
		</main>
		<footer class="flex flex-col gap-6 mbs-auto pbe-5 lg:flex-row lg:gap-40 lg:pbe-10">
			<div class="flex gap-3 lg:gap-4">
				<a
					href="https://www.instagram.com/extasier.kollektiv/"
					target="_blank"
					aria-label="Instagram"
					class="footer-social"
				>
					<InstaSvg />
				</a>
				<a
					href="https://www.facebook.com/pages/category/Art/Extasier-Kollektiv-107480537508069/"
					target="_blank"
					aria-label="Facebook"
					class="footer-social"
				>
					<FacebookSvg />
				</a>
			</div>
			<div class="footer-logos">
				<picture class="w-14">
					<source srcset="/assets/images/outside_the_box@2x.png 2x" />
					<img src="/assets/images/outside_the_box.png" alt="outside the box" loading="lazy" />
				</picture>
				<picture class="w-16">
					<source srcset="/assets/images/super@2x.png 2x" />
					<img src="/assets/images/super.png" alt="super" loading="lazy" />
				</picture>
				<TuesSvg />
				<picture class="w-20">
					<img src="/assets/images/wabe.png" alt="wabe" loading="lazy" />
				</picture>
			</div>
		</footer>
	</div>
	<picture
		class="container fixed top-1/2 left-1/2 grid max-h-screen w-full max-w-2xl -translate-x-1/2 -translate-y-1/2 transform place-items-center"
	>
		<source srcset="/assets/images/baby.webp" type="image/webp" />
		<source srcset="/assets/images/baby@2x.webp 2x" type="image/webp" />
		<source srcset="/assets/images/baby@2x.png 2x" type="image/png" />
		<img src="/assets/images/baby.png" alt="baby" />
	</picture>
	<div class="pointer-events-none fixed bottom-0 left-0 right-0 z-20">
		<div class="container flex items-center justify-end">
			<picture class="w-[var(--extasier-logo-width)]">
				<source srcset="/assets/images/logo-extasier.webp" type="image/webp" />
				<source srcset="/assets/images/logo-extasier@2x.webp 2x" type="image/webp" />
				<source srcset="/assets/images/logo-extasier@2x.png 2x" type="image/png" />
				<img src="/assets/images/logo-extasier.png" alt="Extasier Kollektiv" />
			</picture>
		</div>
	</div>
</div>

<style lang="scss">
	:global() {
		&:root {
			--extasier-logo-width: 30vw;

			@screen lg {
				--extasier-logo-width: 14rem;
			}
		}

		::selection {
			@apply bg-black text-primary;
		}

		:focus-visible {
			@apply outline outline-1 outline-offset-2;
		}
	}

	:global(html) {
		// custom scrollbar for firefox (https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Scrollbars)
		@apply scrollbar-color-thumb-black scrollbar-color-track-primary scrollbar-color;

		// custom scrollbar for chromium (https://developer.mozilla.org/en-US/docs/Web/CSS/::-webkit-scrollbar)
		&::-webkit-scrollbar {
			width: 1em;
		}
		&::-webkit-scrollbar-track {
			@apply bg-primary;

			// box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
		}
		&::-webkit-scrollbar-thumb {
			@apply bg-black;
		}

		// custom cursor (https://developer.mozilla.org/en-US/docs/Web/CSS/cursor)
		cursor: url('/assets/images/cursor.png'), auto;
	}

	.header-bar {
		@apply flex items-center justify-center bg-black text-primary pi-4 mbe-4;

		&:global::selection {
			@apply bg-primary text-black;
		}

		:global(svg) {
			@apply h-6 w-6 shrink-0 animate-sparkle fill-current motion-reduce:animate-none lg:h-10 lg:w-10;

			:global(path) {
				@apply origin-center animate-rotate motion-reduce:animate-none;
			}
		}
	}

	.date-section {
		@apply grid place-items-start gap-y-32 font-heading font-bold mbe-52 lg:gap-y-0;

		grid-template-columns: 1fr 1fr;
	}

	.date-text-sideways {
		writing-mode: vertical-rl;
		transform: rotate(180deg);

		@supports (writing-mode: sideways-lr) {
			writing-mode: sideways-lr;
			transform: rotate(0deg);
		}
	}

	.date-decoration-1 {
		@apply flex flex-col justify-self-stretch pbs-32 lg:pbs-60;

		:global(svg) {
			@apply animate-sparkle fill-current motion-reduce:animate-none;

			&:nth-of-type(1) {
				@apply h-16 w-16 lg:h-[8.5rem] lg:w-[8.5rem] lg:self-center lg:mie-36;
			}

			&:nth-of-type(2) {
				@apply h-9 w-9 self-center lg:h-[4.5rem] lg:w-[4.5rem] lg:mbs-4;

				animation-delay: 0.5s;
			}
		}
	}

	.date-decoration-2 {
		@apply flex flex-col justify-self-stretch mbs-[80%] lg:mbs-[30%];

		:global(svg) {
			@apply animate-sparkle fill-current motion-reduce:animate-none;

			&:nth-of-type(1) {
				@apply h-7 w-7 self-end lg:h-16 lg:w-16 lg:self-center lg:mbe-16;
			}

			&:nth-of-type(2) {
				@apply h-14 w-14 self-start mis-6 lg:h-[8.5rem] lg:w-[8.5rem] lg:mis-48;

				animation-delay: 0.5s;
			}
		}
	}

	.copy-header {
		@apply font-heading font-bold mbe-8;

		:global(h2) {
			@apply max-w-[242px] text-[min(6rem,25vw)] leading-[calc(77/100)] mbe-2 lg:max-w-7xl lg:text-[15rem] lg:leading-[calc(272/353)] lg:mbe-3 2xl:text-[22rem] 2xl:mbe-6;
		}

		:global(p) {
			@apply max-w-5xl text-5xl uppercase tracking-[0.96px] lg:text-7xl lg:leading-[calc(115/123)] lg:tracking-[2.46px] 2xl:text-9xl;
		}
	}

	.copy-decoration-1 {
		@apply hidden lg:flex lg:flex-col lg:justify-center lg:mi-auto;

		:global(svg) {
			@apply animate-sparkle fill-current motion-reduce:animate-none;

			&:nth-of-type(1) {
				@apply h-20 w-20 self-center mie-40 mbe-20;
			}

			&:nth-of-type(2) {
				@apply h-40 w-40 self-center;

				animation-delay: 0.5s;
			}
		}
	}

	.copy-decoration-2 {
		@apply hidden lg:flex lg:flex-col lg:justify-center lg:mi-auto;

		:global(svg) {
			@apply h-[4.5rem] w-[4.5rem] animate-sparkle self-center fill-current mbe-20 mis-16 motion-reduce:animate-none;
		}
	}

	.copy-decoration-3 {
		@apply hidden lg:flex lg:flex-col lg:justify-center lg:mi-auto;

		:global(svg) {
			@apply h-36 w-36 animate-sparkle self-center fill-current motion-reduce:animate-none;

			animation-delay: 0.5s;
		}
	}

	.footer-social {
		@apply grid h-12 w-12 place-items-center bg-black p-2 text-primary transition-colors lg:h-[4.375rem] lg:w-[4.375rem] lg:p-4;

		&:hover,
		&:focus-visible {
			@apply bg-primary text-black;
		}
	}

	.footer-logos {
		@apply flex flex-wrap items-center gap-7 pie-[calc(var(--extasier-logo-width)+1rem)];

		:global(svg) {
			@apply w-20;
		}
	}
</style>
