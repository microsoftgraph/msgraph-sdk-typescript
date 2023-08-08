import type {BaseCollectionPaginationCountResponse} from './baseCollectionPaginationCountResponse';
import type {TelecomExpenseManagementPartner} from './telecomExpenseManagementPartner';
import type {Parsable} from '@microsoft/kiota-abstractions';

export interface TelecomExpenseManagementPartnerCollectionResponse extends BaseCollectionPaginationCountResponse, Parsable {
    /**
     * The value property
     */
    value?: TelecomExpenseManagementPartner[] | undefined;
}
