import { type MarkUnreadResponse } from './markUnreadResponse';
import { type AdditionalDataHolder, type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeMarkUnreadResponse(writer: SerializationWriter, markUnreadResponse: MarkUnreadResponse | undefined = {} as MarkUnreadResponse) : void {
        writer.writeBooleanValue("value", markUnreadResponse.value);
        writer.writeAdditionalData(markUnreadResponse.additionalData);
}
