import {serializeBaseCollectionPaginationCountResponse} from './serializeBaseCollectionPaginationCountResponse';
import {serializeUserScopeTeamsAppInstallation} from './serializeUserScopeTeamsAppInstallation';
import type {UserScopeTeamsAppInstallation} from './userScopeTeamsAppInstallation';
import type {UserScopeTeamsAppInstallationCollectionResponse} from './userScopeTeamsAppInstallationCollectionResponse';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeUserScopeTeamsAppInstallationCollectionResponse(writer: SerializationWriter, userScopeTeamsAppInstallationCollectionResponse: UserScopeTeamsAppInstallationCollectionResponse | undefined = {} as UserScopeTeamsAppInstallationCollectionResponse) : void {
        serializeBaseCollectionPaginationCountResponse(writer, userScopeTeamsAppInstallationCollectionResponse)
        writer.writeCollectionOfObjectValues<UserScopeTeamsAppInstallation>("value", userScopeTeamsAppInstallationCollectionResponse.value, serializeUserScopeTeamsAppInstallation);
}
