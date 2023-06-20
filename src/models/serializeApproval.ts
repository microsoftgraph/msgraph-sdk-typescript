import {Approval} from './approval';
import {ApprovalStage} from './approvalStage';
import {serializeApprovalStage} from './serializeApprovalStage';
import {serializeEntity} from './serializeEntity';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeApproval(approval: Approval | undefined = {} as Approval, writer: SerializationWriter) : void {
        serializeEntity(writer, approval)
        writer.writeCollectionOfObjectValues<ApprovalStage>("stages", approval.stages, serializeApprovalStage);
}
