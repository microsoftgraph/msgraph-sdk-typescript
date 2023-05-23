import {AttributeDefinition} from './attributeDefinition';
import {ObjectDefinitionMetadataEntry} from './objectDefinitionMetadataEntry';
import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface ObjectDefinition extends AdditionalDataHolder, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData?: Record<string, unknown>;
    /** The attributes property */
    attributes?: AttributeDefinition[] | undefined;
    /** The metadata property */
    metadata?: ObjectDefinitionMetadataEntry[] | undefined;
    /** The name property */
    name?: string | undefined;
    /** The OdataType property */
    odataType?: string | undefined;
    /** The supportedApis property */
    supportedApis?: string[] | undefined;
}
