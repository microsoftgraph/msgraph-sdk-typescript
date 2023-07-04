import {BaseCollectionPaginationCountResponse} from '../baseCollectionPaginationCountResponse';
import {ArticleIndicator} from './articleIndicator';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface ArticleIndicatorCollectionResponse extends BaseCollectionPaginationCountResponse, Parsable {
    /**
     * The value property
     */
    value?: ArticleIndicator[] | undefined;
}
