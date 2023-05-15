import {BaseItem} from './baseItem';
import {IdentitySet} from './identitySet';
import {ItemReference} from './itemReference';
import {serializeEntity} from './serializeEntity';
import {serializeIdentitySet} from './serializeIdentitySet';
import {serializeItemReference} from './serializeItemReference';
import {serializeUser} from './serializeUser';
import {User} from './user';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeBaseItem(writer: SerializationWriter, baseItem: BaseItem | undefined = {} as BaseItem) : void {
        serializeEntity(writer, baseItem)
        writer.writeObjectValue<IdentitySet>("createdBy", baseItem.createdBy, serializeIdentitySet);
        writer.writeObjectValue<User>("createdByUser", baseItem.createdByUser, serializeUser);
        writer.writeDateValue("createdDateTime", baseItem.createdDateTime);
        writer.writeStringValue("description", baseItem.description);
        writer.writeStringValue("eTag", baseItem.eTag);
        writer.writeObjectValue<IdentitySet>("lastModifiedBy", baseItem.lastModifiedBy, serializeIdentitySet);
        writer.writeObjectValue<User>("lastModifiedByUser", baseItem.lastModifiedByUser, serializeUser);
        writer.writeDateValue("lastModifiedDateTime", baseItem.lastModifiedDateTime);
        writer.writeStringValue("name", baseItem.name);
        writer.writeObjectValue<ItemReference>("parentReference", baseItem.parentReference, serializeItemReference);
        writer.writeStringValue("webUrl", baseItem.webUrl);
}
