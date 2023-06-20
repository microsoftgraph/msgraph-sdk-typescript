import {AccessPackageApprovalStage} from './accessPackageApprovalStage';
import {serializeSubjectSet} from './serializeSubjectSet';
import {SubjectSet} from './subjectSet';
import {AdditionalDataHolder, Duration, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeAccessPackageApprovalStage(accessPackageApprovalStage: AccessPackageApprovalStage | undefined = {} as AccessPackageApprovalStage, writer: SerializationWriter) : void {
        writer.writeDurationValue("durationBeforeAutomaticDenial", accessPackageApprovalStage.durationBeforeAutomaticDenial);
        writer.writeDurationValue("durationBeforeEscalation", accessPackageApprovalStage.durationBeforeEscalation);
        writer.writeCollectionOfObjectValues<SubjectSet>("escalationApprovers", accessPackageApprovalStage.escalationApprovers, serializeSubjectSet);
        writer.writeCollectionOfObjectValues<SubjectSet>("fallbackEscalationApprovers", accessPackageApprovalStage.fallbackEscalationApprovers, serializeSubjectSet);
        writer.writeCollectionOfObjectValues<SubjectSet>("fallbackPrimaryApprovers", accessPackageApprovalStage.fallbackPrimaryApprovers, serializeSubjectSet);
        writer.writeBooleanValue("isApproverJustificationRequired", accessPackageApprovalStage.isApproverJustificationRequired);
        writer.writeBooleanValue("isEscalationEnabled", accessPackageApprovalStage.isEscalationEnabled);
        writer.writeStringValue("@odata.type", accessPackageApprovalStage.odataType);
        writer.writeCollectionOfObjectValues<SubjectSet>("primaryApprovers", accessPackageApprovalStage.primaryApprovers, serializeSubjectSet);
        writer.writeAdditionalData(accessPackageApprovalStage.additionalData);
}
