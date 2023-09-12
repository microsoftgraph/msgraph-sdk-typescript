import { deserializeIntoEducationTerm } from './deserializeIntoEducationTerm';
import { type EducationTerm } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createEducationTermFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoEducationTerm;
}
