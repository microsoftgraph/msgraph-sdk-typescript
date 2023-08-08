import {serializeBaseCollectionPaginationCountResponse} from './serializeBaseCollectionPaginationCountResponse';
import {serializeTelecomExpenseManagementPartner} from './serializeTelecomExpenseManagementPartner';
import type {TelecomExpenseManagementPartner} from './telecomExpenseManagementPartner';
import type {TelecomExpenseManagementPartnerCollectionResponse} from './telecomExpenseManagementPartnerCollectionResponse';
import type {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeTelecomExpenseManagementPartnerCollectionResponse(writer: SerializationWriter, telecomExpenseManagementPartnerCollectionResponse: TelecomExpenseManagementPartnerCollectionResponse | undefined = {} as TelecomExpenseManagementPartnerCollectionResponse) : void {
        serializeBaseCollectionPaginationCountResponse(writer, telecomExpenseManagementPartnerCollectionResponse)
        writer.writeCollectionOfObjectValues<TelecomExpenseManagementPartner>("value", telecomExpenseManagementPartnerCollectionResponse.value, serializeTelecomExpenseManagementPartner);
}
