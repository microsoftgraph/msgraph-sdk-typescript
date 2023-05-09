import {deserializeIntoTicketInfo} from './deserializeIntoTicketInfo';
import {TicketInfo} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createTicketInfoFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoTicketInfo;
}
