import {BaseCollectionPaginationCountResponse} from './baseCollectionPaginationCountResponse';
import {WorkforceIntegration} from './workforceIntegration';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface WorkforceIntegrationCollectionResponse extends BaseCollectionPaginationCountResponse, Parsable {
    /**
     * The value property
     */
    value?: WorkforceIntegration[] | undefined;
}
