import { deserializeIntoTeamUnarchivedEventMessageDetail } from './deserializeIntoTeamUnarchivedEventMessageDetail';
import { type TeamUnarchivedEventMessageDetail } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createTeamUnarchivedEventMessageDetailFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoTeamUnarchivedEventMessageDetail;
}
