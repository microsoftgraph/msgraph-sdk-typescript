import type {Entity} from './entity';
import type {Parsable} from '@microsoft/kiota-abstractions';

export interface TeamsAppSettings extends Entity, Parsable {
    /**
     * The allowUserRequestsForAppAccess property
     */
    allowUserRequestsForAppAccess?: boolean | undefined;
}
