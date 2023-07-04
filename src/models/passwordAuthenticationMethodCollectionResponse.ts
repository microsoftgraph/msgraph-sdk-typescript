import {BaseCollectionPaginationCountResponse} from './baseCollectionPaginationCountResponse';
import {PasswordAuthenticationMethod} from './passwordAuthenticationMethod';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface PasswordAuthenticationMethodCollectionResponse extends BaseCollectionPaginationCountResponse, Parsable {
    /**
     * The value property
     */
    value?: PasswordAuthenticationMethod[] | undefined;
}
