import type {BaseCollectionPaginationCountResponse} from './baseCollectionPaginationCountResponse';
import type {Fido2AuthenticationMethod} from './fido2AuthenticationMethod';
import type {Parsable} from '@microsoft/kiota-abstractions';

export interface Fido2AuthenticationMethodCollectionResponse extends BaseCollectionPaginationCountResponse, Parsable {
    /**
     * The value property
     */
    value?: Fido2AuthenticationMethod[] | undefined;
}
