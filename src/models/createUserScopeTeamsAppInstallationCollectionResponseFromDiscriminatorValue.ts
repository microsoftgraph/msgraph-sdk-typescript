import {UserScopeTeamsAppInstallationCollectionResponseImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createUserScopeTeamsAppInstallationCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : UserScopeTeamsAppInstallationCollectionResponseImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new UserScopeTeamsAppInstallationCollectionResponseImpl();
}
