import { type AuthoredNote } from './authoredNote';
import { type DataSubject } from './dataSubject';
import { DataSubjectType } from './dataSubjectType';
import { type Entity } from './entity';
import { type Identity } from './identity';
import { type IdentitySet } from './identitySet';
import { type SubjectRightsRequestDetail } from './subjectRightsRequestDetail';
import { type SubjectRightsRequestHistory } from './subjectRightsRequestHistory';
import { type SubjectRightsRequestMailboxLocation } from './subjectRightsRequestMailboxLocation';
import { type SubjectRightsRequestSiteLocation } from './subjectRightsRequestSiteLocation';
import { type SubjectRightsRequestStageDetail } from './subjectRightsRequestStageDetail';
import { SubjectRightsRequestStatus } from './subjectRightsRequestStatus';
import { SubjectRightsRequestType } from './subjectRightsRequestType';
import { type Team } from './team';
import { type User } from './user';
import { type Parsable } from '@microsoft/kiota-abstractions';

export interface SubjectRightsRequest extends Entity, Parsable {
    /**
     * The approvers property
     */
    approvers?: User[] | undefined;
    /**
     * Identity that the request is assigned to.
     */
    assignedTo?: Identity | undefined;
    /**
     * The date and time when the request was closed. The Timestamp type represents date and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z.
     */
    closedDateTime?: Date | undefined;
    /**
     * The collaborators property
     */
    collaborators?: User[] | undefined;
    /**
     * The contentQuery property
     */
    contentQuery?: string | undefined;
    /**
     * Identity information for the entity that created the request.
     */
    createdBy?: IdentitySet | undefined;
    /**
     * The date and time when the request was created. The Timestamp type represents date and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z.
     */
    createdDateTime?: Date | undefined;
    /**
     * Information about the data subject.
     */
    dataSubject?: DataSubject | undefined;
    /**
     * The type of the data subject. Possible values are: customer, currentEmployee, formerEmployee, prospectiveEmployee, student, teacher, faculty, other, unknownFutureValue.
     */
    dataSubjectType?: DataSubjectType | undefined;
    /**
     * Description for the request.
     */
    description?: string | undefined;
    /**
     * The name of the request.
     */
    displayName?: string | undefined;
    /**
     * The externalId property
     */
    externalId?: string | undefined;
    /**
     * Collection of history change events.
     */
    history?: SubjectRightsRequestHistory[] | undefined;
    /**
     * The includeAllVersions property
     */
    includeAllVersions?: boolean | undefined;
    /**
     * The includeAuthoredContent property
     */
    includeAuthoredContent?: boolean | undefined;
    /**
     * Insight about the request.
     */
    insight?: SubjectRightsRequestDetail | undefined;
    /**
     * The date and time when the request is internally due. The Timestamp type represents date and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z.
     */
    internalDueDateTime?: Date | undefined;
    /**
     * Identity information for the entity that last modified the request.
     */
    lastModifiedBy?: IdentitySet | undefined;
    /**
     * The date and time when the request was last modified. The Timestamp type represents date and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z.
     */
    lastModifiedDateTime?: Date | undefined;
    /**
     * The mailboxlocations property
     */
    mailboxlocations?: SubjectRightsRequestMailboxLocation | undefined;
    /**
     * List of notes associcated with the request.
     */
    notes?: AuthoredNote[] | undefined;
    /**
     * The pauseAfterEstimate property
     */
    pauseAfterEstimate?: boolean | undefined;
    /**
     * List of regulations that this request will fulfill.
     */
    regulations?: string[] | undefined;
    /**
     * The sitelocations property
     */
    sitelocations?: SubjectRightsRequestSiteLocation | undefined;
    /**
     * Information about the different stages for the request.
     */
    stages?: SubjectRightsRequestStageDetail[] | undefined;
    /**
     * The status of the request.. Possible values are: active, closed, unknownFutureValue.
     */
    status?: SubjectRightsRequestStatus | undefined;
    /**
     * Information about the Microsoft Teams team that was created for the request.
     */
    team?: Team | undefined;
    /**
     * The type of the request. Possible values are: export, delete,  access, tagForAction, unknownFutureValue.
     */
    type?: SubjectRightsRequestType | undefined;
}
