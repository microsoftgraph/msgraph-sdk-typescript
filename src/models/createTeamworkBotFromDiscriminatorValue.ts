import {deserializeIntoTeamworkBot} from './deserializeIntoTeamworkBot';
import {TeamworkBot} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createTeamworkBotFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoTeamworkBot;
}
