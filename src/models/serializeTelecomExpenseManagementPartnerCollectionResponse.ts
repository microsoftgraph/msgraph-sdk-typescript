import {serializeBaseCollectionPaginationCountResponse} from './serializeBaseCollectionPaginationCountResponse';
import {serializeTelecomExpenseManagementPartner} from './serializeTelecomExpenseManagementPartner';
import {TelecomExpenseManagementPartner} from './telecomExpenseManagementPartner';
import {TelecomExpenseManagementPartnerCollectionResponse} from './telecomExpenseManagementPartnerCollectionResponse';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeTelecomExpenseManagementPartnerCollectionResponse(writer: SerializationWriter, telecomExpenseManagementPartnerCollectionResponse: TelecomExpenseManagementPartnerCollectionResponse | undefined = {} as TelecomExpenseManagementPartnerCollectionResponse) : void {
        serializeBaseCollectionPaginationCountResponse(writer, telecomExpenseManagementPartnerCollectionResponse)
        writer.writeCollectionOfObjectValues<TelecomExpenseManagementPartner>("value", telecomExpenseManagementPartnerCollectionResponse.value, serializeTelecomExpenseManagementPartner);
}
