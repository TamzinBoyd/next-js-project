import HeaderLink from "./HeaderLink";
import LinkedInIcon from "../../assets/svgs/LinkedInIcon";

export default function Header() {

	return (
		<nav className='header w-full h-12 flex justify-end '>
			<div className='header__links flex items-center gap-8'>
                <HeaderLink text="projects" link="/projects" ariaLabel="View projects"/>
                <HeaderLink text="experience" link="/experience" ariaLabel="View experience"/>
                <HeaderLink text="about" link="/about" ariaLabel="View about Tamzin Boyd"/>
            </div>
            <LinkedInIcon />
		</nav>
	);
};