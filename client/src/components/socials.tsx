import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faDiscord,
    faInstagram,
} from "@fortawesome/free-brands-svg-icons";

interface SocialsProps {
    baseColor: string;
    hoverColor: string;
    showDiscord?: boolean;
    showInstagram?: boolean;
}


export function Socials({
    baseColor = "text-white",
    hoverColor = "hover:text-red-500",
    showDiscord = true,
    showInstagram = true,
}: SocialsProps) {
    return (
        <div className='z-50 relative flex sm:[&>*]:mx-4 [&>*]:mx-3 text-white text-2xl sm:[&>*]:text-3xl [&>*]:align-center'>
            {showDiscord && (
                <a className={`${baseColor} ${hoverColor}`} target='_blank' href="https://discord.gg/yRShGV7Py4"><FontAwesomeIcon icon={faDiscord} /></a>
            )}
            {showInstagram && (
                <a className={`${baseColor} ${hoverColor}`} target='_blank' href="https://www.instagram.com/realhackcc/"><FontAwesomeIcon icon={faInstagram} /></a>
            )}
        </div>
    );
}
