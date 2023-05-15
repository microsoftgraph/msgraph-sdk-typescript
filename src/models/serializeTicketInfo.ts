import {TicketInfo} from './ticketInfo';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeTicketInfo(writer: SerializationWriter, ticketInfo: TicketInfo | undefined = {} as TicketInfo) : void {
        writer.writeStringValue("@odata.type", ticketInfo.odataType);
        writer.writeStringValue("ticketNumber", ticketInfo.ticketNumber);
        writer.writeStringValue("ticketSystem", ticketInfo.ticketSystem);
        writer.writeAdditionalData(ticketInfo.additionalData);
}
