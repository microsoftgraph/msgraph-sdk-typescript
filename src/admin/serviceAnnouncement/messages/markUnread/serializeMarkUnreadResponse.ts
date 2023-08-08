import type {MarkUnreadResponse} from './markUnreadResponse';
import type {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeMarkUnreadResponse(writer: SerializationWriter, markUnreadResponse: MarkUnreadResponse | undefined = {} as MarkUnreadResponse) : void {
        writer.writeBooleanValue("value", markUnreadResponse.value);
        writer.writeAdditionalData(markUnreadResponse.additionalData);
}
