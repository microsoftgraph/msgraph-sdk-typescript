import {Entity} from './entity';
import {TeamsApp} from './teamsApp';
import {TeamsAppDefinition} from './teamsAppDefinition';
import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface TeamsAppInstallation extends Partial<AdditionalDataHolder>, Entity, Partial<Parsable> {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData?: Record<string, unknown>;
    /** The app that is installed. */
    teamsApp?: TeamsApp | undefined;
    /** The details of this version of the app. */
    teamsAppDefinition?: TeamsAppDefinition | undefined;
}
