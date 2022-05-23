import {EducationSubmissionCollectionResponseImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createEducationSubmissionCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : EducationSubmissionCollectionResponseImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new EducationSubmissionCollectionResponseImpl();
}
