import Ajax from './ajax.js'

// 所有方法接口的列表
export const reqmain = () => {
  return Ajax('/all/main')
}