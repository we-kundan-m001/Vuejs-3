import {ref} from 'vue';

export const count = () =>({
     clickcount:ref(0),
     hovercount:ref(0),
     incrementClick() {
        this.clickcount++;
    },
     //hovercountclick:()=>this.hovercount.value++
     hovercountclick(){
        this.hovercount++;
     },

})



