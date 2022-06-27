import {Printer} from './printer';
import {PrintOperation} from './printOperation';
import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface PrinterCreateOperation extends Partial<AdditionalDataHolder>, Partial<Parsable>, PrintOperation {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData?: Record<string, unknown>;
    /** The signed certificate created during the registration process. Read-only. */
    certificate?: string | undefined;
    /** The created printer entity. Read-only. */
    printer?: Printer | undefined;
}
