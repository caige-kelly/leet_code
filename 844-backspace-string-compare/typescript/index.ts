function backspaceCompare(s: string, t: string): boolean {
    s = parse(s);
    t = parse(t);

    return s === t ? true : false;
}

function parse(s:string): string {
    if (s.indexOf("#") === 0)
        s = s.slice(1, s.length)

    while (s.indexOf("#") > 0){
        const position = s.indexOf("#");
        s = s.substring(0, position-1) + s.substring(position+1, s.length);
        console.log(s);
    }

    if (s.indexOf("#") === -1)
        return s

    return parse(s);
}