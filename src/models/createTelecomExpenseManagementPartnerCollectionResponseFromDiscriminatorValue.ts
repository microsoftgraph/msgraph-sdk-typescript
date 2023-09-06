import { deserializeIntoTelecomExpenseManagementPartnerCollectionResponse } from './deserializeIntoTelecomExpenseManagementPartnerCollectionResponse';
import { type TelecomExpenseManagementPartnerCollectionResponse } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createTelecomExpenseManagementPartnerCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoTelecomExpenseManagementPartnerCollectionResponse;
}
