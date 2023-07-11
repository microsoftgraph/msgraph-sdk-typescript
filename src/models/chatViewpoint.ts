import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface ChatViewpoint extends AdditionalDataHolder, Parsable {
    /**
     * Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     */
    additionalData?: Record<string, unknown>;
    /**
     * Indicates whether the chat is hidden for the current user.
     */
    isHidden?: boolean | undefined;
    /**
     * Represents the dateTime up until which the current user has read chatMessages in a specific chat.
     */
    lastMessageReadDateTime?: Date | undefined;
    /**
     * The OdataType property
     */
    odataType?: string | undefined;
}
