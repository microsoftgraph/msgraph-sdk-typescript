import { type GroupMembers } from './groupMembers';
import { serializeSubjectSet } from './serializeSubjectSet';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeGroupMembers(writer: SerializationWriter, groupMembers: GroupMembers | undefined = {} as GroupMembers) : void {
        serializeSubjectSet(writer, groupMembers)
        writer.writeStringValue("description", groupMembers.description);
        writer.writeStringValue("groupId", groupMembers.groupId);
}
