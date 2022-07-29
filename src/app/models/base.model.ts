/**
 * User Model
 */
export class SessionUser {
    public name: string;
    public username: string;
    public email: string;
    public phone: string;
    public user_application_id: number;
    public active?: boolean;
    public carrier_id: number;
    public dealership_default_id: number;

    constructor() {
        this.name = '';
        this.username = '';
        this.email = '';
        this.phone = '';
        this.user_application_id = 0;
        this.carrier_id = 0;
        this.dealership_default_id = 0;
    }
}

/**
 * Dealer Model
 */
export class Dealer {
    public name: string;
    public code: string;
    public dealerGroup: string;
    public dealerGroupID: number;
    public dealerGroupCode: string;
    public logoUrl: string;

    constructor() {
        this.name = '';
        this.code = '';
        this.dealerGroup = '';
        this.dealerGroupID = 0;
        this.dealerGroupCode = '';
        this.logoUrl = '';
    }
}

/**
 * Group Model
 */
export class DealerGroup {
    public id: number;
    public code: string;
    public name: string;

    constructor() {
        this.id = 0;
        this.code = '';
        this.name = '';
    }
}
