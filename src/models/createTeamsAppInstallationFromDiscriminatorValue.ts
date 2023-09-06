import { deserializeIntoTeamsAppInstallation } from './deserializeIntoTeamsAppInstallation';
import { deserializeIntoUserScopeTeamsAppInstallation } from './deserializeIntoUserScopeTeamsAppInstallation';
import { type TeamsAppInstallation, type UserScopeTeamsAppInstallation } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createTeamsAppInstallationFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    const mappingValueNode = parseNode.getChildNode("@odata.type");
    if (mappingValueNode) {
        const mappingValue = mappingValueNode.getStringValue();
        if (mappingValue) {
            switch (mappingValue) {
                case "#microsoft.graph.userScopeTeamsAppInstallation":
                    return deserializeIntoUserScopeTeamsAppInstallation;
            }
        }
    }
    return deserializeIntoTeamsAppInstallation;
}
