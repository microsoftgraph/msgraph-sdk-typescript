import { type BaseCollectionPaginationCountResponse } from './baseCollectionPaginationCountResponse';
import { type ConnectedOrganization } from './connectedOrganization';
import { type Parsable } from '@microsoft/kiota-abstractions';

export interface ConnectedOrganizationCollectionResponse extends BaseCollectionPaginationCountResponse, Parsable {
    /**
     * The value property
     */
    value?: ConnectedOrganization[] | undefined;
}
