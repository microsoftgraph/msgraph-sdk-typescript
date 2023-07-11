import {AttributeDefinition} from './attributeDefinition';
import {ObjectDefinitionMetadataEntry} from './objectDefinitionMetadataEntry';
import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface ObjectDefinition extends AdditionalDataHolder, Parsable {
    /**
     * Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     */
    additionalData?: Record<string, unknown>;
    /**
     * Defines attributes of the object.
     */
    attributes?: AttributeDefinition[] | undefined;
    /**
     * Metadata for the given object.
     */
    metadata?: ObjectDefinitionMetadataEntry[] | undefined;
    /**
     * Name of the object. Must be unique within a directory definition. Not nullable.
     */
    name?: string | undefined;
    /**
     * The OdataType property
     */
    odataType?: string | undefined;
    /**
     * The API that the provisioning service queries to retrieve data for synchronization.
     */
    supportedApis?: string[] | undefined;
}
