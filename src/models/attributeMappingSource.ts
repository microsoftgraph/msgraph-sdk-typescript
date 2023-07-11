import {AttributeMappingSourceType} from './attributeMappingSourceType';
import {StringKeyAttributeMappingSourceValuePair} from './stringKeyAttributeMappingSourceValuePair';
import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface AttributeMappingSource extends AdditionalDataHolder, Parsable {
    /**
     * Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     */
    additionalData?: Record<string, unknown>;
    /**
     * Equivalent expression representation of this attributeMappingSource object.
     */
    expression?: string | undefined;
    /**
     * Name parameter of the mapping source. Depending on the type property value, this can be the name of the function, the name of the source attribute, or a constant value to be used.
     */
    name?: string | undefined;
    /**
     * The OdataType property
     */
    odataType?: string | undefined;
    /**
     * If this object represents a function, lists function parameters. Parameters consist of attributeMappingSource objects themselves, allowing for complex expressions. If type is not Function, this property will be null/empty array.
     */
    parameters?: StringKeyAttributeMappingSourceValuePair[] | undefined;
    /**
     * The type property
     */
    type?: AttributeMappingSourceType | undefined;
}
