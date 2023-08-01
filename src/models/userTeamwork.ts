import type {AssociatedTeamInfo} from './associatedTeamInfo';
import type {Entity} from './entity';
import type {UserScopeTeamsAppInstallation} from './userScopeTeamsAppInstallation';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface UserTeamwork extends Entity, Parsable {
    /**
     * The list of associatedTeamInfo objects that a user is associated with.
     */
    associatedTeams?: AssociatedTeamInfo[] | undefined;
    /**
     * The apps installed in the personal scope of this user.
     */
    installedApps?: UserScopeTeamsAppInstallation[] | undefined;
}
