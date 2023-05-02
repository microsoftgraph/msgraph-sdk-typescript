import {BaseItem} from './baseItem';
import {createIdentitySetFromDiscriminatorValue} from './createIdentitySetFromDiscriminatorValue';
import {createItemReferenceFromDiscriminatorValue} from './createItemReferenceFromDiscriminatorValue';
import {createUserFromDiscriminatorValue} from './createUserFromDiscriminatorValue';
import {deserializeIntoEntity} from './deserializeIntoEntity';
import {IdentitySet} from './identitySet';
import {ItemReference} from './itemReference';
import {serializeIdentitySet} from './serializeIdentitySet';
import {serializeItemReference} from './serializeItemReference';
import {serializeUser} from './serializeUser';
import {User} from './user';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoBaseItem(baseItem: BaseItem | undefined = {} as BaseItem) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEntity(baseItem),
        "createdBy": n => { baseItem.createdBy = n.getObjectValue<IdentitySet>(createIdentitySetFromDiscriminatorValue); },
        "createdByUser": n => { baseItem.createdByUser = n.getObjectValue<User>(createUserFromDiscriminatorValue); },
        "createdDateTime": n => { baseItem.createdDateTime = n.getDateValue(); },
        "description": n => { baseItem.description = n.getStringValue(); },
        "eTag": n => { baseItem.eTag = n.getStringValue(); },
        "lastModifiedBy": n => { baseItem.lastModifiedBy = n.getObjectValue<IdentitySet>(createIdentitySetFromDiscriminatorValue); },
        "lastModifiedByUser": n => { baseItem.lastModifiedByUser = n.getObjectValue<User>(createUserFromDiscriminatorValue); },
        "lastModifiedDateTime": n => { baseItem.lastModifiedDateTime = n.getDateValue(); },
        "name": n => { baseItem.name = n.getStringValue(); },
        "parentReference": n => { baseItem.parentReference = n.getObjectValue<ItemReference>(createItemReferenceFromDiscriminatorValue); },
        "webUrl": n => { baseItem.webUrl = n.getStringValue(); },
    }
}
