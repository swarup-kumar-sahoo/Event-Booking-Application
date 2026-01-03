export default function PublicHomePage() {
  return (
<main className="min-h-screen bg-gradient-to-br from-black via-blue-900 to-blue-600 text-white">
      {/* Navbar */}
      <nav className="flex justify-between items-center px-6 py-4 max-w-7xl mx-auto">
        <h1 className="text-3xl font-extrabold tracking-wide">Evnt<span className="text-blue-600">.</span></h1>
        <div className="space-x-6 text-sm md:text-base">
          <a href="/login" className="hover:text-indigo-200 hidden md:inline-block">Login</a>
          <a
            href="/register"
            className="bg-white text-blue-700 px-5 py-3 rounded-xl font-semibold shadow-lg hover:scale-105 transition hidden md:inline-block"
          >
            Get Started
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center text-center px-6 mt-24">
        <span className="bg-white/20 px-4 py-1 rounded-full text-sm mb-6">
          🎉 India’s Smart Event Booking Platform
        </span>

        <h2 className="text-4xl md:text-6xl font-extrabold leading-tight mb-6">
          Discover & Books <br />
          <span className="text-blue-300">Amazing Events</span>
        </h2>

        <p className="max-w-2xl text-lg md:text-xl text-indigo-100 mb-10">
          From concerts and conferences to workshops and meetups —  
          Evnt makes event booking fast, secure, and effortless.
        </p>

        <div className="flex flex-col sm:flex-row gap-4">
          <a
            href="/register"
            className="bg-white text-blue-700 px-10 py-4 rounded-2xl font-bold shadow-xl hover:scale-105 transition"
          >
            Create Free Account
          </a>
          <a
            href="/login"
            className="border border-white px-10 py-4 rounded-2xl font-semibold hover:bg-white hover:text-indigo-700 transition"
          >
            Login
          </a>
        </div>
      </section>

      {/* Stats Section */}
      <section className="mt-32 max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
        {[
          { value: "10K+", label: "Events Hosted" },
          { value: "50K+", label: "Tickets Booked" },
          { value: "5K+", label: "Organizers" },
          { value: "4.9★", label: "User Rating" },
        ].map((stat) => (
          <div key={stat.label} className="bg-white/10 p-6 rounded-2xl backdrop-blur">
            <h3 className="text-3xl font-extrabold">{stat.value}</h3>
            <p className="text-indigo-100">{stat.label}</p>
          </div>
        ))}
      </section>

      {/* Cricket Match Special Section */}
    <section className="mt-32 py-24 bg-white">
    <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">

        {/* Image Side */}
        <div className="relative">
            <img
            src="https://images.unsplash.com/photo-1540747913346-19e32dc3e97e"
            alt="Cricket Match"
            className="rounded-3xl shadow-2xl object-cover"
            />
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-tr from-black/60 via-transparent to-blue-500/30" />
        </div>

        {/* Content Side */}
        <div>
            <span className="inline-block bg-blue-600/20 text-black px-4 py-1 rounded-full text-sm mb-6">
            🏏 Live Cricket Matches
            </span>

            <h2 className="text-4xl text-black md:text-5xl font-extrabold mb-6 leading-tight">
            Book Cricket Match <br />
            Tickets Instantly
            </h2>

            <p className="text-black text-lg mb-8 max-w-xl">
            Experience the thrill of live cricket!  
            Book tickets for international matches, IPL, and local tournaments
            with instant confirmation and digital passes.
            </p>

            <ul className="space-y-4 mb-10">
            {[
                "🎟️ Instant ticket confirmation",
                "📱 Mobile QR-based entry",
                "🏟️ Seat selection & pricing",
                "🔔 Match reminders & updates",
            ].map((point) => (
                <li key={point} className="flex items-center gap-3 text-black">
                <span className="text-blue-400 text-xl">✔</span>
                {point}
                </li>
            ))}
            </ul>

            <div className="flex flex-wrap gap-4">
            <a
                href="/events/cricket"
                className="bg-blue-600 hover:bg-blue-700 px-10 py-4 rounded-2xl font-bold shadow-xl transition"
            >
                Book Cricket Tickets
            </a>
            <a
                href="/events"
                className="border border-white/40 px-10 py-4 text-black rounded-2xl font-semibold hover:bg-blue-300 hover:text-white transition"
            >
                View All Events
            </a>
            </div>
        </div>

        </div>
    </div>
    </section>


      {/* Features */}
      <section className="mt-32 bg-white text-gray-800 py-24">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-extrabold mb-4">
            Everything You Need to Manage Events
          </h2>
          <p className="text-gray-500 mb-16">
            Powerful tools built for organizers and attendees
          </p>

          <div className="grid md:grid-cols-3 gap-10">
            {[
              {
                title: "Create Events",
                desc: "Create events in minutes with date, venue, pricing, and capacity control.",
              },
              {
                title: "Book Tickets",
                desc: "Instant ticket booking with secure payments and QR-based entry.",
              },
              {
                title: "Live Updates",
                desc: "Get real-time updates, reminders, and event notifications.",
              },
              {
                title: "Organizer Dashboard",
                desc: "Track sales, attendees, revenue, and performance in one place.",
              },
              {
                title: "Digital Tickets",
                desc: "Paperless tickets with mobile scanning and validation.",
              },
              {
                title: "Secure Payments",
                desc: "Safe and fast transactions with trusted payment gateways.",
              },
            ].map((feature) => (
              <div
                key={feature.title}
                className="p-8 rounded-3xl shadow-lg hover:shadow-2xl transition"
              >
                <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

    {/* Trusted By Section */}
    <section className="mt-32 py-20 bg-white/5 backdrop-blur">
    <div className="max-w-7xl mx-auto px-6 text-center">
        
        <p className="uppercase tracking-widest text-blue-300 text-sm mb-4">
        Trusted by teams at
        </p>

        <h2 className="text-3xl md:text-4xl font-extrabold mb-14">
        Powering Events for Top Companies
        </h2>

        <div className="flex flex-wrap justify-center items-center gap-10 opacity-80">
        {[
            {
            name: "ICC",
            logo: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxIQEhIQEBMWFhIVGBgXFhcYFRcVGBYZFxYaFxgXFxgYHSggGBolHRkVIjEhJSkrLi4uFx8zODMsNygtLisBCgoKDg0OGhAQGismHyI3NS43LTAtMC8rNy03LS8vLSsrMC02LS4rLTcvLS8vLzArLy0tLS0tLTUtLS0rKystMP/AABEIAJ4BPgMBIgACEQEDEQH/xAAcAAEAAgMBAQEAAAAAAAAAAAAABwgEBQYDAQL/xABKEAABAwICBgYECQkHBQEAAAABAAIDBBEFEgYHITFBURMiYXGBkRQyUqEjQnKCkqKxssEzQ2Jjc5OzwtEINVSDw9PhFyU0U/Ak/8QAGgEBAAIDAQAAAAAAAAAAAAAAAAEDAgQFBv/EAC8RAQACAQIDBwIFBQAAAAAAAAABAgMEERIxQQUTIXGxwfBRgSIyNJHxFCMzYdH/2gAMAwEAAhEDEQA/AJxREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBEXjUVcce2R7WD9Jwb9qmI35ImYiN5eyLUv0kpRs6UH5LXO+6CvenxmnfsbIPG7fvALKcV48ZrP7Ko1OGZ2i8fvDPREWC4RfLr6gIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgLWY5jsNG3NM7afVYNrndw/E7FhaX6TMoI9lnTP/ACbP5nW+KPfu7REVTWyTvMszi57t5P2AcB2Bb2l0c5fxW5OZr+0IwRw18bejqsV01qJyRGehj5N9Y97+HhZadl3HMSSTvJNye8lYUK2NKNoXYrjpjjasbPI6nUZc1vx2mW1oqdb/AAvCTMeTRvP4DtWNgVCZnBo3Da48h/Vdr1IWWGxo3Dn/AMrmanPMTtHN6Hs/R1tXit+WHyedkLATsAFgN5NuAXH43jE0tw1xYzk02J73b1s8QlLzc+HYtJPGXHK0XJ2ADeVXp8dY8Z5r9dmteOGs7QzNEMAY7JVukcXhxs0G1rG1n8TffbZsIXaLSaNYM6mD3Pd1n2u0bm2v5nbvXpi+klNSnLI+7/ZaMzh322Dxsqc82y5Z4fFs6KlNNp444iv13nr9fv8ARt0WuwTGYqxhkhvYOykOFiCAD9hC2K17Vms7S3q2raOKs7xIiIoZCKueuHFnvxSdrJHBsTY47Nc4C+XpDuO+8nuXFOrpQCelk2fpu/qidlwUWo0QonQUNJC/a9kMYeTc3fkBedu31r71t0QIi5jS/TqjwwWmfmmIu2FlnSHkTtsxva4i9ja6Dp0JVeNINbuIVBIgLaaPgGAPkt2yPFvotHeuKrsUqJyTPPLLffnke8eTjayJ2W2fVRg2L2g8i4BerXA7iCqbdC32R5BekDjGbxksPNpLT5hDZcZFEWoioq5zVSz1E0kEYbGxskhkaXuOdxu4kgtaGcbfCceEuogRFxmmWsijw4uiv01SPzUZHVP6x+5ndtd2IOzXwm29Vxx3WriVSSGSCnj9mIC9u2R13E9rcvcuOrK2WfbPLJL+0kdJ94lE7LdGqjvbO2/LML+S9Q4HcqbdC32R5Be9NM6I3ic6M82OLD5tIQ2XDRRxqQlqpaSWepmlla6TJCJHl9mxiznAm52uLhtP5vzkdECIiAiIgLHxCsZBG+aQ2Yxpc7uA4cyshR9rfxQshipmn8q4ud8mO1ge9xB+YsqV4rRCrPk7vHN/oj7F8WfVzPnk3uOwXuGtHqtHYB57TxWVgWFS1cgihbc7yTsa0c3HgtIwqc9DsFbQ0oz2EjhnlJ4G18t+TRs8zxXayaiMOL8PPo85p9LOqyzN58OcyjTE8LlpJOimAzWDgQbgg32jxB38l+qMFzmtaLuJAA5kmwC/OkGLmrqHzfFvlYOTB6vntPeSun1cYb0kjqhw6sfVb8sjb5D7wV18s48PHfn7ud/Sxn1Xd4uW/P8A19XbYNh4p4gze7e48z/TgtJieKCR9mnqN2Dt5lZmmGK+jw5W+vJ1R2D4x8tniFxEVcOa5unw2vvknq7uu1mPBMaevht8iPdv3z32DaTsA5rosHwwRDO7bId/6I5D+q1eiVFmHpD920MHuLvwHivzptjnQs6CM2keOsRva3+p+y/YsbxN791T7rMd6YcM6nL9vb92HpZpWW5oKZ23c6Qe8M/r5c1x2C9E6qi9I2xl3WvxJvbN2ZrX7FiSvWHK5dXHp646cNevXq87k1mTPmjLfp06eSeKanZG3LGxrG8mgNHkF6rS6H4kamkikcbvAyP7XN2XPeLHxW6Xnr1mtpiecPb47RakWrykRFqdLcQNNRVdQPWjhkc35QYco2dtlizVe0hrvSaupqL3Ek0j2n9EvOT6uVfnAqD0mppqe1xLLGwj9FzwHfVusBrbADku11PUPTYrTnhE2SU+DMg+tI1ErJoi5rWDpQMMo3zixmd1IWnc6RwNiRxa0AuPY23FEOb1p6xfQL0dGQasjrv2OEAI2bDsMhG0NOwAgneAYFnlc9znvc5z3G7nOJc5xPEk7SUqJ3yPdJI4ue9xc5x2lznG5J8VnaO4JNX1EdLTjrv3k3ysaPWe63xR7yQN5CJYVLTvle2KJjnyO9VjGlzndzRtK7nCtUWJzAOkbFADwkku76MYcPepp0P0QpsMiEcDbyEDpJSOvIe08G33NGwe9dAhugZ2pKutsqKc/vB/KtPiOqnFYRcQslH6qVpPlJlJ8AVZFEQ5LVbgbqLDoY5Glsr7yyAizg55uA4cCGhjfmrrUXDa2dLzh1KGQutVT3bGeLGj15e8AgD9JwO0AoOa1qay3ROfQYe+zx1Z52n1DxijPt8HO+LuHWuWwuTxO0naSdpJO0kniV8/+5rfaF6LS4pUCniOVgGaWS1xGznbi47gO/gCiWrw3D5qmQRU8T5ZDtysaXG3M+yO02C7nDtTmJSDNIYIbjc6QucOwhjS3ycVN+jmj1Nh8QgpYwxvxjve8+0929x+zcLBbVDdAsupOuAJbPTE8BeQX8chstHimrDFacE+jiUC+2F7X7uTTlefBqssiIafQ/CBRUVNS8Y42h1tl3nrSHxeXHxW4REBERAREQFCutipz15bf8nExvnmf/OFNSgrWcCMSnvxEZH7pg/AqzFO1mh2j/h+5q9w30mtiaRdkfwru5lrfWLVJesjFOgo3MB68x6MfJIu891hb5wXP6mKLqVNQeLmxN7Mozu88zPorXa2cQz1UcI3RM2/KkNz7gxbVJ7zPG/KGrX+zoptHO38ejlY3qcdGcO9Gpooj61sz/lO2u8t3cAoe0No/SKyCMjZmzO7mDOb9htbxUzY9X+j0803FjCW/KOxo+kQtjtDJxTXHXr8hV2TiikXzT5e8o30xxXpqp9j1I/g2/N9Y/Sv4ALDwemNRNHC34x2nkBtcfAArRCVSFqvoLiWpI/Vs9znH7o8CtvLMYMPh08HIxYJ1mr3t1nefL54OzqZo6aEuOyONu4cgLAD3BQ9iNe6aR8rz1nG57OQHYBYeC7HWdiuVsdM07Xdd/cNjR3E3PzQo6dIqOz8O1OOec+jc7ZzceSMVeVfX+HrI9Y0j18fIvB710eTl0ok3VJU3jqY/Ze1/wBNpH8i79RrqcO2s/yf9VSUvO6yd81tvng9j2f+mr86i4HXdXdFhb2XsZpIox4O6Q/VYV3yhv8AtC13/hUw5ySu7wGsb96RazcQ4pb/ALPlBeasqSPVZHE0/LcXvH1IvMKJVYDUTQdHhpl4zzSP8GWiHh1CfFEykZV11zY+arEHQNPwVKOjHIyGxld33sz/ACzzU/4vXNpoJqh/qxRvkPcxpcfsVRpZnSOdI83e8lzjzc45nHzJQh+VYDUno2Kaj9LePhqqzr+zEL9G0cr3Lz8ocgoFoaMzyxQNNnTSMiB5GR4YD5lW8p4GxsbGwWaxoa0DcA0WAHghL0RERAiIgKrusTHzX188wN4mnoouXRxkgOHynZnfOHJWC0+xU0mHVc7TZwjLWHk+T4Nn1nBVXa2wsOCJh9c6wueCs1qw0ZGH0MbXC08tpZjxzOAszua2ze8E8SoA0Iw30rEKOnPqulaXDfdsYMrge9rCPFWsQkRERAiIgIiICIiAiIgKG9clIWVkUvxZIgPnMcc3ucxTIuT1kaOvrqYdC3NNE7MwXAzA7HNudguLHvaFMTtLX1WOcmKYjm/WrGm6PDoDxeXvPi8ge4BRNpZW9NW1UnOVzR3MORvuaFN2j1M6mo6eOQWfHCwPAINi1ozC42HbdV1Epd1ibk7SeZO9XYbbW3c/Xxw4qU+ckkanqXNPPMfiRho75HX87M966LWtW5KVkY3ySC/yWguPvyrE1NwWpZpPalt4NY38XFanXFV3np4fZjc/6bso+4VbW/FqImejLbu9D5+8/wDHEiRTnodR9DR07bWJYHnvf1z9tvBQVh8PSyxxDfI9rB89wb+KsFitUKenllG6ONzh81pIHuV+uzccVrCjsnHFZvknyQ3phifT1k779UOLG9zOr77E+K0hkWN0i+F6365a0rFY6OTk3vebT1eznryc9fhz18jY57msYC5ziGtA3kk2AHeVRk1DKtEvaoqQtpZJT+ckNu1rAB97Mu6WBgOGilp4acbejaATzdvcfFxJ8VnrjXtxWmXrMGPu8da/QVc9ddaJcVkaPzMUUXjYy/6vuVjFU7S2u9Irqubg+aS3yWuLWfVa1YroalxttVqdA6A0+HUURFnCFhcOTnNzv+sSqv4bRekTQ04v8NJHFs3jpHhl/C91b1oAFhsAQlxuuGrMWE1Vt7+jj8Hysa4fRLlWxWH14/3VJ+1hv+8H42Vd0IdNqygz4rQt/WF30Inv+1oVoVVfQCuFPiVDK42aJg0nkJQYtvZ11ahCRERECIiCNNftWWYfFEPztQwEc2sY+T7zWKA1N/8AaE/8aj/bu/hOUIomHe6j4c2KtJt1IJXjvuxlx22efMqxKrfqarhDisIcbCVkkXiWiQX8Y7d5CsgiBERAREQEREBERAREQEREGPiH5KS3sO+6VWNpVoZWZmuaeII8xZVdLC0lrhZzdhHIjYQpidnL7Sj8v39k56powMPYR8aSQnwdl+xoXA61KnNiMjfYZG36uf8AnUgapzfDYux8n8QlRlrKd/3Oq74/4MaypbadzVfpax5ej86CR58QpW7/AITN9Bpf/Kpa1jzlmHVBHEMb9KRrT7iom1cPAxKlv7Tx5xPAUn61v7ul+XHf94P+Fla+9oljpI201/v6ITzr4XryzL5dXTmcnhehcpH1T6Ml7vT5m9RtxCD8Z24ydw2gdt+S1WgugklaWz1ALKXeN4dN2N5MPF3lzEyl0cLGglsbGgNaCQ1oAGwDhuCpvkmfB1dFpJ37y8eT3REVTrtdpHiApqWpqD+aikk4bS1hIAvxJFlUhgsAFY/XRXdFhUzQbOldHEO0F4c8eLGvCriiYdhqkoemxWl5R55T8xhA+s5isuoN/s+0Wapq5yPycTIx/mvLj/CHmpyREuW1nYYarC6uNou4MEjQNpJhcJbDtOUjxVYQVccqteszQt+GVDnxt/8AxyuJicBsjJ2mF3Ijbl5t7QUTDjHC4IPFT7q51nQVMbKaukbFVNAbneQ1k/AODjsEh2XabXO6+4QEhCC44KKolJitRCMsNRNG32WTSMHk1wC9J8cq5BZ9VUOB4OqJSPIushstDjek1HRAuqqmKKwJyucM5A35WDrO7gCtox1wCNxF/NU7iizOAA2uIHeSbeKuMAiEfa8MMM2GmRouaeVkvzbOjd4ASZvmqvSuBV0zJWPikaHMe0tc07i1wsQfAqr2muik2F1BhkBMTrmGXhIzv3ZxsDh47iETDR087o3skjcWvY5r2OG9rmkOaR3EAqxmgusemxBjI5Xthq7AOiccoebetCT6wO3q+sOI3E1vRwB3oLjoqj02NVUQAjqqhgG4NnlaB4B1l8qcYqpRaWpneOT55HDyLrIbLRYlpRRU72RTVMbZXuaxseYOkLnuDWjI27t5G21hxW3VUdCIAcQoW22ekQm1uUgP4K1yIEREBERAREQEREBRBj2h5jxeNzoHy0dRLmOQOIa598zXlvqgOObgMt+RUvoivJijJEb9GLhuHRU0YigYGRi5DRuuTc7+1QhrUgLMSnJ+O2N47ujaz7WFTyov11YG57Yq6MX6MGOWw3NvmY4/oglwPygijWY+LFtHRxGgLXOxClDAXESAm3BovmJ5ABTFrIpzJhtUB8VrX+DHtefcCs/RRsPolM6nYGRuiY4CwB2tB28ztO3jvWzmia9rmPF2uBa4HcQRYg+CJw6fgxzTfmrtoxo3PiMjo4MoDAC9ziQ1oJsNwJJNjYW4FSpo1q0pqYiSoPpEo2jMLRtPYzbm+cT3BeOguidVhtZUC7XUkjdj83XJa74MEe0A59+B9y75N1em0tKxvaPEAXJY+2TpnnM1shd8ES8xjoRTu6odcXPT7XAcDHmBFl1q+EX3o3mtwG2R5Z+RL7xbgMuVty23xS/ORbZY7Nlls0RBwutfRWrxOKnhpTEAyQyP6R7mXOQtbbK11/Wd7lGv/RrFPapf30n+0rCIg4rVVolNhdNNHUFhlklL/g3FzQ0MY1ou4DbcOO7iu1REBeFdRxzxuhmY18bxZzXAOaR2gr3RBEWkOpONxL6Ccxj/ANUoL2jsbIOsB8oOPauMrNVGLR7oGS/s5mefwhYrIIgrJ/00xf8AwTv31P8A7q2NFqixSS2ZkMQO/PKCR4Rh1yrFIid0R6PalhFJHNVVRcWOa8MiYGi7SHAF773Fx7IUuIiIFg4zhEFZE6CpjbJG7geB4FpG1rhzFis5EEM49qRNy6hqRl4Rzg7OwSsG7vbftK5Kr1V4tGbCnbJ2smit9dzT7lZNEFZRq0xf/BO/fU/+6tpRansTeev0EQ/SlLj5MaftVhkQ3RjodqjZRTxVU9S6SSI5mtYwRsvYjrZi4u38Mqk5EQEREBERAREQEREBERAQhEQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQf/9k=",
            },
            {
            name: "BookMyShow",
            logo: "https://etimg.etb2bimg.com/photo/67324520.cms",
            },
            {
            name: "Spotify",
            logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/26/Spotify_logo_with_text.svg/512px-Spotify_logo_with_text.svg.png",
            },
            {
            name: "Netflix",
            logo: "https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg",
            },
        ].map((company) => (
            <div
            key={company.name}
            className="bg-white/10 p-6 rounded-2xl flex items-center justify-center hover:opacity-100 transition"
            >
            <img
                src={company.logo}
                alt={company.name}
                className="h-8 md:h-10 object-contain grayscale hover:grayscale-0 transition"
            />
            </div>
        ))}
        </div>

    </div>
    </section>



      {/* How It Works */}
      <section className="bg-gray-50 py-24 text-gray-800">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-extrabold mb-16">How Evnt Works</h2>

          <div className="grid md:grid-cols-3 gap-12">
            {[
              { step: "1", title: "Sign Up", desc: "Create a free account in seconds." },
              { step: "2", title: "Explore Events", desc: "Find events that match your interests." },
              { step: "3", title: "Book & Enjoy", desc: "Book tickets instantly and attend hassle-free." },
            ].map((step) => (
              <div key={step.step} className="bg-white p-8 rounded-3xl shadow">
                <div className="text-3xl font-extrabold text-indigo-600 mb-4">
                  {step.step}
                </div>
                <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                <p className="text-gray-600">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 text-center">
        <h2 className="text-4xl font-extrabold mb-6">
          Ready to Attend an Event?
        </h2>
        <p className="text-indigo-100 mb-10">
          Join thousands of users who trust Evnt for seamless event experiences.
        </p>
        <a
          href="/register"
          className="bg-white text-indigo-700 px-12 py-4 rounded-2xl font-bold shadow-xl hover:scale-105 transition"
        >
          Get Started for Free
        </a>
      </section>

      {/* Footer */}
      <footer className="bg-black/20 py-8 text-center text-indigo-100 text-sm">
        © {new Date().getFullYear()} Evnt. All rights reserved.
      </footer>
    </main>
  );
}
