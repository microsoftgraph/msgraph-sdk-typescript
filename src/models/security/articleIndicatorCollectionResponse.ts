import type {BaseCollectionPaginationCountResponse} from '../baseCollectionPaginationCountResponse';
import type {ArticleIndicator} from './articleIndicator';
import type {Parsable} from '@microsoft/kiota-abstractions';

export interface ArticleIndicatorCollectionResponse extends BaseCollectionPaginationCountResponse, Parsable {
    /**
     * The value property
     */
    value?: ArticleIndicator[] | undefined;
}
