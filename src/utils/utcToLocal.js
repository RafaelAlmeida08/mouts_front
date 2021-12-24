export default function utcToLocal (data) {
    let dia = new Date(data);
    let result = 
    dia.getDate()+
    "/"+(dia.getMonth()+1)+
    "/"+dia.getFullYear()+
    " "+dia.getHours()+
    ":"+dia.getMinutes()+
    ":"+dia.getSeconds() 
    return result;
}