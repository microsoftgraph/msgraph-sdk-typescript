import { type BaseCollectionPaginationCountResponse } from '../baseCollectionPaginationCountResponse';
import { type Host } from './host';
import { type Parsable } from '@microsoft/kiota-abstractions';

export interface HostCollectionResponse extends BaseCollectionPaginationCountResponse, Parsable {
    /**
     * The value property
     */
    value?: Host[] | undefined;
}
