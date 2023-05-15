import {BaseCollectionPaginationCountResponse} from './baseCollectionPaginationCountResponse';
import {ThreatAssessmentRequest} from './threatAssessmentRequest';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface ThreatAssessmentRequestCollectionResponse extends BaseCollectionPaginationCountResponse, Parsable {
    /** The value property */
    value?: ThreatAssessmentRequest[] | undefined;
}
