import Link from "next/link"

export const NavigationBar = () => {
  return (
    <nav className="flex gap-16 px-16 py-8 bg-primary text-primary-foreground text-xl">
      <Link href="https://2020.igem.wiki/toronto" target="_blank">
        2020
      </Link>
      <Link href="https://2021.igem.wiki/toronto" target="_blank">
        2021
      </Link>
      <Link href="https://2022.igem.wiki/toronto" target="_blank">
        2022
      </Link>
      <Link href="https://2023.igem.wiki/toronto" target="_blank">
        2023
      </Link>
      <Link href="https://2024.igem.wiki/utoronto" target="_blank">
        2024
      </Link>
    </nav>
  )
}
