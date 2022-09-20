import {EducationAssignmentClassRecipient} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createEducationAssignmentClassRecipientFromDiscriminatorValue(parseNode: ParseNode | undefined) : EducationAssignmentClassRecipient {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new EducationAssignmentClassRecipient();
}
