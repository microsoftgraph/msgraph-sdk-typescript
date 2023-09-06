import { serializeEntity } from '../serializeEntity';
import { type Group } from './group';
import { serializeGroup } from './serializeGroup';
import { serializeSet } from './serializeSet';
import { type Set } from './set';
import { type Store } from './store';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeStore(writer: SerializationWriter, store: Store | undefined = {} as Store) : void {
        serializeEntity(writer, store)
        writer.writeStringValue("defaultLanguageTag", store.defaultLanguageTag);
        writer.writeCollectionOfObjectValues<Group>("groups", store.groups, serializeGroup);
        writer.writeCollectionOfPrimitiveValues<string>("languageTags", store.languageTags);
        writer.writeCollectionOfObjectValues<Set>("sets", store.sets, serializeSet);
}
