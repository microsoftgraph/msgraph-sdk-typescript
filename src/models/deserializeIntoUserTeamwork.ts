import type {AssociatedTeamInfo} from './associatedTeamInfo';
import {createAssociatedTeamInfoFromDiscriminatorValue} from './createAssociatedTeamInfoFromDiscriminatorValue';
import {createUserScopeTeamsAppInstallationFromDiscriminatorValue} from './createUserScopeTeamsAppInstallationFromDiscriminatorValue';
import {deserializeIntoEntity} from './deserializeIntoEntity';
import {serializeAssociatedTeamInfo} from './serializeAssociatedTeamInfo';
import {serializeUserScopeTeamsAppInstallation} from './serializeUserScopeTeamsAppInstallation';
import type {UserScopeTeamsAppInstallation} from './userScopeTeamsAppInstallation';
import type {UserTeamwork} from './userTeamwork';
import type {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoUserTeamwork(userTeamwork: UserTeamwork | undefined = {} as UserTeamwork) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEntity(userTeamwork),
        "associatedTeams": n => { userTeamwork.associatedTeams = n.getCollectionOfObjectValues<AssociatedTeamInfo>(createAssociatedTeamInfoFromDiscriminatorValue); },
        "installedApps": n => { userTeamwork.installedApps = n.getCollectionOfObjectValues<UserScopeTeamsAppInstallation>(createUserScopeTeamsAppInstallationFromDiscriminatorValue); },
    }
}
