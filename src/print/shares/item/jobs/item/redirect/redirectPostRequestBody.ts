import {PrintJobConfiguration} from '../../../../../../models/printJobConfiguration';
import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface RedirectPostRequestBody extends AdditionalDataHolder, Parsable {
    /**
     * Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     */
    additionalData?: Record<string, unknown>;
    /**
     * The configuration property
     */
    configuration?: PrintJobConfiguration | undefined;
    /**
     * The destinationPrinterId property
     */
    destinationPrinterId?: string | undefined;
}
