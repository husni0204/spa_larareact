import React from "react";

import { Helmet } from "react-helmet";
import Layout from "../components/Layout";
import { styles } from "../styles";
import { InertiaLink } from "@inertiajs/inertia-react";


const TwoFactorAuth = (props) => {
   
  console.log(props)
   
    return (
        <div>
            <Helmet>
                <title>Two Factor auth</title>
            </Helmet>

           <div className="mb-5 font-bold">
               Your Two actor Auth {props.user.two_factor_secret === null ? (<span className="bg-red-500 px-4 py-2 rounded-sm font-bold text-white">Disable</span>) : (<span className="bg-green-500 px-4 py-2 rounded-sm font-bold text-white">Enable</span>)}
           </div>
            <div className="flex flex-col justify-center mt-10 mb-4">
                <div className="items-center">
                   {/* for qrcode */}
                   {props.qrCode && (<span dangerouslySetInnerHTML={{ __html : props.qrCode }}></span>)}

                   <p>Silahkan scan qr code disamping untuk mendapatkan code auth</p>
                   <a href="https://play.google.com/store/apps/details?id=com.authy.authy">download apps</a>
                </div>
                <div className="items-center mt-3">
                    <p>Your Recovery Code</p>
                    <ol>
                        {props.recoveryCode.map((rCode)=> (
                            <li key={rCode}>{rCode}</li>
                        ))}
                    </ol>
                    
                </div>
            </div>
            {props.user.two_factor_secret === null ? (<InertiaLink
                className={styles.classNameButton("bg-green-400")}
                href="/user/two-factor-authentication"
                method="post"
                as="button"
                type="button"
            >
                Enable
            </InertiaLink>) : (<InertiaLink
                className={styles.classNameButton("bg-red-400")}
                href="/user/two-factor-authentication"
                method="delete"
                as="button"
                type="button"
            >
                Disable
            </InertiaLink>)}
           
                
            

            
        </div>
    );
};
TwoFactorAuth.layout = (page) => (
    <Layout user={page.props.user} children={page} />
);
export default TwoFactorAuth;
