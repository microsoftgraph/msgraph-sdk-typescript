import {deserializeIntoEntity} from './deserializeIntoEntity';
import {EducationCategory} from './educationCategory';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoEducationCategory(educationCategory: EducationCategory | undefined = {} as EducationCategory) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEntity(educationCategory),
        "displayName": n => { educationCategory.displayName = n.getStringValue(); },
    }
}
