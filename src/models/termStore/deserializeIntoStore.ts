import { deserializeIntoEntity } from '../deserializeIntoEntity';
import { createGroupFromDiscriminatorValue } from './createGroupFromDiscriminatorValue';
import { createSetFromDiscriminatorValue } from './createSetFromDiscriminatorValue';
import { type Group } from './group';
import { serializeGroup } from './serializeGroup';
import { serializeSet } from './serializeSet';
import { type Set } from './set';
import { type Store } from './store';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function deserializeIntoStore(store: Store | undefined = {} as Store) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEntity(store),
        "defaultLanguageTag": n => { store.defaultLanguageTag = n.getStringValue(); },
        "groups": n => { store.groups = n.getCollectionOfObjectValues<Group>(createGroupFromDiscriminatorValue); },
        "languageTags": n => { store.languageTags = n.getCollectionOfPrimitiveValues<string>(); },
        "sets": n => { store.sets = n.getCollectionOfObjectValues<Set>(createSetFromDiscriminatorValue); },
    }
}
