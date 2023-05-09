import {deserializeIntoEducationCategory} from './deserializeIntoEducationCategory';
import {EducationCategory} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createEducationCategoryFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoEducationCategory;
}
