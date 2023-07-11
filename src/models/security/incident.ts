import {Entity} from '../entity';
import {Alert} from './alert';
import {AlertClassification} from './alertClassification';
import {AlertComment} from './alertComment';
import {AlertDetermination} from './alertDetermination';
import {AlertSeverity} from './alertSeverity';
import {IncidentStatus} from './incidentStatus';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface Incident extends Entity, Parsable {
    /**
     * The list of related alerts. Supports $expand.
     */
    alerts?: Alert[] | undefined;
    /**
     * Owner of the incident, or null if no owner is assigned. Free editable text.
     */
    assignedTo?: string | undefined;
    /**
     * The specification for the incident. Possible values are: unknown, falsePositive, truePositive, informationalExpectedActivity, unknownFutureValue.
     */
    classification?: AlertClassification | undefined;
    /**
     * Array of comments created by the Security Operations (SecOps) team when the incident is managed.
     */
    comments?: AlertComment[] | undefined;
    /**
     * Time when the incident was first created.
     */
    createdDateTime?: Date | undefined;
    /**
     * Array of custom tags associated with an incident.
     */
    customTags?: string[] | undefined;
    /**
     * Specifies the determination of the incident. Possible values are: unknown, apt, malware, securityPersonnel, securityTesting, unwantedSoftware, other, multiStagedAttack, compromisedUser, phishing, maliciousUserActivity, clean, insufficientData, confirmedUserActivity, lineOfBusinessApplication, unknownFutureValue.
     */
    determination?: AlertDetermination | undefined;
    /**
     * The incident name.
     */
    displayName?: string | undefined;
    /**
     * The URL for the incident page in the Microsoft 365 Defender portal.
     */
    incidentWebUrl?: string | undefined;
    /**
     * Time when the incident was last updated.
     */
    lastUpdateDateTime?: Date | undefined;
    /**
     * Only populated in case an incident is grouped together with another incident, as part of the logic that processes incidents. In such a case, the status property is redirected.
     */
    redirectIncidentId?: string | undefined;
    /**
     * The severity property
     */
    severity?: AlertSeverity | undefined;
    /**
     * The status property
     */
    status?: IncidentStatus | undefined;
    /**
     * The Azure Active Directory tenant in which the alert was created.
     */
    tenantId?: string | undefined;
}
