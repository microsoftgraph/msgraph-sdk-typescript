import type {BaseCollectionPaginationCountResponse} from './baseCollectionPaginationCountResponse';
import type {EmailAuthenticationMethod} from './emailAuthenticationMethod';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface EmailAuthenticationMethodCollectionResponse extends BaseCollectionPaginationCountResponse, Parsable {
    /**
     * The value property
     */
    value?: EmailAuthenticationMethod[] | undefined;
}
