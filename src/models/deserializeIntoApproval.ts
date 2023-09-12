import { type Approval } from './approval';
import { type ApprovalStage } from './approvalStage';
import { createApprovalStageFromDiscriminatorValue } from './createApprovalStageFromDiscriminatorValue';
import { deserializeIntoEntity } from './deserializeIntoEntity';
import { serializeApprovalStage } from './serializeApprovalStage';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function deserializeIntoApproval(approval: Approval | undefined = {} as Approval) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEntity(approval),
        "stages": n => { approval.stages = n.getCollectionOfObjectValues<ApprovalStage>(createApprovalStageFromDiscriminatorValue); },
    }
}
