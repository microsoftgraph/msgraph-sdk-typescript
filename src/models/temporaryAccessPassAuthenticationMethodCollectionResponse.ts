import {BaseCollectionPaginationCountResponse} from './baseCollectionPaginationCountResponse';
import {TemporaryAccessPassAuthenticationMethod} from './temporaryAccessPassAuthenticationMethod';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface TemporaryAccessPassAuthenticationMethodCollectionResponse extends BaseCollectionPaginationCountResponse, Parsable {
    /**
     * The value property
     */
    value?: TemporaryAccessPassAuthenticationMethod[] | undefined;
}
