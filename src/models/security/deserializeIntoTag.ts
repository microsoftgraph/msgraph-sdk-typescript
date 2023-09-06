import { createIdentitySetFromDiscriminatorValue } from '../createIdentitySetFromDiscriminatorValue';
import { deserializeIntoEntity } from '../deserializeIntoEntity';
import { type IdentitySet } from '../identitySet';
import { serializeIdentitySet } from '../serializeIdentitySet';
import { type Tag } from './tag';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function deserializeIntoTag(tag: Tag | undefined = {} as Tag) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEntity(tag),
        "createdBy": n => { tag.createdBy = n.getObjectValue<IdentitySet>(createIdentitySetFromDiscriminatorValue); },
        "description": n => { tag.description = n.getStringValue(); },
        "displayName": n => { tag.displayName = n.getStringValue(); },
        "lastModifiedDateTime": n => { tag.lastModifiedDateTime = n.getDateValue(); },
    }
}
