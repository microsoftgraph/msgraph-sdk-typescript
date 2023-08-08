import type {BaseCollectionPaginationCountResponse} from './baseCollectionPaginationCountResponse';
import type {Organization} from './organization';
import type {Parsable} from '@microsoft/kiota-abstractions';

export interface OrganizationCollectionResponse extends BaseCollectionPaginationCountResponse, Parsable {
    /**
     * The value property
     */
    value?: Organization[] | undefined;
}
