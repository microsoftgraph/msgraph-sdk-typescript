import {BaseCollectionPaginationCountResponse} from './baseCollectionPaginationCountResponse';
import {ConnectedOrganization} from './connectedOrganization';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface ConnectedOrganizationCollectionResponse extends BaseCollectionPaginationCountResponse, Parsable {
    /** The value property */
    value?: ConnectedOrganization[] | undefined;
}
