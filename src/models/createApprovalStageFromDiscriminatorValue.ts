import {deserializeIntoApprovalStage} from './deserializeIntoApprovalStage';
import {ApprovalStage} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createApprovalStageFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoApprovalStage;
}
