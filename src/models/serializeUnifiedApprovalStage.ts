import {serializeSubjectSet} from './serializeSubjectSet';
import type {SubjectSet} from './subjectSet';
import type {UnifiedApprovalStage} from './unifiedApprovalStage';
import type {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeUnifiedApprovalStage(writer: SerializationWriter, unifiedApprovalStage: UnifiedApprovalStage | undefined = {} as UnifiedApprovalStage) : void {
        writer.writeNumberValue("approvalStageTimeOutInDays", unifiedApprovalStage.approvalStageTimeOutInDays);
        writer.writeCollectionOfObjectValues<SubjectSet>("escalationApprovers", unifiedApprovalStage.escalationApprovers, serializeSubjectSet);
        writer.writeNumberValue("escalationTimeInMinutes", unifiedApprovalStage.escalationTimeInMinutes);
        writer.writeBooleanValue("isApproverJustificationRequired", unifiedApprovalStage.isApproverJustificationRequired);
        writer.writeBooleanValue("isEscalationEnabled", unifiedApprovalStage.isEscalationEnabled);
        writer.writeStringValue("@odata.type", unifiedApprovalStage.odataType);
        writer.writeCollectionOfObjectValues<SubjectSet>("primaryApprovers", unifiedApprovalStage.primaryApprovers, serializeSubjectSet);
        writer.writeAdditionalData(unifiedApprovalStage.additionalData);
}
