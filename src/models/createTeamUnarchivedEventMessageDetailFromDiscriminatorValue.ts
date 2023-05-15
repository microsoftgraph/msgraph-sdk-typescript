import {deserializeIntoTeamUnarchivedEventMessageDetail} from './deserializeIntoTeamUnarchivedEventMessageDetail';
import {TeamUnarchivedEventMessageDetail} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createTeamUnarchivedEventMessageDetailFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoTeamUnarchivedEventMessageDetail;
}
