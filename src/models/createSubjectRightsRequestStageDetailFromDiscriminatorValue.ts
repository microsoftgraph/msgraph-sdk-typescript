import { deserializeIntoSubjectRightsRequestStageDetail } from './deserializeIntoSubjectRightsRequestStageDetail';
import { type SubjectRightsRequestStageDetail } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createSubjectRightsRequestStageDetailFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoSubjectRightsRequestStageDetail;
}
