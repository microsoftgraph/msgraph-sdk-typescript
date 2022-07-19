import {TeamUnarchivedEventMessageDetail} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createTeamUnarchivedEventMessageDetailFromDiscriminatorValue(parseNode: ParseNode | undefined) : TeamUnarchivedEventMessageDetail {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new TeamUnarchivedEventMessageDetail();
}
