import { type BaseCollectionPaginationCountResponse } from './baseCollectionPaginationCountResponse';
import { type TemporaryAccessPassAuthenticationMethod } from './temporaryAccessPassAuthenticationMethod';
import { type Parsable } from '@microsoft/kiota-abstractions';

export interface TemporaryAccessPassAuthenticationMethodCollectionResponse extends BaseCollectionPaginationCountResponse, Parsable {
    /**
     * The value property
     */
    value?: TemporaryAccessPassAuthenticationMethod[] | undefined;
}
