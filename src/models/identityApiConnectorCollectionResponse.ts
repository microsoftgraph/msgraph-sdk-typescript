import { type BaseCollectionPaginationCountResponse } from './baseCollectionPaginationCountResponse';
import { type IdentityApiConnector } from './identityApiConnector';
import { type Parsable } from '@microsoft/kiota-abstractions';

export interface IdentityApiConnectorCollectionResponse extends BaseCollectionPaginationCountResponse, Parsable {
    /**
     * The value property
     */
    value?: IdentityApiConnector[] | undefined;
}
