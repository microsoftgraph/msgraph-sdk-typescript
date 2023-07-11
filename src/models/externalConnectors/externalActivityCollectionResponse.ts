import {BaseCollectionPaginationCountResponse} from '../baseCollectionPaginationCountResponse';
import {ExternalActivity} from './externalActivity';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface ExternalActivityCollectionResponse extends BaseCollectionPaginationCountResponse, Parsable {
    /**
     * The value property
     */
    value?: ExternalActivity[] | undefined;
}
