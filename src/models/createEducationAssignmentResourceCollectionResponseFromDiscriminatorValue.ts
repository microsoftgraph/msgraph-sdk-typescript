import {EducationAssignmentResourceCollectionResponseImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createEducationAssignmentResourceCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : EducationAssignmentResourceCollectionResponseImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new EducationAssignmentResourceCollectionResponseImpl();
}
