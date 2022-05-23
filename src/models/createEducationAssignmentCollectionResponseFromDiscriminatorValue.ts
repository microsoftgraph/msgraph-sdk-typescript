import {EducationAssignmentCollectionResponseImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createEducationAssignmentCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : EducationAssignmentCollectionResponseImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new EducationAssignmentCollectionResponseImpl();
}
