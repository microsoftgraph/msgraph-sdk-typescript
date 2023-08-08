import type {ExternalConnection} from './externalConnection';
import type {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface External extends AdditionalDataHolder, Parsable {
    /**
     * Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     */
    additionalData?: Record<string, unknown>;
    /**
     * The connections property
     */
    connections?: ExternalConnection[] | undefined;
    /**
     * The OdataType property
     */
    odataType?: string | undefined;
}
