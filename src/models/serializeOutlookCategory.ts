import {CategoryColor} from './categoryColor';
import {OutlookCategory} from './outlookCategory';
import {serializeEntity} from './serializeEntity';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeOutlookCategory(writer: SerializationWriter, outlookCategory: OutlookCategory | undefined = {} as OutlookCategory) : void {
        serializeEntity(writer, outlookCategory)
        writer.writeEnumValue<CategoryColor>("color", outlookCategory.color);
        writer.writeStringValue("displayName", outlookCategory.displayName);
}
