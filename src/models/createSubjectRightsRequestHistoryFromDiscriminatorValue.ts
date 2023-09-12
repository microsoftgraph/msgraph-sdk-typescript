import { deserializeIntoSubjectRightsRequestHistory } from './deserializeIntoSubjectRightsRequestHistory';
import { type SubjectRightsRequestHistory } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createSubjectRightsRequestHistoryFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoSubjectRightsRequestHistory;
}
