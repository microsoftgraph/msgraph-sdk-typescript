import {BaseCollectionPaginationCountResponse} from './baseCollectionPaginationCountResponse';
import {PhoneAuthenticationMethod} from './phoneAuthenticationMethod';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface PhoneAuthenticationMethodCollectionResponse extends BaseCollectionPaginationCountResponse, Parsable {
    /** The value property */
    value?: PhoneAuthenticationMethod[] | undefined;
}
