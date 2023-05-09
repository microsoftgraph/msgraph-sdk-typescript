import {PublicError} from './publicError';
import {serializePublicError} from './serializePublicError';
import {SubjectRightsRequestStage} from './subjectRightsRequestStage';
import {SubjectRightsRequestStageDetail} from './subjectRightsRequestStageDetail';
import {SubjectRightsRequestStageStatus} from './subjectRightsRequestStageStatus';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeSubjectRightsRequestStageDetail(writer: SerializationWriter, subjectRightsRequestStageDetail: SubjectRightsRequestStageDetail | undefined = {} as SubjectRightsRequestStageDetail) : void {
        writer.writeObjectValue<PublicError>("error", subjectRightsRequestStageDetail.errorEscaped, serializePublicError);
        writer.writeStringValue("@odata.type", subjectRightsRequestStageDetail.odataType);
        writer.writeEnumValue<SubjectRightsRequestStage>("stage", subjectRightsRequestStageDetail.stage);
        writer.writeEnumValue<SubjectRightsRequestStageStatus>("status", subjectRightsRequestStageDetail.status);
        writer.writeAdditionalData(subjectRightsRequestStageDetail.additionalData);
}
