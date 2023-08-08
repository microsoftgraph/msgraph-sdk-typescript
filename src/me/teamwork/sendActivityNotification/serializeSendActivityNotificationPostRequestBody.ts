import type {ItemBody} from '../../../models/itemBody';
import type {KeyValuePair} from '../../../models/keyValuePair';
import {serializeItemBody} from '../../../models/serializeItemBody';
import {serializeKeyValuePair} from '../../../models/serializeKeyValuePair';
import {serializeTeamworkActivityTopic} from '../../../models/serializeTeamworkActivityTopic';
import type {TeamworkActivityTopic} from '../../../models/teamworkActivityTopic';
import type {SendActivityNotificationPostRequestBody} from './sendActivityNotificationPostRequestBody';
import type {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeSendActivityNotificationPostRequestBody(writer: SerializationWriter, sendActivityNotificationPostRequestBody: SendActivityNotificationPostRequestBody | undefined = {} as SendActivityNotificationPostRequestBody) : void {
        writer.writeStringValue("activityType", sendActivityNotificationPostRequestBody.activityType);
        writer.writeNumberValue("chainId", sendActivityNotificationPostRequestBody.chainId);
        writer.writeObjectValue<ItemBody>("previewText", sendActivityNotificationPostRequestBody.previewText, serializeItemBody);
        writer.writeCollectionOfObjectValues<KeyValuePair>("templateParameters", sendActivityNotificationPostRequestBody.templateParameters, serializeKeyValuePair);
        writer.writeObjectValue<TeamworkActivityTopic>("topic", sendActivityNotificationPostRequestBody.topic, serializeTeamworkActivityTopic);
        writer.writeAdditionalData(sendActivityNotificationPostRequestBody.additionalData);
}
