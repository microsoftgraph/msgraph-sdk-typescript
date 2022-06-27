import {AssociatedTeamInfo} from './associatedTeamInfo';
import {Entity} from './entity';
import {UserScopeTeamsAppInstallation} from './userScopeTeamsAppInstallation';
import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface UserTeamwork extends Partial<AdditionalDataHolder>, Entity, Partial<Parsable> {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData?: Record<string, unknown>;
    /** The list of associatedTeamInfo objects that a user is associated with. */
    associatedTeams?: AssociatedTeamInfo[] | undefined;
    /** The apps installed in the personal scope of this user. */
    installedApps?: UserScopeTeamsAppInstallation[] | undefined;
}
