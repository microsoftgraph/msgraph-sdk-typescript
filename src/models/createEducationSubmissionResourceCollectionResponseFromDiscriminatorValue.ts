import {EducationSubmissionResourceCollectionResponseImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createEducationSubmissionResourceCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : EducationSubmissionResourceCollectionResponseImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new EducationSubmissionResourceCollectionResponseImpl();
}
