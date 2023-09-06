import { deserializeIntoTicketInfo } from './deserializeIntoTicketInfo';
import { type TicketInfo } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createTicketInfoFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoTicketInfo;
}
