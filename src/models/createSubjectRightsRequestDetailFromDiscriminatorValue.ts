import {SubjectRightsRequestDetailImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createSubjectRightsRequestDetailFromDiscriminatorValue(parseNode: ParseNode | undefined) : SubjectRightsRequestDetailImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new SubjectRightsRequestDetailImpl();
}
