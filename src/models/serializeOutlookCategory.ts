import { CategoryColor } from './categoryColor';
import { type OutlookCategory } from './outlookCategory';
import { serializeEntity } from './serializeEntity';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeOutlookCategory(writer: SerializationWriter, outlookCategory: OutlookCategory | undefined = {} as OutlookCategory) : void {
        serializeEntity(writer, outlookCategory)
        writer.writeEnumValue<CategoryColor>("color", outlookCategory.color);
        writer.writeStringValue("displayName", outlookCategory.displayName);
}
