import {AttributeMappingSource} from './attributeMappingSource';
import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface StringKeyAttributeMappingSourceValuePair extends AdditionalDataHolder, Parsable {
    /**
     * Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     */
    additionalData?: Record<string, unknown>;
    /**
     * The name of the parameter.
     */
    key?: string | undefined;
    /**
     * The OdataType property
     */
    odataType?: string | undefined;
    /**
     * The value of the parameter.
     */
    value?: AttributeMappingSource | undefined;
}
