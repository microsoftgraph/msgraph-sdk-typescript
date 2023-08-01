import {createTelecomExpenseManagementPartnerFromDiscriminatorValue} from './createTelecomExpenseManagementPartnerFromDiscriminatorValue';
import {deserializeIntoBaseCollectionPaginationCountResponse} from './deserializeIntoBaseCollectionPaginationCountResponse';
import {serializeTelecomExpenseManagementPartner} from './serializeTelecomExpenseManagementPartner';
import type {TelecomExpenseManagementPartner} from './telecomExpenseManagementPartner';
import type {TelecomExpenseManagementPartnerCollectionResponse} from './telecomExpenseManagementPartnerCollectionResponse';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoTelecomExpenseManagementPartnerCollectionResponse(telecomExpenseManagementPartnerCollectionResponse: TelecomExpenseManagementPartnerCollectionResponse | undefined = {} as TelecomExpenseManagementPartnerCollectionResponse) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(telecomExpenseManagementPartnerCollectionResponse),
        "value": n => { telecomExpenseManagementPartnerCollectionResponse.value = n.getCollectionOfObjectValues<TelecomExpenseManagementPartner>(createTelecomExpenseManagementPartnerFromDiscriminatorValue); },
    }
}
