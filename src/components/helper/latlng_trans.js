    
module.exports = {

    
latlngTrans: function (lnglat_input) {

    //pomocna funkce chunk, pro vytvoreni libovolneho paru souradnic
    function chunk(array, size) {
    const chunked_arr = [];
    let index = 0;
    while (index < array.length) {
        chunked_arr.push(array.slice(index, size + index));
        index += size;
    }
    return chunked_arr;
    }
    
        
    const string = JSON.stringify(lnglat_input); 


    if (string.includes("[[[[") === true){
        
    // rozdeleni si hlavnich n polygonu, 
    let lnglat_n = string.split("]],[[");
    let n = lnglat_n.length;
    console.log("je to dvojity polygon a ma " + n + " hlavni pole" + string);

    // dalsi postup, smycka zatim natrvdo pro [0] a [1], to musi priji pozdeji do for smycky
    let i, lnglat_n_poly, latlng_n, latlng_n_string, latlng_num;
    let newArray=[];
    let latlng_trans=[];

    for (i=0; i<n; i++) {
    
    lnglat_n_poly = lnglat_n[i].split("],[");
    latlng_n = lnglat_n_poly.map(function(x) { 
        const couple = (/-?\d+.\d+,-?\d+.\d+/g).exec(x).toString();
        const splitted = couple.split(",");
          return ""+splitted[1]+","+splitted[0]+"";
                              } );
    
    latlng_n_string = latlng_n.toString().split(",");
    latlng_num = latlng_n_string.map(Number);
    latlng_trans[i] = chunk(latlng_num, 2);   
    
    newArray.push(latlng_trans[i])
      
    }
  
    console.log(JSON.stringify(newArray));
    return newArray;
    }
      
    
    else if (string.includes("[[") === true){

    let newArray=[];

    console.log("je to jednoduchy polygon")

    const lnglat = string.split("],[");        
    const latlng = lnglat.map(function(x) { 
    const couple = (/-?\d+.\d+,-?\d+.\d+/g).exec(x).toString();
    const splitted = couple.split(",");
    return ""+splitted[1]+","+splitted[0]+"";
                            } );
    latlng.join();

    const latlng_string = latlng.toString().split(",");
    const latlng_num = latlng_string.map(Number);    
    const latlng_trans = chunk(latlng_num, 2);
    
    console.log(JSON.stringify(latlng_trans));
    
    newArray.push(latlng_trans)

    return newArray;

    }

    else {
        console.log("nejkde je chyba kurva")
    }


}

}