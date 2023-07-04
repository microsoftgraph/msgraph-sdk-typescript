import {TeamworkUserIdentity} from '../../../models/teamworkUserIdentity';
import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface MarkChatUnreadForUserPostRequestBody extends AdditionalDataHolder, Parsable {
    /**
     * Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     */
    additionalData?: Record<string, unknown>;
    /**
     * The lastMessageReadDateTime property
     */
    lastMessageReadDateTime?: Date | undefined;
    /**
     * The user property
     */
    user?: TeamworkUserIdentity | undefined;
}
