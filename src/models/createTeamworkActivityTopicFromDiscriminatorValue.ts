import { deserializeIntoTeamworkActivityTopic } from './deserializeIntoTeamworkActivityTopic';
import { type TeamworkActivityTopic } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createTeamworkActivityTopicFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoTeamworkActivityTopic;
}
