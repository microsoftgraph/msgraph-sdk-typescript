import {AuthoredNote} from './authoredNote';
import {DataSubject} from './dataSubject';
import {DataSubjectType} from './dataSubjectType';
import {Entity} from './entity';
import {Identity} from './identity';
import {IdentitySet} from './identitySet';
import {SubjectRightsRequestDetail} from './subjectRightsRequestDetail';
import {SubjectRightsRequestHistory} from './subjectRightsRequestHistory';
import {SubjectRightsRequestStageDetail} from './subjectRightsRequestStageDetail';
import {SubjectRightsRequestStatus} from './subjectRightsRequestStatus';
import {SubjectRightsRequestType} from './subjectRightsRequestType';
import {Team} from './team';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface SubjectRightsRequest extends Entity, Parsable {
    /**
     * Identity that the request is assigned to.
     */
    assignedTo?: Identity | undefined;
    /**
     * The date and time when the request was closed. The Timestamp type represents date and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z.
     */
    closedDateTime?: Date | undefined;
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
     * Collection of history change events.
     */
    history?: SubjectRightsRequestHistory[] | undefined;
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
     * List of notes associcated with the request.
     */
    notes?: AuthoredNote[] | undefined;
    /**
     * List of regulations that this request will fulfill.
     */
    regulations?: string[] | undefined;
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
