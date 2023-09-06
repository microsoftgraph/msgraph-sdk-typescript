import { type TeamworkActivityTopic } from './teamworkActivityTopic';
import { TeamworkActivityTopicSource } from './teamworkActivityTopicSource';
import { type AdditionalDataHolder, type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function deserializeIntoTeamworkActivityTopic(teamworkActivityTopic: TeamworkActivityTopic | undefined = {} as TeamworkActivityTopic) : Record<string, (node: ParseNode) => void> {
    return {
        "@odata.type": n => { teamworkActivityTopic.odataType = n.getStringValue(); },
        "source": n => { teamworkActivityTopic.source = n.getEnumValue<TeamworkActivityTopicSource>(TeamworkActivityTopicSource); },
        "value": n => { teamworkActivityTopic.value = n.getStringValue(); },
        "webUrl": n => { teamworkActivityTopic.webUrl = n.getStringValue(); },
    }
}
