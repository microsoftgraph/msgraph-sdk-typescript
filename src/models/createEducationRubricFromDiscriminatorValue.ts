import {EducationRubricImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createEducationRubricFromDiscriminatorValue(parseNode: ParseNode | undefined) : EducationRubricImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new EducationRubricImpl();
}
