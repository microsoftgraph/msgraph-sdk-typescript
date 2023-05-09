import {Approval} from './approval';
import {ApprovalStage} from './approvalStage';
import {createApprovalStageFromDiscriminatorValue} from './createApprovalStageFromDiscriminatorValue';
import {deserializeIntoEntity} from './deserializeIntoEntity';
import {serializeApprovalStage} from './serializeApprovalStage';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoApproval(approval: Approval | undefined = {} as Approval) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEntity(approval),
        "stages": n => { approval.stages = n.getCollectionOfObjectValues<ApprovalStage>(createApprovalStageFromDiscriminatorValue); },
    }
}
