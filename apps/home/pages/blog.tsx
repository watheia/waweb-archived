/* This example requires Tailwind CSS v2.0+ */
import clsx from "clsx"
import { posts } from "@watheia/catalog"
export const Header = () => {
  return (
    <div className="bg-shark-50">
      <div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-base font-semibold text-indigo-600 tracking-wide uppercase">
            Pricing
          </h2>
          <p className="mt-1 text-4xl font-extrabold text-gray-900 sm:text-5xl sm:tracking-tight lg:text-6xl">
            Take control of your team.
          </p>
          <p className="max-w-xl mt-5 mx-auto text-xl text-gray-500">
            Start building for free, then add a site plan to go live. Account plans unlock
            additional features.
          </p>
        </div>
      </div>
    </div>
  )
}

const FeaturedPosts = () => (
  <div className="bg-shark-50 pt-16 pb-20 px-4 sm:px-6 lg:pt-24 lg:pb-28 lg:px-8">
    <div className="relative max-w-lg mx-auto divide-y-2 divide-shark-200 lg:max-w-7xl">
      <div>
        <h2 className="text-3xl tracking-tight font-extrabold text-shark-900 sm:text-4xl">
          Recent publications
        </h2>
        <p className="mt-3 text-xl text-shark-500 sm:mt-4">
          Nullam risus blandit ac aliquam justo ipsum. Quam mauris volutpat massa dictumst
          amet. Sapien tortor lacus arcu.
        </p>
      </div>
      <div className="mt-12 grid gap-16 pt-12 lg:grid-cols-3 lg:gap-x-5 lg:gap-y-12">
        {posts.map((post) => (
          <div key={post.title}>
            <div>
              <a href={post.category.href} className="inline-block">
                <span
                  className={clsx(
                    post.category.color,
                    "inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium"
                  )}
                >
                  {post.category.name}
                </span>
              </a>
            </div>
            <a href={post.href} className="block mt-4">
              <p className="text-xl font-semibold text-shark-900">{post.title}</p>
              <p className="mt-3 text-base text-shark-500">{post.description}</p>
            </a>
            <div className="mt-6 flex items-center">
              <div className="flex-shrink-0">
                <a href={post.author.href}>
                  <span className="sr-only">{post.author.name}</span>
                  <img
                    className="h-10 w-10 rounded-full"
                    src={post.author.imageUrl}
                    alt=""
                  />
                </a>
              </div>
              <div className="ml-3">
                <p className="text-sm font-medium text-shark-900">
                  <a href={post.author.href}>{post.author.name}</a>
                </p>
                <div className="flex space-x-1 text-sm text-shark-500">
                  <time dateTime={post.datetime}>{post.date}</time>
                  <span aria-hidden="true">&middot;</span>
                  <span>{post.readingTime} read</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
)

export default function Index() {
  return (
    <>
      <Header />
      <FeaturedPosts />
    </>
  )
}
