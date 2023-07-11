import {Entity} from './entity';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface ManagedAppOperation extends Entity, Parsable {
    /**
     * The operation name.
     */
    displayName?: string | undefined;
    /**
     * The last time the app operation was modified.
     */
    lastModifiedDateTime?: Date | undefined;
    /**
     * The current state of the operation
     */
    state?: string | undefined;
    /**
     * Version of the entity.
     */
    version?: string | undefined;
}
