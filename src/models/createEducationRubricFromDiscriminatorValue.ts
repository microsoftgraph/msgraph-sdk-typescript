import {deserializeIntoEducationRubric} from './deserializeIntoEducationRubric';
import {EducationRubric} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createEducationRubricFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoEducationRubric;
}
