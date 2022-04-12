import {TicketInfo} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createTicketInfoFromDiscriminatorValue(parseNode: ParseNode | undefined) : TicketInfo {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new TicketInfo();
}
