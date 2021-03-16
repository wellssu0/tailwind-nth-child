class NthChild {
    constructor(name_suffix, nth) {
        this.nth = nth;
        this.name_suffix = name_suffix;
    }

    nthChild() {
        const nth = this.nth;
        const name_suffix = this.name_suffix
        return function ({ addVariant }) {
            addVariant('nth-child-' + name_suffix, ({ modifySelectors, separator }) => {
                modifySelectors(({ className }) => {
                    const css = `.nth-child-${name_suffix}\\${separator}${className}>*:nth-child(${nth})`
                    return css;
                });
            })
        }
    }
}

module.exports = NthChild;