import { type AuthoredNote } from './authoredNote';
import { createIdentityFromDiscriminatorValue } from './createIdentityFromDiscriminatorValue';
import { createItemBodyFromDiscriminatorValue } from './createItemBodyFromDiscriminatorValue';
import { deserializeIntoEntity } from './deserializeIntoEntity';
import { type Identity } from './identity';
import { type ItemBody } from './itemBody';
import { serializeIdentity } from './serializeIdentity';
import { serializeItemBody } from './serializeItemBody';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function deserializeIntoAuthoredNote(authoredNote: AuthoredNote | undefined = {} as AuthoredNote) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEntity(authoredNote),
        "author": n => { authoredNote.author = n.getObjectValue<Identity>(createIdentityFromDiscriminatorValue); },
        "content": n => { authoredNote.content = n.getObjectValue<ItemBody>(createItemBodyFromDiscriminatorValue); },
        "createdDateTime": n => { authoredNote.createdDateTime = n.getDateValue(); },
    }
}
