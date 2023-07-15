let req = null;
fetch("http://localhost:4000/Careers")
    .then(res => {
        if (res.ok) {
            alert("ok")
        }
      return  res.json()
    })
    .then(data =>{
        return data;
    })
    .catch(err => console.log(err))
// console.log(req)