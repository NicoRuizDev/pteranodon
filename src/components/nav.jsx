export default function Nav() {
  return(
      <nav class="border-b w-1/2 rounded-full ml-auto mr-auto mt-7 bg-white dark:bg-zinc-800 dark:border-zinc-700">
      <div
        class="flex items-baseline justify-end sm:justify-between p-4 max-w-screen-xl mx-auto"
      >
        <a href="/" class="hidden sm:block font-semibold text-lg text-zinc-900"
          >ServerDeploy</a
        >
        <div>
          <ul class="font-medium flex items-baseline gap-8">
          <li>
              <a
                href="/partners"
                class="block text-zinc-900 transition-all hover:text-blue-600 hover:underline">Partners</a
              >
            </li>
            <li>
              <a
                href="/dashboard"
                class="block text-zinc-900 transition-all hover:text-blue-600 hover:underline">Dashboard</a
              >
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}