import {PrinterShare} from './printerShare';
import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

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
