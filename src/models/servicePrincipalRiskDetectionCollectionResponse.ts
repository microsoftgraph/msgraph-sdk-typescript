import {BaseCollectionPaginationCountResponse} from './baseCollectionPaginationCountResponse';
import {ServicePrincipalRiskDetection} from './servicePrincipalRiskDetection';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface ServicePrincipalRiskDetectionCollectionResponse extends BaseCollectionPaginationCountResponse, Parsable {
    /** The value property */
    value?: ServicePrincipalRiskDetection[] | undefined;
}
