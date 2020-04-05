
const date = new Date();
function realTime() {
  return date.getFullYear()+"-"
         +date.getMonth() +"-"
         +date.getDate()+" "
         +date.getHours()+":"
         +date.getSeconds()+":"
         +date.getMinutes()
}

export default realTime