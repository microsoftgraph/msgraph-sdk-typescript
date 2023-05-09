import {deserializeIntoAssociatedTeamInfo} from './deserializeIntoAssociatedTeamInfo';
import {deserializeIntoSharedWithChannelTeamInfo} from './deserializeIntoSharedWithChannelTeamInfo';
import {deserializeIntoTeamInfo} from './deserializeIntoTeamInfo';
import {AssociatedTeamInfo, SharedWithChannelTeamInfo, TeamInfo} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createTeamInfoFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    const mappingValueNode = parseNode.getChildNode("@odata.type");
    if (mappingValueNode) {
        const mappingValue = mappingValueNode.getStringValue();
        if (mappingValue) {
            switch (mappingValue) {
                case "#microsoft.graph.associatedTeamInfo":
                    return deserializeIntoAssociatedTeamInfo;
                case "#microsoft.graph.sharedWithChannelTeamInfo":
                    return deserializeIntoSharedWithChannelTeamInfo;
            }
        }
    }
    return deserializeIntoTeamInfo;
}
