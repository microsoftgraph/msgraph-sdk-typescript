import { type IdentitySet } from './identitySet';
import { serializeIdentitySet } from './serializeIdentitySet';
import { type SubjectRightsRequestHistory } from './subjectRightsRequestHistory';
import { SubjectRightsRequestStage } from './subjectRightsRequestStage';
import { SubjectRightsRequestStageStatus } from './subjectRightsRequestStageStatus';
import { type AdditionalDataHolder, type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeSubjectRightsRequestHistory(writer: SerializationWriter, subjectRightsRequestHistory: SubjectRightsRequestHistory | undefined = {} as SubjectRightsRequestHistory) : void {
        writer.writeObjectValue<IdentitySet>("changedBy", subjectRightsRequestHistory.changedBy, serializeIdentitySet);
        writer.writeDateValue("eventDateTime", subjectRightsRequestHistory.eventDateTime);
        writer.writeStringValue("@odata.type", subjectRightsRequestHistory.odataType);
        writer.writeEnumValue<SubjectRightsRequestStage>("stage", subjectRightsRequestHistory.stage);
        writer.writeEnumValue<SubjectRightsRequestStageStatus>("stageStatus", subjectRightsRequestHistory.stageStatus);
        writer.writeStringValue("type", subjectRightsRequestHistory.type);
        writer.writeAdditionalData(subjectRightsRequestHistory.additionalData);
}
