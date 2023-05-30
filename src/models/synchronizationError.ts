import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface SynchronizationError extends AdditionalDataHolder, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData?: Record<string, unknown>;
    /** The code property */
    code?: string | undefined;
    /** The message property */
    message?: string | undefined;
    /** The OdataType property */
    odataType?: string | undefined;
    /** The tenantActionable property */
    tenantActionable?: boolean | undefined;
}
