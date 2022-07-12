import {AadUserConversationMemberResult, ActionResultPart} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createActionResultPartFromDiscriminatorValue(parseNode: ParseNode | undefined) : ActionResultPart {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    const mappingValueNode = parseNode.getChildNode("@odata.type");
    if (mappingValueNode) {
        const mappingValue = mappingValueNode.getStringValue();
        if (mappingValue) {
            switch (mappingValue) {
                case "#microsoft.graph.aadUserConversationMemberResult":
                    return new AadUserConversationMemberResult();
            }
        }
    }
    return new ActionResultPart();
}
