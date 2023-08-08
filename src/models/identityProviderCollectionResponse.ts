import type {BaseCollectionPaginationCountResponse} from './baseCollectionPaginationCountResponse';
import type {IdentityProvider} from './identityProvider';
import type {Parsable} from '@microsoft/kiota-abstractions';

export interface IdentityProviderCollectionResponse extends BaseCollectionPaginationCountResponse, Parsable {
    /**
     * The value property
     */
    value?: IdentityProvider[] | undefined;
}
