class Serialization {
    serialization: any;
    deserialization: string;
    concatOprator: string;
    splitOprator: string;
    constructor(target: string, keyValueOprator = "=", splitOprator = ";") {
        this.concatOprator = keyValueOprator;
        this.splitOprator = splitOprator;
        this.deserialization = target;
        this.serialization = {};
        this.parser(this.deserialization);
    }
    parser(target: string): void {
        target = target.replace(/\s+/g, "");
        var list: string[] = target.split(this.splitOprator);
        for (let i = 0; i < list.length; i++) {
            let kv = list[i].split(this.concatOprator);
            this.serialization[kv[0]] = kv[1];
        }
    }
    /**
     * [toString description]
     * @return {string} [description]
     */
    toString(): string {
        var finalString: string[] = [];
        var keyList: string[] = Object.keys(this.serialization);
        for (let i = 0; i < keyList.length; i++) {
            finalString.push(`${keyList[i]}=${this.serialization[keyList[i]]}`)
        }
        return finalString.join(this.splitOprator);
    }
    /**
     * [setCookie description]
     * @param {string} key   [description]
     * @param {string} value [description]
     */
    setOne(key: string, value: string) {
        this.serialization[key] = value;
        this.deserialization = this.toString();
        /*this.onChange({
            "newest":value,
            "old":this.query[key],
        })*/
    }
    getAll() {
        return this.deserialization;
    }
    /**
     * [getCookie description]
     * @param {string} key [description]
     * @return {string}
     */
    getOne(key: string) {
        return this.serialization[key];
    }
}
