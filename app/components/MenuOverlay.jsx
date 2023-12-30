import NavLink from "./NavLink"

function MenuOverlay({links, setMenuOverlay}) {
  return (
    <ul className="flex flex-col py-4 items-center ">
      {links.map((link, index) => (
        <li key={index}>
            <NavLink  href={link.path} tittle={link.tittle}>{link.name}</NavLink>
        </li>
      ))}
    </ul>
  )
}

export default MenuOverlay