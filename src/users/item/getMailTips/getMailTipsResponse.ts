import { type BaseCollectionPaginationCountResponse } from '../../../models/baseCollectionPaginationCountResponse';
import { type MailTips } from '../../../models/mailTips';
import { type Parsable } from '@microsoft/kiota-abstractions';

export interface GetMailTipsResponse extends BaseCollectionPaginationCountResponse, Parsable {
    /**
     * The value property
     */
    value?: MailTips[] | undefined;
}
