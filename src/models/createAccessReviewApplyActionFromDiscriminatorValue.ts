import {AccessReviewApplyAction, DisableAndDeleteUserApplyAction, RemoveAccessApplyAction} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createAccessReviewApplyActionFromDiscriminatorValue(parseNode: ParseNode | undefined) : AccessReviewApplyAction {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    const mappingValueNode = parseNode.getChildNode("@odata.type");
    if (mappingValueNode) {
        const mappingValue = mappingValueNode.getStringValue();
        if (mappingValue) {
            switch (mappingValue) {
                case "#microsoft.graph.disableAndDeleteUserApplyAction":
                    return new DisableAndDeleteUserApplyAction();
                case "#microsoft.graph.removeAccessApplyAction":
                    return new RemoveAccessApplyAction();
            }
        }
    }
    return new AccessReviewApplyAction();
}
