import { type BaseCollectionPaginationCountResponse } from './baseCollectionPaginationCountResponse';
import { type ColumnDefinition } from './columnDefinition';
import { type Parsable } from '@microsoft/kiota-abstractions';

export interface ColumnDefinitionCollectionResponse extends BaseCollectionPaginationCountResponse, Parsable {
    /**
     * The value property
     */
    value?: ColumnDefinition[] | undefined;
}
