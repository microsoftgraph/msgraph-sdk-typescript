import {Entity} from './entity';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface ManagedAppPolicy extends Entity, Parsable {
    /**
     * The date and time the policy was created.
     */
    createdDateTime?: Date | undefined;
    /**
     * The policy's description.
     */
    description?: string | undefined;
    /**
     * Policy display name.
     */
    displayName?: string | undefined;
    /**
     * Last time the policy was modified.
     */
    lastModifiedDateTime?: Date | undefined;
    /**
     * Version of the entity.
     */
    version?: string | undefined;
}
