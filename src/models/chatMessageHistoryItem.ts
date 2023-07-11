import {ChatMessageActions} from './chatMessageActions';
import {ChatMessageReaction} from './chatMessageReaction';
import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface ChatMessageHistoryItem extends AdditionalDataHolder, Parsable {
    /**
     * The actions property
     */
    actions?: ChatMessageActions | undefined;
    /**
     * Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     */
    additionalData?: Record<string, unknown>;
    /**
     * The date and time when the message was modified.
     */
    modifiedDateTime?: Date | undefined;
    /**
     * The OdataType property
     */
    odataType?: string | undefined;
    /**
     * The reaction in the modified message.
     */
    reaction?: ChatMessageReaction | undefined;
}
