import { deserializeIntoUserScopeTeamsAppInstallation } from './deserializeIntoUserScopeTeamsAppInstallation';
import { type UserScopeTeamsAppInstallation } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createUserScopeTeamsAppInstallationFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoUserScopeTeamsAppInstallation;
}
