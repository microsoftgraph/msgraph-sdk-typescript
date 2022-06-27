import {PrintUsage} from './printUsage';
import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface PrintUsageByPrinter extends Partial<AdditionalDataHolder>, Partial<Parsable>, PrintUsage {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData?: Record<string, unknown>;
    /** The printerId property */
    printerId?: string | undefined;
}
