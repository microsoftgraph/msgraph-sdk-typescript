import {createPublicErrorFromDiscriminatorValue} from './createPublicErrorFromDiscriminatorValue';
import {PublicError} from './publicError';
import {serializePublicError} from './serializePublicError';
import {SubjectRightsRequestStage} from './subjectRightsRequestStage';
import {SubjectRightsRequestStageDetail} from './subjectRightsRequestStageDetail';
import {SubjectRightsRequestStageStatus} from './subjectRightsRequestStageStatus';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoSubjectRightsRequestStageDetail(subjectRightsRequestStageDetail: SubjectRightsRequestStageDetail | undefined = {} as SubjectRightsRequestStageDetail) : Record<string, (node: ParseNode) => void> {
    return {
        "error": n => { subjectRightsRequestStageDetail.errorEscaped = n.getObjectValue<PublicError>(createPublicErrorFromDiscriminatorValue); },
        "@odata.type": n => { subjectRightsRequestStageDetail.odataType = n.getStringValue(); },
        "stage": n => { subjectRightsRequestStageDetail.stage = n.getEnumValue<SubjectRightsRequestStage>(SubjectRightsRequestStage); },
        "status": n => { subjectRightsRequestStageDetail.status = n.getEnumValue<SubjectRightsRequestStageStatus>(SubjectRightsRequestStageStatus); },
    }
}
