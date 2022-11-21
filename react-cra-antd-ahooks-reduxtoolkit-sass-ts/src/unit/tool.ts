import { envInfoFace } from '../api-interface/type'

/**
 * baseInfo
 */
const envInfo = () => {
  const envDevObj: envInfoFace = {
    baseUrl: '测试地址dev'
  }
  const envProObj: envInfoFace = {
    baseUrl: '生产地址pro'
  }
  return process.env.NODE_ENV === 'development' ? envDevObj:envProObj
}

export { envInfo };
