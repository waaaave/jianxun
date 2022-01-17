import Ajax from './ajax.js'

// 所有方法接口的列表
export const reqmain = () => {
  return Ajax('/all/main')
}

export const reqhome = () => {
  return Ajax('/all/home')
}

export const reqinforms = () => {
  return Ajax('/all/informs')
}