import { deserializeIntoEntity } from './deserializeIntoEntity';
import { type EducationCategory } from './educationCategory';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function deserializeIntoEducationCategory(educationCategory: EducationCategory | undefined = {} as EducationCategory) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEntity(educationCategory),
        "displayName": n => { educationCategory.displayName = n.getStringValue(); },
    }
}
