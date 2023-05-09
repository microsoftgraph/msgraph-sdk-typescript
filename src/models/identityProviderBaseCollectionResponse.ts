import {BaseCollectionPaginationCountResponse} from './baseCollectionPaginationCountResponse';
import {IdentityProviderBase} from './identityProviderBase';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface IdentityProviderBaseCollectionResponse extends BaseCollectionPaginationCountResponse, Parsable {
    /** The value property */
    value?: IdentityProviderBase[] | undefined;
}
