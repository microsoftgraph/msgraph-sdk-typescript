import {BaseCollectionPaginationCountResponse} from './baseCollectionPaginationCountResponse';
import {Fido2AuthenticationMethod} from './fido2AuthenticationMethod';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface Fido2AuthenticationMethodCollectionResponse extends BaseCollectionPaginationCountResponse, Parsable {
    /** The value property */
    value?: Fido2AuthenticationMethod[] | undefined;
}
