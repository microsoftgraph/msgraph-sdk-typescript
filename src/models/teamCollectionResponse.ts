import { type BaseCollectionPaginationCountResponse } from './baseCollectionPaginationCountResponse';
import { type Team } from './team';
import { type Parsable } from '@microsoft/kiota-abstractions';

export interface TeamCollectionResponse extends BaseCollectionPaginationCountResponse, Parsable {
    /**
     * The value property
     */
    value?: Team[] | undefined;
}
