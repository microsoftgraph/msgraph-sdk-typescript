import { type BaseCollectionPaginationCountResponse } from '../baseCollectionPaginationCountResponse';
import { type ExternalActivity } from './externalActivity';
import { type Parsable } from '@microsoft/kiota-abstractions';

export interface ExternalActivityCollectionResponse extends BaseCollectionPaginationCountResponse, Parsable {
    /**
     * The value property
     */
    value?: ExternalActivity[] | undefined;
}
