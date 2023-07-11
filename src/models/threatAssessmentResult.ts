import {Entity} from './entity';
import {ThreatAssessmentResultType} from './threatAssessmentResultType';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface ThreatAssessmentResult extends Entity, Parsable {
    /**
     * The Timestamp type represents date and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z.
     */
    createdDateTime?: Date | undefined;
    /**
     * The result message for each threat assessment.
     */
    message?: string | undefined;
    /**
     * The threat assessment result type. Possible values are: checkPolicy, rescan.
     */
    resultType?: ThreatAssessmentResultType | undefined;
}
