
setInterval(() => {
  let Sec = new Date();

  let getSec = Sec.getSeconds()

  const defaultRotate = -90;

  let changeRotation = getSec * 6;

  let changed = String(defaultRotate + changeRotation)+"deg";

  document.querySelector(".sec").style.rotate = changed;

  let getMin = Sec.getMinutes()

  let min_change_Rotation = getMin * 6;

  let min_changed = String(defaultRotate + min_change_Rotation)+"deg";

  document.querySelector(".min").style.rotate = min_changed;

  let get_hr = Sec.getHours();

  let min_rotate = getMin * 0.5;

  let get_rotation = defaultRotate + min_rotate

  let hr_convert = (defaultRotate + get_hr *30);

  let convert_hr_convert = hr_convert + get_rotation

  let hr_change_rotation = String(Math.abs(defaultRotate-convert_hr_convert))+"deg";

  document.querySelector(".hr").style.rotate = hr_change_rotation;
  
},1000);


//min


