import {TeamsAppInstallationImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createTeamsAppInstallationFromDiscriminatorValue(parseNode: ParseNode | undefined) : TeamsAppInstallationImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    const mappingValueNode = parseNode.getChildNode("@odata.type");
    if (mappingValueNode) {
        const mappingValue = mappingValueNode.getStringValue();
        if (mappingValue) {
            switch (mappingValue) {
                case "#microsoft.graph.teamsAppInstallation":
                    return new TeamsAppInstallationImpl();
            }
        }
    }
    return new TeamsAppInstallationImpl();
}
