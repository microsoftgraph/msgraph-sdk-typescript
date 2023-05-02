import {ItemBody} from '../../../models/itemBody';
import {KeyValuePair} from '../../../models/keyValuePair';
import {TeamworkActivityTopic} from '../../../models/teamworkActivityTopic';
import {TeamworkNotificationRecipient} from '../../../models/teamworkNotificationRecipient';
import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface SendActivityNotificationPostRequestBody extends AdditionalDataHolder, Parsable {
    /** The activityType property */
    activityType?: string | undefined;
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData?: Record<string, unknown>;
    /** The chainId property */
    chainId?: number | undefined;
    /** The previewText property */
    previewText?: ItemBody | undefined;
    /** The recipient property */
    recipient?: TeamworkNotificationRecipient | undefined;
    /** The templateParameters property */
    templateParameters?: KeyValuePair[] | undefined;
    /** The topic property */
    topic?: TeamworkActivityTopic | undefined;
}
