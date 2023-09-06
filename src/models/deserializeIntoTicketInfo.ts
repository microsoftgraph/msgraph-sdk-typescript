import { type TicketInfo } from './ticketInfo';
import { type AdditionalDataHolder, type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function deserializeIntoTicketInfo(ticketInfo: TicketInfo | undefined = {} as TicketInfo) : Record<string, (node: ParseNode) => void> {
    return {
        "@odata.type": n => { ticketInfo.odataType = n.getStringValue(); },
        "ticketNumber": n => { ticketInfo.ticketNumber = n.getStringValue(); },
        "ticketSystem": n => { ticketInfo.ticketSystem = n.getStringValue(); },
    }
}
