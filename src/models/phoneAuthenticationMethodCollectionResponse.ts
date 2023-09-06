import { type BaseCollectionPaginationCountResponse } from './baseCollectionPaginationCountResponse';
import { type PhoneAuthenticationMethod } from './phoneAuthenticationMethod';
import { type Parsable } from '@microsoft/kiota-abstractions';

export interface PhoneAuthenticationMethodCollectionResponse extends BaseCollectionPaginationCountResponse, Parsable {
    /**
     * The value property
     */
    value?: PhoneAuthenticationMethod[] | undefined;
}
