import {Entity} from './entity';
import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface ManagedAppPolicy extends Partial<AdditionalDataHolder>, Entity, Partial<Parsable> {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData?: Record<string, unknown>;
    /** The date and time the policy was created. */
    createdDateTime?: Date | undefined;
    /** The policy's description. */
    description?: string | undefined;
    /** Policy display name. */
    displayName?: string | undefined;
    /** Last time the policy was modified. */
    lastModifiedDateTime?: Date | undefined;
    /** Version of the entity. */
    version?: string | undefined;
}
