import type {BaseCollectionPaginationCountResponse} from './baseCollectionPaginationCountResponse';
import type {OnenotePage} from './onenotePage';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface OnenotePageCollectionResponse extends BaseCollectionPaginationCountResponse, Parsable {
    /**
     * The value property
     */
    value?: OnenotePage[] | undefined;
}
