import {BaseCollectionPaginationCountResponse} from './baseCollectionPaginationCountResponse';
import {IdentityProvider} from './identityProvider';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface IdentityProviderCollectionResponse extends BaseCollectionPaginationCountResponse, Parsable {
    /**
     * The value property
     */
    value?: IdentityProvider[] | undefined;
}
