import {ValueType} from './valueType';
import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface Parameter extends AdditionalDataHolder, Parsable {
    /**
     * Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     */
    additionalData?: Record<string, unknown>;
    /**
     * The name of the parameter.
     */
    name?: string | undefined;
    /**
     * The OdataType property
     */
    odataType?: string | undefined;
    /**
     * The values of the parameter.
     */
    values?: string[] | undefined;
    /**
     * The valueType property
     */
    valueType?: ValueType | undefined;
}
