import {TelecomExpenseManagementPartnerImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createTelecomExpenseManagementPartnerFromDiscriminatorValue(parseNode: ParseNode | undefined) : TelecomExpenseManagementPartnerImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new TelecomExpenseManagementPartnerImpl();
}
