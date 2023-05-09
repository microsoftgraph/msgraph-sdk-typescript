import {BaseCollectionPaginationCountResponse} from './baseCollectionPaginationCountResponse';
import {TeamsAppInstallation} from './teamsAppInstallation';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface TeamsAppInstallationCollectionResponse extends BaseCollectionPaginationCountResponse, Parsable {
    /** The value property */
    value?: TeamsAppInstallation[] | undefined;
}
