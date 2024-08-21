import Link from "next/link";
import Image from "next/image";
import Button from "@/buttons/button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBasketShopping } from "@fortawesome/free-solid-svg-icons";

export default function HeadBar() {
    return (
        <main>
            <div style={{marginTop:'30px',marginBottom:'30px'}} className="flex flex-row">
                <Link href="/" className="basis-1/4">
                    <Image 
                        src="next.svg" 
                        width={100}
                        height={100}
                        alt="A random image"
                    />
                </Link>
                <div className="flex flex-row basis-3/4" style={{textAlign:"right"}}>
                    <div className="basis-2/4"><Button color="blue" children="Login or Register"/></div>
                    <div className="flex flex-row basis-2/4" style={{textAlign:"right"}}>
                        <div className="basis-2/4">
                            <FontAwesomeIcon icon={faBasketShopping} style={{width:"35px",marginLeft:"200px"}}/>
                        </div>
                        <p className="basis-2/4">$0.0</p>
                    </div>
                </div>
            </div>
        </main>
    );
}