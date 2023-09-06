import { deserializeIntoEducationRubric } from './deserializeIntoEducationRubric';
import { type EducationRubric } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createEducationRubricFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoEducationRubric;
}
