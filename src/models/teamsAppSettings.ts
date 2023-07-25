import {Entity} from './entity';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface TeamsAppSettings extends Entity, Parsable {
    /**
     * The allowUserRequestsForAppAccess property
     */
    allowUserRequestsForAppAccess?: boolean | undefined;
}
