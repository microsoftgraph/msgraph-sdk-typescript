import {TeamworkActivityTopic} from './teamworkActivityTopic';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createTeamworkActivityTopicFromDiscriminatorValue(parseNode: ParseNode | undefined) : TeamworkActivityTopic {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new TeamworkActivityTopic();
}
