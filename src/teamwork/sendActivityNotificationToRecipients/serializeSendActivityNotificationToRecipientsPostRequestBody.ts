import { type ItemBody } from '../../models/itemBody';
import { type KeyValuePair } from '../../models/keyValuePair';
import { serializeItemBody } from '../../models/serializeItemBody';
import { serializeKeyValuePair } from '../../models/serializeKeyValuePair';
import { serializeTeamworkActivityTopic } from '../../models/serializeTeamworkActivityTopic';
import { serializeTeamworkNotificationRecipient } from '../../models/serializeTeamworkNotificationRecipient';
import { type TeamworkActivityTopic } from '../../models/teamworkActivityTopic';
import { type TeamworkNotificationRecipient } from '../../models/teamworkNotificationRecipient';
import { type SendActivityNotificationToRecipientsPostRequestBody } from './sendActivityNotificationToRecipientsPostRequestBody';
import { type AdditionalDataHolder, type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeSendActivityNotificationToRecipientsPostRequestBody(writer: SerializationWriter, sendActivityNotificationToRecipientsPostRequestBody: SendActivityNotificationToRecipientsPostRequestBody | undefined = {} as SendActivityNotificationToRecipientsPostRequestBody) : void {
        writer.writeStringValue("activityType", sendActivityNotificationToRecipientsPostRequestBody.activityType);
        writer.writeNumberValue("chainId", sendActivityNotificationToRecipientsPostRequestBody.chainId);
        writer.writeObjectValue<ItemBody>("previewText", sendActivityNotificationToRecipientsPostRequestBody.previewText, serializeItemBody);
        writer.writeCollectionOfObjectValues<TeamworkNotificationRecipient>("recipients", sendActivityNotificationToRecipientsPostRequestBody.recipients, serializeTeamworkNotificationRecipient);
        writer.writeStringValue("teamsAppId", sendActivityNotificationToRecipientsPostRequestBody.teamsAppId);
        writer.writeCollectionOfObjectValues<KeyValuePair>("templateParameters", sendActivityNotificationToRecipientsPostRequestBody.templateParameters, serializeKeyValuePair);
        writer.writeObjectValue<TeamworkActivityTopic>("topic", sendActivityNotificationToRecipientsPostRequestBody.topic, serializeTeamworkActivityTopic);
        writer.writeAdditionalData(sendActivityNotificationToRecipientsPostRequestBody.additionalData);
}
