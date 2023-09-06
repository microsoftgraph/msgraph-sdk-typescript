import { type PrinterShare } from './printerShare';
import { type AdditionalDataHolder, type Parsable } from '@microsoft/kiota-abstractions';

export interface UserPrint extends AdditionalDataHolder, Parsable {
    /**
     * Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     */
    additionalData?: Record<string, unknown>;
    /**
     * The OdataType property
     */
    odataType?: string | undefined;
    /**
     * The recentPrinterShares property
     */
    recentPrinterShares?: PrinterShare[] | undefined;
}
