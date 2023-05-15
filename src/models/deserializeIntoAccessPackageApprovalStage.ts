import {AccessPackageApprovalStage} from './accessPackageApprovalStage';
import {createSubjectSetFromDiscriminatorValue} from './createSubjectSetFromDiscriminatorValue';
import {serializeSubjectSet} from './serializeSubjectSet';
import {SubjectSet} from './subjectSet';
import {AdditionalDataHolder, Duration, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoAccessPackageApprovalStage(accessPackageApprovalStage: AccessPackageApprovalStage | undefined = {} as AccessPackageApprovalStage) : Record<string, (node: ParseNode) => void> {
    return {
        "durationBeforeAutomaticDenial": n => { accessPackageApprovalStage.durationBeforeAutomaticDenial = n.getDurationValue(); },
        "durationBeforeEscalation": n => { accessPackageApprovalStage.durationBeforeEscalation = n.getDurationValue(); },
        "escalationApprovers": n => { accessPackageApprovalStage.escalationApprovers = n.getCollectionOfObjectValues<SubjectSet>(createSubjectSetFromDiscriminatorValue); },
        "fallbackEscalationApprovers": n => { accessPackageApprovalStage.fallbackEscalationApprovers = n.getCollectionOfObjectValues<SubjectSet>(createSubjectSetFromDiscriminatorValue); },
        "fallbackPrimaryApprovers": n => { accessPackageApprovalStage.fallbackPrimaryApprovers = n.getCollectionOfObjectValues<SubjectSet>(createSubjectSetFromDiscriminatorValue); },
        "isApproverJustificationRequired": n => { accessPackageApprovalStage.isApproverJustificationRequired = n.getBooleanValue(); },
        "isEscalationEnabled": n => { accessPackageApprovalStage.isEscalationEnabled = n.getBooleanValue(); },
        "@odata.type": n => { accessPackageApprovalStage.odataType = n.getStringValue(); },
        "primaryApprovers": n => { accessPackageApprovalStage.primaryApprovers = n.getCollectionOfObjectValues<SubjectSet>(createSubjectSetFromDiscriminatorValue); },
    }
}
