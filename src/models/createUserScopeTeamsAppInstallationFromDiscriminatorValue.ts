import {UserScopeTeamsAppInstallationImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createUserScopeTeamsAppInstallationFromDiscriminatorValue(parseNode: ParseNode | undefined) : UserScopeTeamsAppInstallationImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new UserScopeTeamsAppInstallationImpl();
}
