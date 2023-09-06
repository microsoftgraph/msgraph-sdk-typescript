import { type BaseCollectionPaginationCountResponse } from '../../../../../models/baseCollectionPaginationCountResponse';
import { type ExternalActivityResult } from '../../../../../models/externalConnectors/externalActivityResult';
import { type Parsable } from '@microsoft/kiota-abstractions';

export interface AddActivitiesResponse extends BaseCollectionPaginationCountResponse, Parsable {
    /**
     * The value property
     */
    value?: ExternalActivityResult[] | undefined;
}
