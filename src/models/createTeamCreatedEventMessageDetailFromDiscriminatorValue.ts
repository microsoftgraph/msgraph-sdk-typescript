import {TeamCreatedEventMessageDetail} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createTeamCreatedEventMessageDetailFromDiscriminatorValue(parseNode: ParseNode | undefined) : TeamCreatedEventMessageDetail {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new TeamCreatedEventMessageDetail();
}
