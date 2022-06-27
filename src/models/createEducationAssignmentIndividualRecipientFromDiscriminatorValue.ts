import {EducationAssignmentIndividualRecipientImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createEducationAssignmentIndividualRecipientFromDiscriminatorValue(parseNode: ParseNode | undefined) : EducationAssignmentIndividualRecipientImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new EducationAssignmentIndividualRecipientImpl();
}
