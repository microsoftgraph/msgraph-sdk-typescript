import type {BaseCollectionPaginationCountResponse} from '../baseCollectionPaginationCountResponse';
import type {Article} from './article';
import type {Parsable} from '@microsoft/kiota-abstractions';

export interface ArticleCollectionResponse extends BaseCollectionPaginationCountResponse, Parsable {
    /**
     * The value property
     */
    value?: Article[] | undefined;
}
