import Transaction from "../model/Transaction";
import PayPalTransaction from "../model/PayPalTransaction";

export default class PayPalTransactionAdapter implements Transaction {
    trackNumber: string;
    amount: number;
    status: string;

    constructor (paypalTransaction: PayPalTransaction) {
        this.trackNumber = paypalTransaction.id;
        this.amount = paypalTransaction.amount;
        this.status = this.convertStatus(paypalTransaction.status);
    }

    convertStatus(status: string): string {
        switch (status) {
            case "P": 
                return "esperando_pagamento";
            case "P":
                return "pago";
            case "D":
                return "devolveu";
            default:
                return "";
        }
    }
}