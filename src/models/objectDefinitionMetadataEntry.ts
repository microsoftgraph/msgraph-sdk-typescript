import {ObjectDefinitionMetadata} from './objectDefinitionMetadata';
import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface ObjectDefinitionMetadataEntry extends AdditionalDataHolder, Parsable {
    /**
     * Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     */
    additionalData?: Record<string, unknown>;
    /**
     * Possible values are: PropertyNameAccountEnabled, PropertyNameSoftDeleted, IsSoftDeletionSupported, IsSynchronizeAllSupported, ConnectorDataStorageRequired, Extensions, LinkTypeName.
     */
    key?: ObjectDefinitionMetadata | undefined;
    /**
     * The OdataType property
     */
    odataType?: string | undefined;
    /**
     * Value of the metadata property.
     */
    value?: string | undefined;
}
