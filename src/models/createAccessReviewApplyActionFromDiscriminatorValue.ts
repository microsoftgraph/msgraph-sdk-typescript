import {AccessReviewApplyActionImpl, DisableAndDeleteUserApplyActionImpl, RemoveAccessApplyActionImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createAccessReviewApplyActionFromDiscriminatorValue(parseNode: ParseNode | undefined) : AccessReviewApplyActionImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    const mappingValueNode = parseNode.getChildNode("@odata.type");
    if (mappingValueNode) {
        const mappingValue = mappingValueNode.getStringValue();
        if (mappingValue) {
            switch (mappingValue) {
                case "#microsoft.graph.disableAndDeleteUserApplyAction":
                    return new DisableAndDeleteUserApplyActionImpl();
                case "#microsoft.graph.removeAccessApplyAction":
                    return new RemoveAccessApplyActionImpl();
            }
        }
    }
    return new AccessReviewApplyActionImpl();
}
