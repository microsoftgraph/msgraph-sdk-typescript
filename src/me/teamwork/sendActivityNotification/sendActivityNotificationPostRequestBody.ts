import type {ItemBody} from '../../../models/itemBody';
import type {KeyValuePair} from '../../../models/keyValuePair';
import type {TeamworkActivityTopic} from '../../../models/teamworkActivityTopic';
import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface SendActivityNotificationPostRequestBody extends AdditionalDataHolder, Parsable {
    /**
     * The activityType property
     */
    activityType?: string | undefined;
    /**
     * Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     */
    additionalData?: Record<string, unknown>;
    /**
     * The chainId property
     */
    chainId?: number | undefined;
    /**
     * The previewText property
     */
    previewText?: ItemBody | undefined;
    /**
     * The templateParameters property
     */
    templateParameters?: KeyValuePair[] | undefined;
    /**
     * The topic property
     */
    topic?: TeamworkActivityTopic | undefined;
}
