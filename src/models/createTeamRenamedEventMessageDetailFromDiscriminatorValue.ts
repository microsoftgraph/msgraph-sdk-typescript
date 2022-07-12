import {TeamRenamedEventMessageDetail} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createTeamRenamedEventMessageDetailFromDiscriminatorValue(parseNode: ParseNode | undefined) : TeamRenamedEventMessageDetail {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new TeamRenamedEventMessageDetail();
}
