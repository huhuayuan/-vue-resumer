const errors = {
  202: '该用户名已被占用',
  217: '无效的用户名',
  unknow: '注册失败，请稍后再试'
}

export default function({code}){
  return errors[code] || errors.unknow
}
