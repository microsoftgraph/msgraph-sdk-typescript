import { deserializeIntoEducationCategory } from './deserializeIntoEducationCategory';
import { type EducationCategory } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createEducationCategoryFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoEducationCategory;
}
