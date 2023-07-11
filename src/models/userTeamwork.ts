import {AssociatedTeamInfo} from './associatedTeamInfo';
import {Entity} from './entity';
import {UserScopeTeamsAppInstallation} from './userScopeTeamsAppInstallation';
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
