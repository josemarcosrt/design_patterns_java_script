import PagSeguroTransaction from "./model/PagSeguroTransaction";
import PagSeguroTransactionAdapter from "./adapters/PagSeguroTransactionAdapter";
import PayPalTransaction from "./model/PayPalTransaction";
import PayPalTransactionAdapter from "./adapters/PayPalTransactionAdapter";

const pagSeguroTransaction = new PagSeguroTransaction("AB3HB987HBG7568", 1000, 2);
const transaction1 = new PagSeguroTransactionAdapter(pagSeguroTransaction);
console.log(transaction1);

const paypalTransaction = new PayPalTransaction("9879", 100, "S");
const transaction2 = new PayPalTransactionAdapter(paypalTransaction);
console.log(transaction2);

// https://github.com/rodrigobranas/fullcycle_design_patterns2
// https://github.com/rodrigobranas/design_patterns