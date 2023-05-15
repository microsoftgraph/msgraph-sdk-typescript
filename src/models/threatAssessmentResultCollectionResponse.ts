import {BaseCollectionPaginationCountResponse} from './baseCollectionPaginationCountResponse';
import {ThreatAssessmentResult} from './threatAssessmentResult';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface ThreatAssessmentResultCollectionResponse extends BaseCollectionPaginationCountResponse, Parsable {
    /** The value property */
    value?: ThreatAssessmentResult[] | undefined;
}
