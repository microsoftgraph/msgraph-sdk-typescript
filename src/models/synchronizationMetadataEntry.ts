import {SynchronizationMetadata} from './synchronizationMetadata';
import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface SynchronizationMetadataEntry extends AdditionalDataHolder, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData?: Record<string, unknown>;
    /** The key property */
    key?: SynchronizationMetadata | undefined;
    /** The OdataType property */
    odataType?: string | undefined;
    /** The value property */
    value?: string | undefined;
}
