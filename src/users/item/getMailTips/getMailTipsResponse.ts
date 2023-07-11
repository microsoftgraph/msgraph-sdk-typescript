import {BaseCollectionPaginationCountResponse} from '../../../models/baseCollectionPaginationCountResponse';
import {MailTips} from '../../../models/mailTips';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface GetMailTipsResponse extends BaseCollectionPaginationCountResponse, Parsable {
    /**
     * The value property
     */
    value?: MailTips[] | undefined;
}
