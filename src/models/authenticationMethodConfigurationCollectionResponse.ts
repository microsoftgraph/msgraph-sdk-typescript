import { type AuthenticationMethodConfiguration } from './authenticationMethodConfiguration';
import { type BaseCollectionPaginationCountResponse } from './baseCollectionPaginationCountResponse';
import { type Parsable } from '@microsoft/kiota-abstractions';

export interface AuthenticationMethodConfigurationCollectionResponse extends BaseCollectionPaginationCountResponse, Parsable {
    /**
     * The value property
     */
    value?: AuthenticationMethodConfiguration[] | undefined;
}
