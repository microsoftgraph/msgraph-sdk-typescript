import {AttributeMappingSourceType} from './attributeMappingSourceType';
import {StringKeyAttributeMappingSourceValuePair} from './stringKeyAttributeMappingSourceValuePair';
import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface AttributeMappingSource extends AdditionalDataHolder, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData?: Record<string, unknown>;
    /** The expression property */
    expression?: string | undefined;
    /** The name property */
    name?: string | undefined;
    /** The OdataType property */
    odataType?: string | undefined;
    /** The parameters property */
    parameters?: StringKeyAttributeMappingSourceValuePair[] | undefined;
    /** The type property */
    type?: AttributeMappingSourceType | undefined;
}
