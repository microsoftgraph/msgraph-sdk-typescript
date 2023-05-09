import {deserializeIntoUserScopeTeamsAppInstallation} from './deserializeIntoUserScopeTeamsAppInstallation';
import {UserScopeTeamsAppInstallation} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createUserScopeTeamsAppInstallationFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoUserScopeTeamsAppInstallation;
}
