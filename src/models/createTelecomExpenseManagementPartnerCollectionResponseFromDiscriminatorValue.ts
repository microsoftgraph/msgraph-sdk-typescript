import {deserializeIntoTelecomExpenseManagementPartnerCollectionResponse} from './deserializeIntoTelecomExpenseManagementPartnerCollectionResponse';
import {TelecomExpenseManagementPartnerCollectionResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createTelecomExpenseManagementPartnerCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoTelecomExpenseManagementPartnerCollectionResponse;
}
