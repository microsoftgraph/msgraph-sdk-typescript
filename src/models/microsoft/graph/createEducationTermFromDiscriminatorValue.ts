import {EducationTerm} from './educationTerm';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createEducationTermFromDiscriminatorValue(parseNode: ParseNode | undefined) : EducationTerm {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new EducationTerm();
}
