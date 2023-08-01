import type {BaseCollectionPaginationCountResponse} from './baseCollectionPaginationCountResponse';
import type {OAuth2PermissionGrant} from './oAuth2PermissionGrant';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface OAuth2PermissionGrantCollectionResponse extends BaseCollectionPaginationCountResponse, Parsable {
    /**
     * The value property
     */
    value?: OAuth2PermissionGrant[] | undefined;
}
