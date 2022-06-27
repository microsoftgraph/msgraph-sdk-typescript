import {Entity} from './entity';
import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface ManagedAppOperation extends Partial<AdditionalDataHolder>, Entity, Partial<Parsable> {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData?: Record<string, unknown>;
    /** The operation name. */
    displayName?: string | undefined;
    /** The last time the app operation was modified. */
    lastModifiedDateTime?: Date | undefined;
    /** The current state of the operation */
    state?: string | undefined;
    /** Version of the entity. */
    version?: string | undefined;
}
