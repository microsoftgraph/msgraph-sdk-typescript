import {BaseCollectionPaginationCountResponse} from '../../../models/baseCollectionPaginationCountResponse';
import {ConvertIdResult} from '../../../models/convertIdResult';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface TranslateExchangeIdsResponse extends BaseCollectionPaginationCountResponse, Parsable {
    /**
     * The value property
     */
    value?: ConvertIdResult[] | undefined;
}
