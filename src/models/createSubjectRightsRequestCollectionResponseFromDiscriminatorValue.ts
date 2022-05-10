import {SubjectRightsRequestCollectionResponseImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createSubjectRightsRequestCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : SubjectRightsRequestCollectionResponseImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new SubjectRightsRequestCollectionResponseImpl();
}
