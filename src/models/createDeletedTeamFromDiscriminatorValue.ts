import {deserializeIntoDeletedTeam} from './deserializeIntoDeletedTeam';
import {DeletedTeam} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createDeletedTeamFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoDeletedTeam;
}
