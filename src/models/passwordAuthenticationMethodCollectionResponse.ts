import type {BaseCollectionPaginationCountResponse} from './baseCollectionPaginationCountResponse';
import type {PasswordAuthenticationMethod} from './passwordAuthenticationMethod';
import type {Parsable} from '@microsoft/kiota-abstractions';

export interface PasswordAuthenticationMethodCollectionResponse extends BaseCollectionPaginationCountResponse, Parsable {
    /**
     * The value property
     */
    value?: PasswordAuthenticationMethod[] | undefined;
}
