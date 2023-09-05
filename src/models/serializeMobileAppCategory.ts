import { type MobileAppCategory } from './mobileAppCategory';
import { serializeEntity } from './serializeEntity';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeMobileAppCategory(writer: SerializationWriter, mobileAppCategory: MobileAppCategory | undefined = {} as MobileAppCategory) : void {
        serializeEntity(writer, mobileAppCategory)
        writer.writeStringValue("displayName", mobileAppCategory.displayName);
        writer.writeDateValue("lastModifiedDateTime", mobileAppCategory.lastModifiedDateTime);
}
