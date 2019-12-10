import React from 'react' 
import PerfectScrollbar from 'react-perfect-scrollbar' 
export default function LoadScrollbar(props) {
    let dev_slimscrioll = 'home_scroll';
    return ( 
        <PerfectScrollbar style={{overflowX: 'hidden'}} className={dev_slimscrioll}>
            <section id="dev_main_slimscroll" className="dev-main-section"> 
                {props.children}
            </section> 
        </PerfectScrollbar>  
    )
}
