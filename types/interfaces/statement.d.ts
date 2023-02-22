export interface IGetStatementsApiResponse {
    error_code: string;
    http_code: string;
    limit: number;
    page: number;
    page_count: number;
    statements_count: number;
    statements: (IStatementObject | IInterestIncome1099)[];
    success: boolean;
}
/**
 * {@link [Statement Object Details](https://docs.synapsefi.com/api-references/statements/statement-object-details)}
 */
export interface IStatementObject {
    _id: string;
    client: {
        id: string;
        name: string;
        user_id: string;
    };
    date_end: number;
    date_start: number;
    end_date: number;
    ending_balance: number;
    is_fee_node: boolean;
    node: IStatementNode;
    node_id: string;
    opening_balance: number;
    start_date: number;
    subnet: IStatementSubnet;
    type: string;
    urls: {
        csv: string;
        json: string;
        pdf: string;
    };
    user_id: string;
    user_name: string;
}
export interface IStatementNode {
    created_on: number;
    currency: string;
    nickname: string;
    type: string;
}
export interface IStatementSubnet {
    account_num: string;
    ach: string;
    has_subnet: boolean;
    wire: string;
}
/**
 * {@link [Undocumented Object Details, but referenced in the 'type' property](https://docs.synapsefi.com/api-references/statements/statement-object-details)}
 */
export interface IInterestIncome1099 {
    _id: string;
    client_id: string;
    date_end: number;
    date_start: number;
    link: string;
    node_id: string;
    type: string;
    user_id: string;
}
