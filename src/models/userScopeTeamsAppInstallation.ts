import type {Chat} from './chat';
import type {TeamsAppInstallation} from './teamsAppInstallation';
import type {Parsable} from '@microsoft/kiota-abstractions';

export interface UserScopeTeamsAppInstallation extends Parsable, TeamsAppInstallation {
    /**
     * The chat between the user and Teams app.
     */
    chat?: Chat | undefined;
}
