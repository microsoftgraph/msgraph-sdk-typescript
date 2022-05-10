import {SubjectRightsRequestImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createSubjectRightsRequestFromDiscriminatorValue(parseNode: ParseNode | undefined) : SubjectRightsRequestImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new SubjectRightsRequestImpl();
}
