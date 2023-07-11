import {AttributeType} from './attributeType';
import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface AttributeMappingParameterSchema extends AdditionalDataHolder, Parsable {
    /**
     * Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     */
    additionalData?: Record<string, unknown>;
    /**
     * The given parameter can be provided multiple times (for example, multiple input strings in the Concatenate(string,string,...) function).
     */
    allowMultipleOccurrences?: boolean | undefined;
    /**
     * Parameter name.
     */
    name?: string | undefined;
    /**
     * The OdataType property
     */
    odataType?: string | undefined;
    /**
     * true if the parameter is required; otherwise false.
     */
    required?: boolean | undefined;
    /**
     * The type property
     */
    type?: AttributeType | undefined;
}
