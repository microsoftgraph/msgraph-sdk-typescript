import { type BaseCollectionPaginationCountResponse } from './baseCollectionPaginationCountResponse';
import { type WorkforceIntegration } from './workforceIntegration';
import { type Parsable } from '@microsoft/kiota-abstractions';

export interface WorkforceIntegrationCollectionResponse extends BaseCollectionPaginationCountResponse, Parsable {
    /**
     * The value property
     */
    value?: WorkforceIntegration[] | undefined;
}
