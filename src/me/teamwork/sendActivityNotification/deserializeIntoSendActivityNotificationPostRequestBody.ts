import {createItemBodyFromDiscriminatorValue} from '../../../models/createItemBodyFromDiscriminatorValue';
import {createKeyValuePairFromDiscriminatorValue} from '../../../models/createKeyValuePairFromDiscriminatorValue';
import {createTeamworkActivityTopicFromDiscriminatorValue} from '../../../models/createTeamworkActivityTopicFromDiscriminatorValue';
import type {ItemBody} from '../../../models/itemBody';
import type {KeyValuePair} from '../../../models/keyValuePair';
import {serializeItemBody} from '../../../models/serializeItemBody';
import {serializeKeyValuePair} from '../../../models/serializeKeyValuePair';
import {serializeTeamworkActivityTopic} from '../../../models/serializeTeamworkActivityTopic';
import type {TeamworkActivityTopic} from '../../../models/teamworkActivityTopic';
import type {SendActivityNotificationPostRequestBody} from './sendActivityNotificationPostRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoSendActivityNotificationPostRequestBody(sendActivityNotificationPostRequestBody: SendActivityNotificationPostRequestBody | undefined = {} as SendActivityNotificationPostRequestBody) : Record<string, (node: ParseNode) => void> {
    return {
        "activityType": n => { sendActivityNotificationPostRequestBody.activityType = n.getStringValue(); },
        "chainId": n => { sendActivityNotificationPostRequestBody.chainId = n.getNumberValue(); },
        "previewText": n => { sendActivityNotificationPostRequestBody.previewText = n.getObjectValue<ItemBody>(createItemBodyFromDiscriminatorValue); },
        "templateParameters": n => { sendActivityNotificationPostRequestBody.templateParameters = n.getCollectionOfObjectValues<KeyValuePair>(createKeyValuePairFromDiscriminatorValue); },
        "topic": n => { sendActivityNotificationPostRequestBody.topic = n.getObjectValue<TeamworkActivityTopic>(createTeamworkActivityTopicFromDiscriminatorValue); },
    }
}
