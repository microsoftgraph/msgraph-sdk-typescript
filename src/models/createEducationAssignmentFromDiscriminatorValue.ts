import {EducationAssignmentImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createEducationAssignmentFromDiscriminatorValue(parseNode: ParseNode | undefined) : EducationAssignmentImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new EducationAssignmentImpl();
}
