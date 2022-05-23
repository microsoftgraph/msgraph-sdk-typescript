import {TelecomExpenseManagementPartnerCollectionResponseImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createTelecomExpenseManagementPartnerCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : TelecomExpenseManagementPartnerCollectionResponseImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new TelecomExpenseManagementPartnerCollectionResponseImpl();
}
