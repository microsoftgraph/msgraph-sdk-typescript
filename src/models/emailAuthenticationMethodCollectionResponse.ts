import {BaseCollectionPaginationCountResponse} from './baseCollectionPaginationCountResponse';
import {EmailAuthenticationMethod} from './emailAuthenticationMethod';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface EmailAuthenticationMethodCollectionResponse extends BaseCollectionPaginationCountResponse, Parsable {
    /** The value property */
    value?: EmailAuthenticationMethod[] | undefined;
}
