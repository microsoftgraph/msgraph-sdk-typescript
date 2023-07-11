import {SynchronizationMetadata} from './synchronizationMetadata';
import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface SynchronizationMetadataEntry extends AdditionalDataHolder, Parsable {
    /**
     * Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     */
    additionalData?: Record<string, unknown>;
    /**
     * Possible values are: GalleryApplicationIdentifier, GalleryApplicationKey, IsOAuthEnabled, IsSynchronizationAgentAssignmentRequired, IsSynchronizationAgentRequired, IsSynchronizationInPreview, OAuthSettings, SynchronizationLearnMoreIbizaFwLink, ConfigurationFields.
     */
    key?: SynchronizationMetadata | undefined;
    /**
     * The OdataType property
     */
    odataType?: string | undefined;
    /**
     * Value of the metadata property.
     */
    value?: string | undefined;
}
