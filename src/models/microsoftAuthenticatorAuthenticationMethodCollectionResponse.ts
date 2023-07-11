import {BaseCollectionPaginationCountResponse} from './baseCollectionPaginationCountResponse';
import {MicrosoftAuthenticatorAuthenticationMethod} from './microsoftAuthenticatorAuthenticationMethod';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface MicrosoftAuthenticatorAuthenticationMethodCollectionResponse extends BaseCollectionPaginationCountResponse, Parsable {
    /**
     * The value property
     */
    value?: MicrosoftAuthenticatorAuthenticationMethod[] | undefined;
}
