import { serializeEntity } from '../serializeEntity';
import { type Group } from './group';
import { serializeSet } from './serializeSet';
import { type Set } from './set';
import { TermGroupScope } from './termGroupScope';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeGroup(writer: SerializationWriter, group: Group | undefined = {} as Group) : void {
        serializeEntity(writer, group)
        writer.writeDateValue("createdDateTime", group.createdDateTime);
        writer.writeStringValue("description", group.description);
        writer.writeStringValue("displayName", group.displayName);
        writer.writeStringValue("parentSiteId", group.parentSiteId);
        writer.writeEnumValue<TermGroupScope>("scope", group.scope);
        writer.writeCollectionOfObjectValues<Set>("sets", group.sets, serializeSet);
}
