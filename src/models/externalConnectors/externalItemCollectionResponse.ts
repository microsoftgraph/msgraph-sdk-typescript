import {BaseCollectionPaginationCountResponse} from '../baseCollectionPaginationCountResponse';
import {ExternalItem} from './externalItem';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface ExternalItemCollectionResponse extends BaseCollectionPaginationCountResponse, Parsable {
    /**
     * The value property
     */
    value?: ExternalItem[] | undefined;
}
