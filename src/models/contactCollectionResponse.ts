import {BaseCollectionPaginationCountResponse} from './baseCollectionPaginationCountResponse';
import {Contact} from './contact';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface ContactCollectionResponse extends BaseCollectionPaginationCountResponse, Parsable {
    /**
     * The value property
     */
    value?: Contact[] | undefined;
}
