import { type BaseCollectionPaginationCountResponse } from '../baseCollectionPaginationCountResponse';
import { type ExternalItem } from './externalItem';
import { type Parsable } from '@microsoft/kiota-abstractions';

export interface ExternalItemCollectionResponse extends BaseCollectionPaginationCountResponse, Parsable {
    /**
     * The value property
     */
    value?: ExternalItem[] | undefined;
}
