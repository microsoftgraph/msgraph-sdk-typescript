import {Entity} from './entity';
import {TeamsApp} from './teamsApp';
import {TeamsAppDefinition} from './teamsAppDefinition';
import {TeamsAppPermissionSet} from './teamsAppPermissionSet';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface TeamsAppInstallation extends Entity, Parsable {
    /**
     * The set of resource-specific permissions consented to while installing or upgrading the teamsApp.
     */
    consentedPermissionSet?: TeamsAppPermissionSet | undefined;
    /**
     * The app that is installed.
     */
    teamsApp?: TeamsApp | undefined;
    /**
     * The details of this version of the app.
     */
    teamsAppDefinition?: TeamsAppDefinition | undefined;
}
