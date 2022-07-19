import {TeamsAppInstallation, UserScopeTeamsAppInstallation} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createTeamsAppInstallationFromDiscriminatorValue(parseNode: ParseNode | undefined) : TeamsAppInstallation {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    const mappingValueNode = parseNode.getChildNode("@odata.type");
    if (mappingValueNode) {
        const mappingValue = mappingValueNode.getStringValue();
        if (mappingValue) {
            switch (mappingValue) {
                case "#microsoft.graph.userScopeTeamsAppInstallation":
                    return new UserScopeTeamsAppInstallation();
            }
        }
    }
    return new TeamsAppInstallation();
}
