import {Printer} from './printer';
import {PrintOperation} from './printOperation';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface PrinterCreateOperation extends Parsable, PrintOperation {
    /**
     * The signed certificate created during the registration process. Read-only.
     */
    certificate?: string | undefined;
    /**
     * The created printer entity. Read-only.
     */
    printer?: Printer | undefined;
}
