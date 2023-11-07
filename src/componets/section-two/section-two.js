import React from 'react';
import { onScrollAndLoad } from '../../animations';

function sectionTwo(){
    return(
        <>
            <section>
                lorem
            </section>
        </>
    )
}

window.addEventListener('load', onScrollAndLoad);
window.addEventListener('scroll', onScrollAndLoad);
  
export default sectionTwo;