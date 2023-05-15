import {ApprovalStage} from './approvalStage';
import {createIdentityFromDiscriminatorValue} from './createIdentityFromDiscriminatorValue';
import {deserializeIntoEntity} from './deserializeIntoEntity';
import {Identity} from './identity';
import {serializeIdentity} from './serializeIdentity';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoApprovalStage(approvalStage: ApprovalStage | undefined = {} as ApprovalStage) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEntity(approvalStage),
        "assignedToMe": n => { approvalStage.assignedToMe = n.getBooleanValue(); },
        "displayName": n => { approvalStage.displayName = n.getStringValue(); },
        "justification": n => { approvalStage.justification = n.getStringValue(); },
        "reviewedBy": n => { approvalStage.reviewedBy = n.getObjectValue<Identity>(createIdentityFromDiscriminatorValue); },
        "reviewedDateTime": n => { approvalStage.reviewedDateTime = n.getDateValue(); },
        "reviewResult": n => { approvalStage.reviewResult = n.getStringValue(); },
        "status": n => { approvalStage.status = n.getStringValue(); },
    }
}
