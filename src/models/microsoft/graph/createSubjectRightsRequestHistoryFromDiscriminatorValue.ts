import {SubjectRightsRequestHistory} from './subjectRightsRequestHistory';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createSubjectRightsRequestHistoryFromDiscriminatorValue(parseNode: ParseNode | undefined) : SubjectRightsRequestHistory {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new SubjectRightsRequestHistory();
}
