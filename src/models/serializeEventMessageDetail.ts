import type {EventMessageDetail} from './eventMessageDetail';
import type {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeEventMessageDetail(writer: SerializationWriter, eventMessageDetail: EventMessageDetail | undefined = {} as EventMessageDetail) : void {
        writer.writeStringValue("@odata.type", eventMessageDetail.odataType);
        writer.writeAdditionalData(eventMessageDetail.additionalData);
}
