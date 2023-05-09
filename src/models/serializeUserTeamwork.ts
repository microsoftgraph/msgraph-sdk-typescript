import {AssociatedTeamInfo} from './associatedTeamInfo';
import {serializeAssociatedTeamInfo} from './serializeAssociatedTeamInfo';
import {serializeEntity} from './serializeEntity';
import {serializeUserScopeTeamsAppInstallation} from './serializeUserScopeTeamsAppInstallation';
import {UserScopeTeamsAppInstallation} from './userScopeTeamsAppInstallation';
import {UserTeamwork} from './userTeamwork';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeUserTeamwork(writer: SerializationWriter, userTeamwork: UserTeamwork | undefined = {} as UserTeamwork) : void {
        serializeEntity(writer, userTeamwork)
        writer.writeCollectionOfObjectValues<AssociatedTeamInfo>("associatedTeams", userTeamwork.associatedTeams, serializeAssociatedTeamInfo);
        writer.writeCollectionOfObjectValues<UserScopeTeamsAppInstallation>("installedApps", userTeamwork.installedApps, serializeUserScopeTeamsAppInstallation);
}
