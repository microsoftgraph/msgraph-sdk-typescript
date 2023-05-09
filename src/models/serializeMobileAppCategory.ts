import {MobileAppCategory} from './mobileAppCategory';
import {serializeEntity} from './serializeEntity';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeMobileAppCategory(writer: SerializationWriter, mobileAppCategory: MobileAppCategory | undefined = {} as MobileAppCategory) : void {
        serializeEntity(writer, mobileAppCategory)
        writer.writeStringValue("displayName", mobileAppCategory.displayName);
        writer.writeDateValue("lastModifiedDateTime", mobileAppCategory.lastModifiedDateTime);
}
