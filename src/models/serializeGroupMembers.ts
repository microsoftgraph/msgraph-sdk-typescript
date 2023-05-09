import {GroupMembers} from './groupMembers';
import {serializeSubjectSet} from './serializeSubjectSet';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeGroupMembers(writer: SerializationWriter, groupMembers: GroupMembers | undefined = {} as GroupMembers) : void {
        serializeSubjectSet(writer, groupMembers)
        writer.writeStringValue("description", groupMembers.description);
        writer.writeStringValue("groupId", groupMembers.groupId);
}
