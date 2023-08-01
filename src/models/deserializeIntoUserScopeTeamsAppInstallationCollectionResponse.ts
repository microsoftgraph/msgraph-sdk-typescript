import {createUserScopeTeamsAppInstallationFromDiscriminatorValue} from './createUserScopeTeamsAppInstallationFromDiscriminatorValue';
import {deserializeIntoBaseCollectionPaginationCountResponse} from './deserializeIntoBaseCollectionPaginationCountResponse';
import {serializeUserScopeTeamsAppInstallation} from './serializeUserScopeTeamsAppInstallation';
import type {UserScopeTeamsAppInstallation} from './userScopeTeamsAppInstallation';
import type {UserScopeTeamsAppInstallationCollectionResponse} from './userScopeTeamsAppInstallationCollectionResponse';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoUserScopeTeamsAppInstallationCollectionResponse(userScopeTeamsAppInstallationCollectionResponse: UserScopeTeamsAppInstallationCollectionResponse | undefined = {} as UserScopeTeamsAppInstallationCollectionResponse) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(userScopeTeamsAppInstallationCollectionResponse),
        "value": n => { userScopeTeamsAppInstallationCollectionResponse.value = n.getCollectionOfObjectValues<UserScopeTeamsAppInstallation>(createUserScopeTeamsAppInstallationFromDiscriminatorValue); },
    }
}
