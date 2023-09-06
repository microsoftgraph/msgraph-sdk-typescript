import { type BaseCollectionPaginationCountResponse } from './baseCollectionPaginationCountResponse';
import { type TeamworkTag } from './teamworkTag';
import { type Parsable } from '@microsoft/kiota-abstractions';

export interface TeamworkTagCollectionResponse extends BaseCollectionPaginationCountResponse, Parsable {
    /**
     * The value property
     */
    value?: TeamworkTag[] | undefined;
}
