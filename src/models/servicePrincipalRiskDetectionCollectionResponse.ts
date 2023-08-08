import type {BaseCollectionPaginationCountResponse} from './baseCollectionPaginationCountResponse';
import type {ServicePrincipalRiskDetection} from './servicePrincipalRiskDetection';
import type {Parsable} from '@microsoft/kiota-abstractions';

export interface ServicePrincipalRiskDetectionCollectionResponse extends BaseCollectionPaginationCountResponse, Parsable {
    /**
     * The value property
     */
    value?: ServicePrincipalRiskDetection[] | undefined;
}
