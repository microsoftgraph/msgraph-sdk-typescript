import {TeamJoiningEnabledEventMessageDetailImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createTeamJoiningEnabledEventMessageDetailFromDiscriminatorValue(parseNode: ParseNode | undefined) : TeamJoiningEnabledEventMessageDetailImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new TeamJoiningEnabledEventMessageDetailImpl();
}
