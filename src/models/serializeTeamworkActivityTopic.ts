import type {TeamworkActivityTopic} from './teamworkActivityTopic';
import {TeamworkActivityTopicSource} from './teamworkActivityTopicSource';
import type {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeTeamworkActivityTopic(writer: SerializationWriter, teamworkActivityTopic: TeamworkActivityTopic | undefined = {} as TeamworkActivityTopic) : void {
        writer.writeStringValue("@odata.type", teamworkActivityTopic.odataType);
        writer.writeEnumValue<TeamworkActivityTopicSource>("source", teamworkActivityTopic.source);
        writer.writeStringValue("value", teamworkActivityTopic.value);
        writer.writeStringValue("webUrl", teamworkActivityTopic.webUrl);
        writer.writeAdditionalData(teamworkActivityTopic.additionalData);
}
