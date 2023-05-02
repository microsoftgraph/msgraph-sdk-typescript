import {ApprovalStage} from './approvalStage';
import {Identity} from './identity';
import {serializeEntity} from './serializeEntity';
import {serializeIdentity} from './serializeIdentity';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeApprovalStage(writer: SerializationWriter, approvalStage: ApprovalStage | undefined = {} as ApprovalStage) : void {
        serializeEntity(writer, approvalStage)
        writer.writeBooleanValue("assignedToMe", approvalStage.assignedToMe);
        writer.writeStringValue("displayName", approvalStage.displayName);
        writer.writeStringValue("justification", approvalStage.justification);
        writer.writeObjectValue<Identity>("reviewedBy", approvalStage.reviewedBy, serializeIdentity);
        writer.writeDateValue("reviewedDateTime", approvalStage.reviewedDateTime);
        writer.writeStringValue("reviewResult", approvalStage.reviewResult);
        writer.writeStringValue("status", approvalStage.status);
}
