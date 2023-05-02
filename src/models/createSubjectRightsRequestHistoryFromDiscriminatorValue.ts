import {deserializeIntoSubjectRightsRequestHistory} from './deserializeIntoSubjectRightsRequestHistory';
import {SubjectRightsRequestHistory} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createSubjectRightsRequestHistoryFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoSubjectRightsRequestHistory;
}
