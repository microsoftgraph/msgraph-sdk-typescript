import type {EducationCategory} from './educationCategory';
import {serializeEntity} from './serializeEntity';
import type {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeEducationCategory(writer: SerializationWriter, educationCategory: EducationCategory | undefined = {} as EducationCategory) : void {
        serializeEntity(writer, educationCategory)
        writer.writeStringValue("displayName", educationCategory.displayName);
}
