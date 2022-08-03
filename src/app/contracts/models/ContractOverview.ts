import * as moment from "moment";

export interface Contract_Overview {
    _id: string;
    contractor_name: string;
    contract_category: string;
    periodicity: string;
    contract_value: number;
    effective_date: moment.Moment;
    responsible: string;
    contract_status: string;
}