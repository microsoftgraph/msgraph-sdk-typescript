import {SubjectRightsRequestHistoryImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createSubjectRightsRequestHistoryFromDiscriminatorValue(parseNode: ParseNode | undefined) : SubjectRightsRequestHistoryImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new SubjectRightsRequestHistoryImpl();
}
