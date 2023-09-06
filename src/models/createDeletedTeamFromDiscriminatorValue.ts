import { deserializeIntoDeletedTeam } from './deserializeIntoDeletedTeam';
import { type DeletedTeam } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createDeletedTeamFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoDeletedTeam;
}
