import {ChatMessageActions} from './chatMessageActions';
import {ChatMessageReaction} from './chatMessageReaction';
import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface ChatMessageHistoryItem extends AdditionalDataHolder, Parsable {
    /** The actions property */
    actions?: ChatMessageActions | undefined;
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData?: Record<string, unknown>;
    /** The modifiedDateTime property */
    modifiedDateTime?: Date | undefined;
    /** The OdataType property */
    odataType?: string | undefined;
    /** The reaction property */
    reaction?: ChatMessageReaction | undefined;
}
