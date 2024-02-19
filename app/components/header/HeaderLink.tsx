import Link from "next/link";

interface Props {
	ariaLabel: string;
	text: string;
	link: string;
}
const HeaderLink: React.FunctionComponent<Props> = ({
	ariaLabel,
	text,
	link,
}) => {
	return (
		<Link href={link} aria-label={ariaLabel} className="header__link">
			<p className="text-[color:var(--secondary-color)] hover:text-[color:var(--tertiary-color)] uppercase">{text}</p>
		</Link>
	);
};

export default HeaderLink;