import {EducationCategory} from './educationCategory';
import {serializeEntity} from './serializeEntity';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeEducationCategory(educationCategory: EducationCategory | undefined = {} as EducationCategory, writer: SerializationWriter) : void {
        serializeEntity(writer, educationCategory)
        writer.writeStringValue("displayName", educationCategory.displayName);
}
