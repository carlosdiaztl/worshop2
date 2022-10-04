class x{
    constructor(id){
    this.target =document.getElementById(id)
}
}
const {target:menuH} =new x('menuhamburguesa')
const {target:menuI} =new x('menuinterno')
const {target:menuH1} =new x('menuhamburguesa1')
const {target:menuI1} =new x('menuinterno1')
const {target:Company} =new x('Company')
const {target:Companys} =new x('Companys')
const {target:Company1} =new x('Company1')
const {target:Companys1} =new x('Companys1')
const {target:menu} =new x('menu')
const {target:bigmenu} =new x('bigmenu')

const ocularYmostrar =()=>{
    
    if(menuI.classList.contains('hidden')){
        menuI.classList.remove('hidden')
    }
    else{
        menuI.classList.add('hidden')
    }
}
const ocularYmostrar2 =()=>{
    
    if(Companys.classList.contains('hidden')){
        Companys.classList.remove('hidden')
    }
    else{
        Companys.classList.add('hidden')
    }
}
const ocularYmostrar3 =()=>{
    
    if(bigmenu.classList.contains('hidden')){
        bigmenu.classList.remove('hidden')
    }
    else{
        bigmenu.classList.add('hidden')
    }
}
const ocularYmostrar4 =()=>{
    
    if(menuI1.classList.contains('hidden')){
        menuI1.classList.remove('hidden')
    }
    else{
        menuI1.classList.add('hidden')
    }
}
const ocularYmostrar5 =()=>{
    
    if(Companys1.classList.contains('hidden')){
        Companys1.classList.remove('hidden')
    }
    else{
        Companys1.classList.add('hidden')
    }
}

menuH.addEventListener('click',ocularYmostrar)
Company.addEventListener('click',ocularYmostrar2)
menu.addEventListener('click',ocularYmostrar3)
menuH1.addEventListener('click',ocularYmostrar4)
Company1.addEventListener('click',ocularYmostrar5)

