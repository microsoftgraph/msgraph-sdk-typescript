import {deserializeIntoEducationAssignmentRecipient} from './deserializeIntoEducationAssignmentRecipient';
import {EducationAssignmentClassRecipient} from './educationAssignmentClassRecipient';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoEducationAssignmentClassRecipient(educationAssignmentClassRecipient: EducationAssignmentClassRecipient | undefined = {} as EducationAssignmentClassRecipient) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEducationAssignmentRecipient(educationAssignmentClassRecipient),
    }
}
