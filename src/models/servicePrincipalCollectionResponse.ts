import {BaseCollectionPaginationCountResponse} from './baseCollectionPaginationCountResponse';
import {ServicePrincipal} from './servicePrincipal';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface ServicePrincipalCollectionResponse extends BaseCollectionPaginationCountResponse, Parsable {
    /**
     * The value property
     */
    value?: ServicePrincipal[] | undefined;
}
