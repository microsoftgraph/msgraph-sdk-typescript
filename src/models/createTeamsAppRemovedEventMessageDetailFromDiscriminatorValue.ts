import {TeamsAppRemovedEventMessageDetail} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createTeamsAppRemovedEventMessageDetailFromDiscriminatorValue(parseNode: ParseNode | undefined) : TeamsAppRemovedEventMessageDetail {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new TeamsAppRemovedEventMessageDetail();
}
