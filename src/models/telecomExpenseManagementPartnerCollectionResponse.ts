import {BaseCollectionPaginationCountResponse} from './baseCollectionPaginationCountResponse';
import {TelecomExpenseManagementPartner} from './telecomExpenseManagementPartner';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface TelecomExpenseManagementPartnerCollectionResponse extends BaseCollectionPaginationCountResponse, Parsable {
    /**
     * The value property
     */
    value?: TelecomExpenseManagementPartner[] | undefined;
}
