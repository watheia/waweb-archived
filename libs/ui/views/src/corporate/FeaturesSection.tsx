import { features } from "@watheia/catalog"

export const FeaturesSection = () => (
  <div className="relative bg-shark-50 py-16 sm:py-24 lg:py-32">
    <div className="mx-auto max-w-md px-4 text-center sm:max-w-3xl sm:px-6 lg:px-8 lg:max-w-7xl">
      <h2 className="text-base font-semibold tracking-wider text-aqua-600 uppercase">
        Deploy faster
      </h2>
      <p className="mt-2 text-3xl font-extrabold text-shark-900 tracking-tight sm:text-4xl">
        Everything you need to deploy domain-driven functions, services, and apps
      </p>
      <p className="mt-5 max-w-prose mx-auto text-xl text-shark-500">
        We provide everything you need for modern micro frontend applications, focusing more
        on the composition of independent components and services than monolithic apps.
        Build with confidence using core technologies developed internally at Google.
      </p>
      <div className="mt-12">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <div key={feature.name} className="pt-6">
              <div className="flow-root bg-shark-200 rounded-lg px-6 pb-8">
                <div className="-mt-6">
                  <div>
                    <span className="inline-flex items-center justify-center p-3 bg-gradient-to-r from-aqua-500 to-aqua-400 rounded-md shadow-lg">
                      <feature.icon className="h-6 w-6 text-shark-50" aria-hidden="true" />
                    </span>
                  </div>
                  <h3 className="mt-8 text-lg font-medium text-shark-900 tracking-tight">
                    {feature.name}
                  </h3>
                  <p className="mt-5 text-base text-shark-500">{feature.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </div>
)

export default FeaturesSection
