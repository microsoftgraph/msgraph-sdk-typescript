import {FileHashAlgorithm} from './fileHashAlgorithm';
import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface FileHash extends AdditionalDataHolder, Parsable {
    /**
     * Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     */
    additionalData?: Record<string, unknown>;
    /**
     * The algorithm property
     */
    algorithm?: FileHashAlgorithm | undefined;
    /**
     * The OdataType property
     */
    odataType?: string | undefined;
    /**
     * The value property
     */
    value?: string | undefined;
}
