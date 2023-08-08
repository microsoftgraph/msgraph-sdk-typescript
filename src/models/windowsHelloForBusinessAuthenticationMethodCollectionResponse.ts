import type {BaseCollectionPaginationCountResponse} from './baseCollectionPaginationCountResponse';
import type {WindowsHelloForBusinessAuthenticationMethod} from './windowsHelloForBusinessAuthenticationMethod';
import type {Parsable} from '@microsoft/kiota-abstractions';

export interface WindowsHelloForBusinessAuthenticationMethodCollectionResponse extends BaseCollectionPaginationCountResponse, Parsable {
    /**
     * The value property
     */
    value?: WindowsHelloForBusinessAuthenticationMethod[] | undefined;
}
