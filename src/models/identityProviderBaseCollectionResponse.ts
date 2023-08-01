import type {BaseCollectionPaginationCountResponse} from './baseCollectionPaginationCountResponse';
import type {IdentityProviderBase} from './identityProviderBase';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface IdentityProviderBaseCollectionResponse extends BaseCollectionPaginationCountResponse, Parsable {
    /**
     * The value property
     */
    value?: IdentityProviderBase[] | undefined;
}
