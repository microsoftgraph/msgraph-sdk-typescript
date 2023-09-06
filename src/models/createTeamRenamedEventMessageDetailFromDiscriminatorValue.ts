import { deserializeIntoTeamRenamedEventMessageDetail } from './deserializeIntoTeamRenamedEventMessageDetail';
import { type TeamRenamedEventMessageDetail } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createTeamRenamedEventMessageDetailFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoTeamRenamedEventMessageDetail;
}
