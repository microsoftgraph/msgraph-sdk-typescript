import { deserializeIntoEducationRubricOutcome } from './deserializeIntoEducationRubricOutcome';
import { type EducationRubricOutcome } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createEducationRubricOutcomeFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoEducationRubricOutcome;
}
