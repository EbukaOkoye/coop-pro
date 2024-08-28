import { poppins } from "@/utils/helpers";
import { Assets } from "@/utils/remoteAssets";
import Image from "next/image";

const ForgotPasswordLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className={`h-screen`}>
            <div className="p-8">
                <Image
                    src={Assets.logo}
                    width={129}
                    height={106}
                    alt=""
                />
            </div>
            <div className="flex justify-center items-center -mt-8">
                {children}
            </div>
        </div>
    );
};

export default ForgotPasswordLayout;