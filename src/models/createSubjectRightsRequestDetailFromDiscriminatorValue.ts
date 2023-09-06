import { deserializeIntoSubjectRightsRequestDetail } from './deserializeIntoSubjectRightsRequestDetail';
import { type SubjectRightsRequestDetail } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createSubjectRightsRequestDetailFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoSubjectRightsRequestDetail;
}
