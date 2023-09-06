import { type BaseCollectionPaginationCountResponse } from './baseCollectionPaginationCountResponse';
import { type MicrosoftAuthenticatorAuthenticationMethod } from './microsoftAuthenticatorAuthenticationMethod';
import { type Parsable } from '@microsoft/kiota-abstractions';

export interface MicrosoftAuthenticatorAuthenticationMethodCollectionResponse extends BaseCollectionPaginationCountResponse, Parsable {
    /**
     * The value property
     */
    value?: MicrosoftAuthenticatorAuthenticationMethod[] | undefined;
}
