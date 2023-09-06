import { createIdentitySetFromDiscriminatorValue } from './createIdentitySetFromDiscriminatorValue';
import { type IdentitySet } from './identitySet';
import { serializeIdentitySet } from './serializeIdentitySet';
import { type SubjectRightsRequestHistory } from './subjectRightsRequestHistory';
import { SubjectRightsRequestStage } from './subjectRightsRequestStage';
import { SubjectRightsRequestStageStatus } from './subjectRightsRequestStageStatus';
import { type AdditionalDataHolder, type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function deserializeIntoSubjectRightsRequestHistory(subjectRightsRequestHistory: SubjectRightsRequestHistory | undefined = {} as SubjectRightsRequestHistory) : Record<string, (node: ParseNode) => void> {
    return {
        "changedBy": n => { subjectRightsRequestHistory.changedBy = n.getObjectValue<IdentitySet>(createIdentitySetFromDiscriminatorValue); },
        "eventDateTime": n => { subjectRightsRequestHistory.eventDateTime = n.getDateValue(); },
        "@odata.type": n => { subjectRightsRequestHistory.odataType = n.getStringValue(); },
        "stage": n => { subjectRightsRequestHistory.stage = n.getEnumValue<SubjectRightsRequestStage>(SubjectRightsRequestStage); },
        "stageStatus": n => { subjectRightsRequestHistory.stageStatus = n.getEnumValue<SubjectRightsRequestStageStatus>(SubjectRightsRequestStageStatus); },
        "type": n => { subjectRightsRequestHistory.type = n.getStringValue(); },
    }
}
