import type {Approval} from './approval';
import type {ApprovalStage} from './approvalStage';
import {serializeApprovalStage} from './serializeApprovalStage';
import {serializeEntity} from './serializeEntity';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeApproval(writer: SerializationWriter, approval: Approval | undefined = {} as Approval) : void {
        serializeEntity(writer, approval)
        writer.writeCollectionOfObjectValues<ApprovalStage>("stages", approval.stages, serializeApprovalStage);
}
