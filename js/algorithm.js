// This function finds the longest word in a string. The string might have numbers and puntuations but we do not count ponctuations.
function FindLongestWord(str) {
    s = str.toLocaleLowerCase()
    let nstr = s.split(" ")
    let highest = nstr[0]
    let len = highest.match(/[a-z0-9]/g).length

    for (let item of nstr) {

        let itemLen = item.match(/[a-z0-9]/g).length

        if (itemLen > len) {
            highest = item
            len = itemLen
        } if (itemLen == len) {
            if (nstr.indexOf(item) < nstr.indexOf(highest)) {
                highest = item
                len = itemLen
            }
        }

    }
    return highest
}
