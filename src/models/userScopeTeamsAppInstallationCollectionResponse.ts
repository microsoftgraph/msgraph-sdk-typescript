import type {BaseCollectionPaginationCountResponse} from './baseCollectionPaginationCountResponse';
import type {UserScopeTeamsAppInstallation} from './userScopeTeamsAppInstallation';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface UserScopeTeamsAppInstallationCollectionResponse extends BaseCollectionPaginationCountResponse, Parsable {
    /**
     * The value property
     */
    value?: UserScopeTeamsAppInstallation[] | undefined;
}
