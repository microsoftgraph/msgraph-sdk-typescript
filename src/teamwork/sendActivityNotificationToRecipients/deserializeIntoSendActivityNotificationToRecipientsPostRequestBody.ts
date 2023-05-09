import {createItemBodyFromDiscriminatorValue} from '../../models/createItemBodyFromDiscriminatorValue';
import {createKeyValuePairFromDiscriminatorValue} from '../../models/createKeyValuePairFromDiscriminatorValue';
import {createTeamworkActivityTopicFromDiscriminatorValue} from '../../models/createTeamworkActivityTopicFromDiscriminatorValue';
import {createTeamworkNotificationRecipientFromDiscriminatorValue} from '../../models/createTeamworkNotificationRecipientFromDiscriminatorValue';
import {ItemBody} from '../../models/itemBody';
import {KeyValuePair} from '../../models/keyValuePair';
import {serializeItemBody} from '../../models/serializeItemBody';
import {serializeKeyValuePair} from '../../models/serializeKeyValuePair';
import {serializeTeamworkActivityTopic} from '../../models/serializeTeamworkActivityTopic';
import {serializeTeamworkNotificationRecipient} from '../../models/serializeTeamworkNotificationRecipient';
import {TeamworkActivityTopic} from '../../models/teamworkActivityTopic';
import {TeamworkNotificationRecipient} from '../../models/teamworkNotificationRecipient';
import {SendActivityNotificationToRecipientsPostRequestBody} from './sendActivityNotificationToRecipientsPostRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoSendActivityNotificationToRecipientsPostRequestBody(sendActivityNotificationToRecipientsPostRequestBody: SendActivityNotificationToRecipientsPostRequestBody | undefined = {} as SendActivityNotificationToRecipientsPostRequestBody) : Record<string, (node: ParseNode) => void> {
    return {
        "activityType": n => { sendActivityNotificationToRecipientsPostRequestBody.activityType = n.getStringValue(); },
        "chainId": n => { sendActivityNotificationToRecipientsPostRequestBody.chainId = n.getNumberValue(); },
        "previewText": n => { sendActivityNotificationToRecipientsPostRequestBody.previewText = n.getObjectValue<ItemBody>(createItemBodyFromDiscriminatorValue); },
        "recipients": n => { sendActivityNotificationToRecipientsPostRequestBody.recipients = n.getCollectionOfObjectValues<TeamworkNotificationRecipient>(createTeamworkNotificationRecipientFromDiscriminatorValue); },
        "teamsAppId": n => { sendActivityNotificationToRecipientsPostRequestBody.teamsAppId = n.getStringValue(); },
        "templateParameters": n => { sendActivityNotificationToRecipientsPostRequestBody.templateParameters = n.getCollectionOfObjectValues<KeyValuePair>(createKeyValuePairFromDiscriminatorValue); },
        "topic": n => { sendActivityNotificationToRecipientsPostRequestBody.topic = n.getObjectValue<TeamworkActivityTopic>(createTeamworkActivityTopicFromDiscriminatorValue); },
    }
}
