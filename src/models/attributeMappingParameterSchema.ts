import {AttributeType} from './attributeType';
import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface AttributeMappingParameterSchema extends AdditionalDataHolder, Parsable {
    /**
     * Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     */
    additionalData?: Record<string, unknown>;
    /**
     * The allowMultipleOccurrences property
     */
    allowMultipleOccurrences?: boolean | undefined;
    /**
     * The name property
     */
    name?: string | undefined;
    /**
     * The OdataType property
     */
    odataType?: string | undefined;
    /**
     * The required property
     */
    required?: boolean | undefined;
    /**
     * The type property
     */
    type?: AttributeType | undefined;
}
