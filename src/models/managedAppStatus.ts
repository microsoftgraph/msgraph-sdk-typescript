import {Entity} from './entity';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface ManagedAppStatus extends Entity, Parsable {
    /**
     * Friendly name of the status report.
     */
    displayName?: string | undefined;
    /**
     * Version of the entity.
     */
    version?: string | undefined;
}
