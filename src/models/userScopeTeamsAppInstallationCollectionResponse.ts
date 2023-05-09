import {BaseCollectionPaginationCountResponse} from './baseCollectionPaginationCountResponse';
import {UserScopeTeamsAppInstallation} from './userScopeTeamsAppInstallation';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface UserScopeTeamsAppInstallationCollectionResponse extends BaseCollectionPaginationCountResponse, Parsable {
    /** The value property */
    value?: UserScopeTeamsAppInstallation[] | undefined;
}
