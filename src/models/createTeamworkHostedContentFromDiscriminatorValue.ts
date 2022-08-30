import {ChatMessageHostedContent, TeamworkHostedContent} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createTeamworkHostedContentFromDiscriminatorValue(parseNode: ParseNode | undefined) : TeamworkHostedContent {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    const mappingValueNode = parseNode.getChildNode("@odata.type");
    if (mappingValueNode) {
        const mappingValue = mappingValueNode.getStringValue();
        if (mappingValue) {
            switch (mappingValue) {
                case "#microsoft.graph.chatMessageHostedContent":
                    return new ChatMessageHostedContent();
            }
        }
    }
    return new TeamworkHostedContent();
}
