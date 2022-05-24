import {Chat} from './chat';
import {TeamsAppInstallation} from './teamsAppInstallation';

export interface UserScopeTeamsAppInstallation extends TeamsAppInstallation{
    /** The chat between the user and Teams app. */
    chat?:Chat | undefined;
}
