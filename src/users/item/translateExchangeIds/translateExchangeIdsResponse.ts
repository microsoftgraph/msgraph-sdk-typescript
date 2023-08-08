import type {BaseCollectionPaginationCountResponse} from '../../../models/baseCollectionPaginationCountResponse';
import type {ConvertIdResult} from '../../../models/convertIdResult';
import type {Parsable} from '@microsoft/kiota-abstractions';

export interface TranslateExchangeIdsResponse extends BaseCollectionPaginationCountResponse, Parsable {
    /**
     * The value property
     */
    value?: ConvertIdResult[] | undefined;
}
