import {EducationRubricOutcomeImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createEducationRubricOutcomeFromDiscriminatorValue(parseNode: ParseNode | undefined) : EducationRubricOutcomeImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new EducationRubricOutcomeImpl();
}
