import {BaseCollectionPaginationCountResponse} from '../../../../../models/baseCollectionPaginationCountResponse';
import {ExternalActivityResult} from '../../../../../models/externalConnectors/externalActivityResult';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface AddActivitiesResponse extends BaseCollectionPaginationCountResponse, Parsable {
    /**
     * The value property
     */
    value?: ExternalActivityResult[] | undefined;
}
