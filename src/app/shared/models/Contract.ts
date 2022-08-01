import { Field } from "./Field";

export interface Contract {
    _id?: string;
    fields: Field[];
}

export interface Contract_Overview {
    contractor_name: string;
    contract_category: string;
    periodicity: string;
    contract_value: number;
    effective_date: Date;
    responsible: string;
    contract_status: string;
}