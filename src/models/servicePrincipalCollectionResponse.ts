import { type BaseCollectionPaginationCountResponse } from './baseCollectionPaginationCountResponse';
import { type ServicePrincipal } from './servicePrincipal';
import { type Parsable } from '@microsoft/kiota-abstractions';

export interface ServicePrincipalCollectionResponse extends BaseCollectionPaginationCountResponse, Parsable {
    /**
     * The value property
     */
    value?: ServicePrincipal[] | undefined;
}
