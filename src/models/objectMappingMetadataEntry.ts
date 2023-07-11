import {ObjectMappingMetadata} from './objectMappingMetadata';
import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface ObjectMappingMetadataEntry extends AdditionalDataHolder, Parsable {
    /**
     * Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     */
    additionalData?: Record<string, unknown>;
    /**
     * Possible values are: EscrowBehavior, DisableMonitoringForChanges, OriginalJoiningProperty, Disposition, IsCustomerDefined, ExcludeFromReporting, Unsynchronized.
     */
    key?: ObjectMappingMetadata | undefined;
    /**
     * The OdataType property
     */
    odataType?: string | undefined;
    /**
     * Value of the metadata property.
     */
    value?: string | undefined;
}
