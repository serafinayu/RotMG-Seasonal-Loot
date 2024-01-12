class Item {
    name = '';
    tier = '';
    constructor(name, tier) {
        this.name = name;
        this.tier = tier;
        this.amount;
    }

    // setTiered() sets the tier to 'Tiered' if the item is not a UT or ST
    setTiered() {
        if (this.tier !== 'UT' || this.tier !== 'ST') {
            this.tier = 'Tiered'
        }
        return this.tier
    }

    // addOne() adds to the counter for the item
    addOne() {
        this.amount = this.amount + 1;
        return this.amount;
    }

    // minusOne() removes one from the counter for the item
    minusOne() {
        this.amount = this.amount - 1;
        return this.amount
    }
}

