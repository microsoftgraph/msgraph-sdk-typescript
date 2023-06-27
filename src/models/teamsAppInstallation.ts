import {Entity} from './entity';
import {TeamsApp} from './teamsApp';
import {TeamsAppDefinition} from './teamsAppDefinition';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface TeamsAppInstallation extends Entity, Parsable {
    /**
     * The app that is installed.
     */
    teamsApp?: TeamsApp | undefined;
    /**
     * The details of this version of the app.
     */
    teamsAppDefinition?: TeamsAppDefinition | undefined;
}
