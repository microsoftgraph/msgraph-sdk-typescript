import {deserializeIntoAccessReviewApplyAction} from './deserializeIntoAccessReviewApplyAction';
import {deserializeIntoDisableAndDeleteUserApplyAction} from './deserializeIntoDisableAndDeleteUserApplyAction';
import {deserializeIntoRemoveAccessApplyAction} from './deserializeIntoRemoveAccessApplyAction';
import {AccessReviewApplyAction, DisableAndDeleteUserApplyAction, RemoveAccessApplyAction} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createAccessReviewApplyActionFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    const mappingValueNode = parseNode.getChildNode("@odata.type");
    if (mappingValueNode) {
        const mappingValue = mappingValueNode.getStringValue();
        if (mappingValue) {
            switch (mappingValue) {
                case "#microsoft.graph.disableAndDeleteUserApplyAction":
                    return deserializeIntoDisableAndDeleteUserApplyAction;
                case "#microsoft.graph.removeAccessApplyAction":
                    return deserializeIntoRemoveAccessApplyAction;
            }
        }
    }
    return deserializeIntoAccessReviewApplyAction;
}
