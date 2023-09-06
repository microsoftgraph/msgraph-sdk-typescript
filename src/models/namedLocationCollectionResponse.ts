import { type BaseCollectionPaginationCountResponse } from './baseCollectionPaginationCountResponse';
import { type NamedLocation } from './namedLocation';
import { type Parsable } from '@microsoft/kiota-abstractions';

export interface NamedLocationCollectionResponse extends BaseCollectionPaginationCountResponse, Parsable {
    /**
     * The value property
     */
    value?: NamedLocation[] | undefined;
}
