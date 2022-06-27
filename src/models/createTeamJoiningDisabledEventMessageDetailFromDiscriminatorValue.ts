import {TeamJoiningDisabledEventMessageDetailImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createTeamJoiningDisabledEventMessageDetailFromDiscriminatorValue(parseNode: ParseNode | undefined) : TeamJoiningDisabledEventMessageDetailImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new TeamJoiningDisabledEventMessageDetailImpl();
}
