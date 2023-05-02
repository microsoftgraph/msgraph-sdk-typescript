import {BaseCollectionPaginationCountResponse} from './baseCollectionPaginationCountResponse';
import {RiskDetection} from './riskDetection';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface RiskDetectionCollectionResponse extends BaseCollectionPaginationCountResponse, Parsable {
    /** The value property */
    value?: RiskDetection[] | undefined;
}
