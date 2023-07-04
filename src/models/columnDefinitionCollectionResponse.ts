import {BaseCollectionPaginationCountResponse} from './baseCollectionPaginationCountResponse';
import {ColumnDefinition} from './columnDefinition';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface ColumnDefinitionCollectionResponse extends BaseCollectionPaginationCountResponse, Parsable {
    /**
     * The value property
     */
    value?: ColumnDefinition[] | undefined;
}
