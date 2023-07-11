import {BaseCollectionPaginationCountResponse} from '../baseCollectionPaginationCountResponse';
import {Article} from './article';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface ArticleCollectionResponse extends BaseCollectionPaginationCountResponse, Parsable {
    /**
     * The value property
     */
    value?: Article[] | undefined;
}
