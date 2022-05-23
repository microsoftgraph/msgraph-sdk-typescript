import {Entity} from './entity';
import {IdentitySet} from './identitySet';
import {ThreatAssessmentContentType} from './threatAssessmentContentType';
import {ThreatAssessmentRequestSource} from './threatAssessmentRequestSource';
import {ThreatAssessmentResult} from './threatAssessmentResult';
import {ThreatAssessmentStatus} from './threatAssessmentStatus';
import {ThreatCategory} from './threatCategory';
import {ThreatExpectedAssessment} from './threatExpectedAssessment';

export interface ThreatAssessmentRequest extends Entity{
    /** The threat category. Possible values are: spam, phishing, malware. */
    category?:ThreatCategory | undefined;
    /** The content type of threat assessment. Possible values are: mail, url, file. */
    contentType?:ThreatAssessmentContentType | undefined;
    /** The threat assessment request creator. */
    createdBy?:IdentitySet | undefined;
    /** The Timestamp type represents date and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z. */
    createdDateTime?:Date | undefined;
    /** The expected assessment from submitter. Possible values are: block, unblock. */
    expectedAssessment?:ThreatExpectedAssessment | undefined;
    /** The source of the threat assessment request. Possible values are: user, administrator. */
    requestSource?:ThreatAssessmentRequestSource | undefined;
    /** A collection of threat assessment results. Read-only. By default, a GET /threatAssessmentRequests/{id} does not return this property unless you apply $expand on it. */
    results?:ThreatAssessmentResult[] | undefined;
    /** The assessment process status. Possible values are: pending, completed. */
    status?:ThreatAssessmentStatus | undefined;
}
