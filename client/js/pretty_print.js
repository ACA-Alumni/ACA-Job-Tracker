_upper1 = (str)=>{
    return str.charAt(0).toUpperCase() + str.substr(1)
}

_upperAll = (str)=>{
    str = str.split('_')
    let up_str = ''
    for (const c of str) {
        if (up_str.length !== 0) {
            up_str += ' '
        }
        up_str += _upper1(c)
    }
    return up_str
}