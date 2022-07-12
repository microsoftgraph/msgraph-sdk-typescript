import {EducationMember1} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createEducationMember1FromDiscriminatorValue(parseNode: ParseNode | undefined) : EducationMember1 {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new EducationMember1();
}
