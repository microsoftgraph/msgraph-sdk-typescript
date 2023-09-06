import { deserializeIntoSubjectSet } from './deserializeIntoSubjectSet';
import { type GroupMembers } from './groupMembers';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function deserializeIntoGroupMembers(groupMembers: GroupMembers | undefined = {} as GroupMembers) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoSubjectSet(groupMembers),
        "description": n => { groupMembers.description = n.getStringValue(); },
        "groupId": n => { groupMembers.groupId = n.getStringValue(); },
    }
}
