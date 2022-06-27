import {TeamCreatedEventMessageDetailImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createTeamCreatedEventMessageDetailFromDiscriminatorValue(parseNode: ParseNode | undefined) : TeamCreatedEventMessageDetailImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new TeamCreatedEventMessageDetailImpl();
}
