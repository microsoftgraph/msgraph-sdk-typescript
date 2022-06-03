import {Entity} from './entity';
import {UserScopeTeamsAppInstallation} from './userScopeTeamsAppInstallation';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface UserTeamwork extends Entity, Partial<Parsable> {
    /** The apps installed in the personal scope of this user. */
    installedApps?: UserScopeTeamsAppInstallation[] | undefined;
}
