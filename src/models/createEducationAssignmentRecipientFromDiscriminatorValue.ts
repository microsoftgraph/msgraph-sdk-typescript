import {EducationAssignmentRecipientImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createEducationAssignmentRecipientFromDiscriminatorValue(parseNode: ParseNode | undefined) : EducationAssignmentRecipientImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new EducationAssignmentRecipientImpl();
}
