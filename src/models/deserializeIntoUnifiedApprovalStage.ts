import {createSubjectSetFromDiscriminatorValue} from './createSubjectSetFromDiscriminatorValue';
import {serializeSubjectSet} from './serializeSubjectSet';
import {SubjectSet} from './subjectSet';
import {UnifiedApprovalStage} from './unifiedApprovalStage';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoUnifiedApprovalStage(unifiedApprovalStage: UnifiedApprovalStage | undefined = {} as UnifiedApprovalStage) : Record<string, (node: ParseNode) => void> {
    return {
        "approvalStageTimeOutInDays": n => { unifiedApprovalStage.approvalStageTimeOutInDays = n.getNumberValue(); },
        "escalationApprovers": n => { unifiedApprovalStage.escalationApprovers = n.getCollectionOfObjectValues<SubjectSet>(createSubjectSetFromDiscriminatorValue); },
        "escalationTimeInMinutes": n => { unifiedApprovalStage.escalationTimeInMinutes = n.getNumberValue(); },
        "isApproverJustificationRequired": n => { unifiedApprovalStage.isApproverJustificationRequired = n.getBooleanValue(); },
        "isEscalationEnabled": n => { unifiedApprovalStage.isEscalationEnabled = n.getBooleanValue(); },
        "@odata.type": n => { unifiedApprovalStage.odataType = n.getStringValue(); },
        "primaryApprovers": n => { unifiedApprovalStage.primaryApprovers = n.getCollectionOfObjectValues<SubjectSet>(createSubjectSetFromDiscriminatorValue); },
    }
}
