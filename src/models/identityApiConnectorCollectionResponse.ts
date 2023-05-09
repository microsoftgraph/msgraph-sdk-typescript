import {BaseCollectionPaginationCountResponse} from './baseCollectionPaginationCountResponse';
import {IdentityApiConnector} from './identityApiConnector';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface IdentityApiConnectorCollectionResponse extends BaseCollectionPaginationCountResponse, Parsable {
    /** The value property */
    value?: IdentityApiConnector[] | undefined;
}
