import {TeamworkBotImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createTeamworkBotFromDiscriminatorValue(parseNode: ParseNode | undefined) : TeamworkBotImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new TeamworkBotImpl();
}
