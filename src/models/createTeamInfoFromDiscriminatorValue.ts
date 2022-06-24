import {AssociatedTeamInfoImpl, SharedWithChannelTeamInfoImpl, TeamInfoImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createTeamInfoFromDiscriminatorValue(parseNode: ParseNode | undefined) : TeamInfoImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    const mappingValueNode = parseNode.getChildNode("@odata.type");
    if (mappingValueNode) {
        const mappingValue = mappingValueNode.getStringValue();
        if (mappingValue) {
            switch (mappingValue) {
                case "#microsoft.graph.associatedTeamInfo":
                    return new AssociatedTeamInfoImpl();
                case "#microsoft.graph.sharedWithChannelTeamInfo":
                    return new SharedWithChannelTeamInfoImpl();
            }
        }
    }
    return new TeamInfoImpl();
}
