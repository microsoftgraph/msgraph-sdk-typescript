import {Chat} from './chat';
import {TeamsAppInstallation} from './teamsAppInstallation';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface UserScopeTeamsAppInstallation extends Parsable, TeamsAppInstallation {
    /**
     * The chat between the user and Teams app.
     */
    chat?: Chat | undefined;
}
