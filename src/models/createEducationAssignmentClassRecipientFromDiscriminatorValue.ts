import {EducationAssignmentClassRecipientImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createEducationAssignmentClassRecipientFromDiscriminatorValue(parseNode: ParseNode | undefined) : EducationAssignmentClassRecipientImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new EducationAssignmentClassRecipientImpl();
}
