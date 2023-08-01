import type {BaseCollectionPaginationCountResponse} from './baseCollectionPaginationCountResponse';
import type {SignIn} from './signIn';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface SignInCollectionResponse extends BaseCollectionPaginationCountResponse, Parsable {
    /**
     * The value property
     */
    value?: SignIn[] | undefined;
}
