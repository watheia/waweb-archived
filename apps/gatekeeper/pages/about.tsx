import { META_DESCRIPTION, services } from "@waweb/model"
import { Dotbox, WaBanner } from "@waweb/gfx"
import { Page } from "@waweb/layout"

// const StrategySection = () => {
//   return (
//     <dl className="p-4 pt-6 md:pt-10 space-y-2 md:space-y-0 md:grid  md:gap-x-8 md:gap-y-10">
//       <p className="leading-8 tracking-tight text-shark-900 text-2xl">
//         Our process for sucess
//       </p>
//       {solutions.map((feature) => (
//         <div key={feature.name} className="relative">
//           <dt>
//             <div className="absolute flex items-center justify-center h-12 w-12 .,lk bg-aqua-500 text-white">
//               <feature.icon className="h-6 w-6" aria-hidden="true" />
//             </div>
//             <p className="ml-16 text-lg leading-6 font-medium text-shark-900">
//               {feature.name}
//             </p>
//           </dt>
//           <dd className="mt-2 ml-16 text-md text-shark-500">{feature.description}</dd>
//         </div>
//       ))}
//     </dl>
//   )
// }

const FormationBlockquote = ({ children }: { children: any }) => {
  return (
    <blockquote className="relative bg-white rounded-lg shadow-lg">
      <div className="rounded-t-lg px-6 py-4 sm:px-6 sm:pt-5 sm:pb-8">
        <WaBanner className="h-14 float-left mr-8" />
        <div className="relative text-lg text-shark-900 font-medium mt-4">
          <svg
            className="absolute top-0 left-0 transform -translate-x-3 -translate-y-2 h-8 w-8 text-shark-200"
            fill="currentColor"
            viewBox="0 0 32 32"
            aria-hidden="true"
          >
            <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
          </svg>
          <p className="relative text-tracking-tight">{children}</p>
        </div>
      </div>
    </blockquote>
  )
}

const ServiceSection = () => (
  <div className="relative">
    <h3 className="text-2xl font-extrabold text-shark-900 tracking-tight pt-6 text-2xl">
      What we do
    </h3>
    <p className="mt-3 text-lg text-shark-500">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur minima sequi
      recusandae, porro maiores officia assumenda aliquam laborum ab aliquid veritatis
      impedit odit adipisci optio iste blanditiis facere. Totam, velit.
    </p>
    <dl className="mt-10 space-y-10">
      {services.map((item) => (
        <div key={item.id} className="relative">
          <dt>
            <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-aqua-500 text-white">
              <item.icon className="h-6 w-6" aria-hidden="true" />
            </div>
            <p className="ml-16 text-lg leading-6 font-medium text-shark-900">
              {item.name}
            </p>
          </dt>
          <dd className="mt-2 ml-16 text-base text-shark-500">{item.description}</dd>
        </div>
      ))}
    </dl>
  </div>
)

/*
  This example requires Tailwind CSS v2.0+ 
  
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/typography'),
    ],
  }
  ```
*/
export function About(props) {
  const meta = {
    title: "About Us",
    description: META_DESCRIPTION
  }
  return (
    <Page meta={meta} className="py-16 bg-shark-100 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 space-y-8 sm:px-6 lg:px-8">
        <div className="text-base max-w-prose mx-auto lg:max-w-none">
          <h2 className="text-base text-regal-blue-700 font-semibold uppercase">
            We build tomorrow&quot;s technology today.
          </h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-shark-900 sm:text-4xl">
            About Us
          </p>
        </div>
        <div className="lg:grid lg:grid-cols-2 lg:gap-8 lg:items-start">
          <div className="relative z-10">
            <div className="prose prose-aqua text-shark-500 mx-auto lg:max-w-none">
              <h3>What we do</h3>
              <ul role="list">
                <li>Design architectures that are adaptable and resilient to change</li>
                <li>Progressively enhance behavior based on detected hardware features.</li>
                <li>
                  Refurbish, repair, or recycle electronic waste (household appliances,
                  printer/fax machines, multi-unit phone systems, whole desktop computers
                  (most likely missing the install key).
                </li>
                <li>
                  Maintain a free emergency hotline for seniors as they become exposed to
                  large-scale misinformation, scams, and identity theft campaigns.
                </li>
              </ul>
              <p>
                Rhoncus nisl, libero egestas diam fermentum dui. At quis tincidunt vel
                ultricies. Vulputate aliquet velit faucibus semper. Pellentesque in
                venenatis vestibulum consectetur nibh id. In id ut tempus egestas. Enim sit
                aliquam nec, a. Morbi enim fermentum lacus in. Viverra. [{" "}
              </p>
              <h3>We’re here to help</h3>
              <p>
                Tincidunt integer commodo, cursus etiam aliquam neque, et. Consectetur
                pretium in volutpat, diam. Montes, magna cursus nulla feugiat dignissim id
                lobortis amet. Laoreet sem est phasellus eu proin massa, lectus. Diam rutrum
                posuere donec ultricies non morbi. Mi a platea auctor mi.
              </p>
            </div>
            <div className="mt-10 flex text-base max-w-prose mx-auto lg:max-w-none">
              <div className="rounded-md shadow">
                <a
                  href="#"
                  className="w-full flex items-center justify-center px-5 py-3 border border-transparent text-secondary font-medium rounded-md text-white bg-aqua-600 hover:bg-aqua-700"
                >
                  Contact sales
                </a>
              </div>
              <div className="rounded-md shadow ml-4">
                <a
                  href="#"
                  className="w-full flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-aqua-600 bg-white hover:bg-shark-100"
                >
                  Learn more
                </a>
              </div>
            </div>
          </div>
          <div className="mt-12 relative text-base max-w-prose mx-auto lg:mt-0 lg:max-w-none">
            <Dotbox />
            <FormationBlockquote>
              Watheia Labs was formed by Aaron R Miller and Patrick S Stevenson to build and
              manage a portfolio of IT products and services.
            </FormationBlockquote>
            <ServiceSection />
          </div>
        </div>
      </div>
    </Page>
  )
}

export default About