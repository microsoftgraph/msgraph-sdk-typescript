import {deserializeIntoTeamworkActivityTopic} from './deserializeIntoTeamworkActivityTopic';
import {TeamworkActivityTopic} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createTeamworkActivityTopicFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoTeamworkActivityTopic;
}
