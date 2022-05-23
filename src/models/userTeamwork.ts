import {Entity} from './entity';
import {UserScopeTeamsAppInstallation} from './userScopeTeamsAppInstallation';

export interface UserTeamwork extends Entity{
    /** The apps installed in the personal scope of this user. */
    installedApps?:UserScopeTeamsAppInstallation[] | undefined;
}
