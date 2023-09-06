import { type BaseCollectionPaginationCountResponse } from './baseCollectionPaginationCountResponse';
import { type TeamsAppInstallation } from './teamsAppInstallation';
import { type Parsable } from '@microsoft/kiota-abstractions';

export interface TeamsAppInstallationCollectionResponse extends BaseCollectionPaginationCountResponse, Parsable {
    /**
     * The value property
     */
    value?: TeamsAppInstallation[] | undefined;
}
