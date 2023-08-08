import type {BaseCollectionPaginationCountResponse} from './baseCollectionPaginationCountResponse';
import type {Contact} from './contact';
import type {Parsable} from '@microsoft/kiota-abstractions';

export interface ContactCollectionResponse extends BaseCollectionPaginationCountResponse, Parsable {
    /**
     * The value property
     */
    value?: Contact[] | undefined;
}
