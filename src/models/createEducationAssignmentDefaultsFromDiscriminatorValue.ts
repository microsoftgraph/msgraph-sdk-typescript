import {deserializeIntoEducationAssignmentDefaults} from './deserializeIntoEducationAssignmentDefaults';
import {EducationAssignmentDefaults} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createEducationAssignmentDefaultsFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoEducationAssignmentDefaults;
}
