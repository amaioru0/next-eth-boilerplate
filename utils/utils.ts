import { utils } from 'ethers'

export const shorten = (str: string) => {
    if (str.length < 10) return str
    return `${str.slice(0, 6)}...${str.slice(str.length - 4)}`
  }

  export const stringToColor = function(str:string) {
    var hash = 0;
    for (var i = 0; i < str.length; i++) {
      hash = str.charCodeAt(i) + ((hash << 5) - hash);
    }
    var colour = '#';
    for (var i = 0; i < 3; i++) {
      var value = (hash >> (i * 8)) & 0xFF;
      colour += ('00' + value.toString(16)).substr(-2);
    }
    return colour;
  }

  export const hexToRgb = (hex:any) => {
    var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? {
      r: parseInt(result[1], 16),
      g: parseInt(result[2], 16),
      b: parseInt(result[3], 16),
      a: 0.5
    } : null;
  }

  export const isAddress = (address: string): boolean => {
    try {
      utils.getAddress(address)
    } catch (e) {
      return false
    }
    return true
  }
  
  export const isContract = async (
    provider: any,
    address: string
  ): Promise<boolean> => {
    const code = await provider.getCode(address)
    return code
  }