export function getCookie(cname: string, parsed?: boolean) {
  var match = document.cookie.match(new RegExp('(^| )' + cname + '=([^;]+)'))

  // @ts-ignore
  match = match && match[2] ? match[2] : null

  // @ts-ignore
  return parsed ? JSON.parse(match) : match
}

export function setCookie(cname: string, cvalue: string, exdays: number) {
  var d = new Date()

  d.setTime(d.getTime() + exdays * 24 * 60 * 60 * 1000)

  var expires = 'expires=' + d.toUTCString()

  console.log(cname, cvalue, exdays, expires)

  document.cookie = cname + '=' + cvalue + ';' + expires + ';path=/'
}

export function eraseCookie(cname: string) {
  setCookie(cname, '', -1)
}
