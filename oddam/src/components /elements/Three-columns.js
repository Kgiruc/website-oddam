import React from "react";


export default function ThreeColumns(){
    return(
        <>

            <div className="container__three-columns" id="three_columns">
                <div className="container__three-columns__1 column">
                    <ul>
                        <li>10</li>
                        <li>ODDANYCH WORKÓW</li>
                        <li className="subs">Lorem ipsum dolor sit amet, consectetur adipisc Pellentesque vel enim a elit viverra elementuma. Aliquam erat volutpat.</li>
                    </ul>
                </div>
                <div className="container__three-columns__2 column">
                    <ul>
                        <li>5</li>
                        <li>WSPARTYCH ORGANIZACJI</li>
                        <li className="subs">Lorem ipsum dolor sit amet, consectetur adipisc Pellentesque vel enim a elit viverra elementuma. Aliquam erat volutpat.</li>
                    </ul>
                </div>
                <div className="container__three-columns__3 column">
                    <ul>
                        <li>7</li>
                        <li>ZORAGNIZOWANYCH ZBIÓREK</li>
                        <li className="subs">Lorem ipsum dolor sit amet, consectetur adipisc Pellentesque vel enim a elit viverra elementuma. Aliquam erat volutpat.</li>
                    </ul>
                </div>
            </div>
        </>
    )
}