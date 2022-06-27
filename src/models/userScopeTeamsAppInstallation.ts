import {Chat} from './chat';
import {TeamsAppInstallation} from './teamsAppInstallation';
import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface UserScopeTeamsAppInstallation extends Partial<AdditionalDataHolder>, Partial<Parsable>, TeamsAppInstallation {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData?: Record<string, unknown>;
    /** The chat between the user and Teams app. */
    chat?: Chat | undefined;
}
