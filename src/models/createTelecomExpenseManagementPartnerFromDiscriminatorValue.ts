import { deserializeIntoTelecomExpenseManagementPartner } from './deserializeIntoTelecomExpenseManagementPartner';
import { type TelecomExpenseManagementPartner } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createTelecomExpenseManagementPartnerFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoTelecomExpenseManagementPartner;
}
