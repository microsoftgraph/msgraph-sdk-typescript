import {BaseCollectionPaginationCountResponse} from './baseCollectionPaginationCountResponse';
import {Organization} from './organization';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface OrganizationCollectionResponse extends BaseCollectionPaginationCountResponse, Parsable {
    /**
     * The value property
     */
    value?: Organization[] | undefined;
}
