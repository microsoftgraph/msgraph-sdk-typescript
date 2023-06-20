import {EventMessageDetail} from './eventMessageDetail';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeEventMessageDetail(eventMessageDetail: EventMessageDetail | undefined = {} as EventMessageDetail, writer: SerializationWriter) : void {
        writer.writeStringValue("@odata.type", eventMessageDetail.odataType);
        writer.writeAdditionalData(eventMessageDetail.additionalData);
}
