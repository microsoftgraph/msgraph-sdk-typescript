import {deserializeIntoEducationRubricOutcome} from './deserializeIntoEducationRubricOutcome';
import {EducationRubricOutcome} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createEducationRubricOutcomeFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoEducationRubricOutcome;
}
