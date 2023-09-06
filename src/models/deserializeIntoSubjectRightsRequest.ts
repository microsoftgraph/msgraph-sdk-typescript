import { type AuthoredNote } from './authoredNote';
import { createAuthoredNoteFromDiscriminatorValue } from './createAuthoredNoteFromDiscriminatorValue';
import { createDataSubjectFromDiscriminatorValue } from './createDataSubjectFromDiscriminatorValue';
import { createIdentityFromDiscriminatorValue } from './createIdentityFromDiscriminatorValue';
import { createIdentitySetFromDiscriminatorValue } from './createIdentitySetFromDiscriminatorValue';
import { createSubjectRightsRequestDetailFromDiscriminatorValue } from './createSubjectRightsRequestDetailFromDiscriminatorValue';
import { createSubjectRightsRequestHistoryFromDiscriminatorValue } from './createSubjectRightsRequestHistoryFromDiscriminatorValue';
import { createSubjectRightsRequestMailboxLocationFromDiscriminatorValue } from './createSubjectRightsRequestMailboxLocationFromDiscriminatorValue';
import { createSubjectRightsRequestSiteLocationFromDiscriminatorValue } from './createSubjectRightsRequestSiteLocationFromDiscriminatorValue';
import { createSubjectRightsRequestStageDetailFromDiscriminatorValue } from './createSubjectRightsRequestStageDetailFromDiscriminatorValue';
import { createTeamFromDiscriminatorValue } from './createTeamFromDiscriminatorValue';
import { createUserFromDiscriminatorValue } from './createUserFromDiscriminatorValue';
import { type DataSubject } from './dataSubject';
import { DataSubjectType } from './dataSubjectType';
import { deserializeIntoEntity } from './deserializeIntoEntity';
import { type Identity } from './identity';
import { type IdentitySet } from './identitySet';
import { serializeAuthoredNote } from './serializeAuthoredNote';
import { serializeDataSubject } from './serializeDataSubject';
import { serializeIdentity } from './serializeIdentity';
import { serializeIdentitySet } from './serializeIdentitySet';
import { serializeSubjectRightsRequestDetail } from './serializeSubjectRightsRequestDetail';
import { serializeSubjectRightsRequestHistory } from './serializeSubjectRightsRequestHistory';
import { serializeSubjectRightsRequestMailboxLocation } from './serializeSubjectRightsRequestMailboxLocation';
import { serializeSubjectRightsRequestSiteLocation } from './serializeSubjectRightsRequestSiteLocation';
import { serializeSubjectRightsRequestStageDetail } from './serializeSubjectRightsRequestStageDetail';
import { serializeTeam } from './serializeTeam';
import { serializeUser } from './serializeUser';
import { type SubjectRightsRequest } from './subjectRightsRequest';
import { type SubjectRightsRequestDetail } from './subjectRightsRequestDetail';
import { type SubjectRightsRequestHistory } from './subjectRightsRequestHistory';
import { type SubjectRightsRequestMailboxLocation } from './subjectRightsRequestMailboxLocation';
import { type SubjectRightsRequestSiteLocation } from './subjectRightsRequestSiteLocation';
import { type SubjectRightsRequestStageDetail } from './subjectRightsRequestStageDetail';
import { SubjectRightsRequestStatus } from './subjectRightsRequestStatus';
import { SubjectRightsRequestType } from './subjectRightsRequestType';
import { type Team } from './team';
import { type User } from './user';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function deserializeIntoSubjectRightsRequest(subjectRightsRequest: SubjectRightsRequest | undefined = {} as SubjectRightsRequest) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEntity(subjectRightsRequest),
        "approvers": n => { subjectRightsRequest.approvers = n.getCollectionOfObjectValues<User>(createUserFromDiscriminatorValue); },
        "assignedTo": n => { subjectRightsRequest.assignedTo = n.getObjectValue<Identity>(createIdentityFromDiscriminatorValue); },
        "closedDateTime": n => { subjectRightsRequest.closedDateTime = n.getDateValue(); },
        "collaborators": n => { subjectRightsRequest.collaborators = n.getCollectionOfObjectValues<User>(createUserFromDiscriminatorValue); },
        "contentQuery": n => { subjectRightsRequest.contentQuery = n.getStringValue(); },
        "createdBy": n => { subjectRightsRequest.createdBy = n.getObjectValue<IdentitySet>(createIdentitySetFromDiscriminatorValue); },
        "createdDateTime": n => { subjectRightsRequest.createdDateTime = n.getDateValue(); },
        "dataSubject": n => { subjectRightsRequest.dataSubject = n.getObjectValue<DataSubject>(createDataSubjectFromDiscriminatorValue); },
        "dataSubjectType": n => { subjectRightsRequest.dataSubjectType = n.getEnumValue<DataSubjectType>(DataSubjectType); },
        "description": n => { subjectRightsRequest.description = n.getStringValue(); },
        "displayName": n => { subjectRightsRequest.displayName = n.getStringValue(); },
        "externalId": n => { subjectRightsRequest.externalId = n.getStringValue(); },
        "history": n => { subjectRightsRequest.history = n.getCollectionOfObjectValues<SubjectRightsRequestHistory>(createSubjectRightsRequestHistoryFromDiscriminatorValue); },
        "includeAllVersions": n => { subjectRightsRequest.includeAllVersions = n.getBooleanValue(); },
        "includeAuthoredContent": n => { subjectRightsRequest.includeAuthoredContent = n.getBooleanValue(); },
        "insight": n => { subjectRightsRequest.insight = n.getObjectValue<SubjectRightsRequestDetail>(createSubjectRightsRequestDetailFromDiscriminatorValue); },
        "internalDueDateTime": n => { subjectRightsRequest.internalDueDateTime = n.getDateValue(); },
        "lastModifiedBy": n => { subjectRightsRequest.lastModifiedBy = n.getObjectValue<IdentitySet>(createIdentitySetFromDiscriminatorValue); },
        "lastModifiedDateTime": n => { subjectRightsRequest.lastModifiedDateTime = n.getDateValue(); },
        "mailboxlocations": n => { subjectRightsRequest.mailboxlocations = n.getObjectValue<SubjectRightsRequestMailboxLocation>(createSubjectRightsRequestMailboxLocationFromDiscriminatorValue); },
        "notes": n => { subjectRightsRequest.notes = n.getCollectionOfObjectValues<AuthoredNote>(createAuthoredNoteFromDiscriminatorValue); },
        "pauseAfterEstimate": n => { subjectRightsRequest.pauseAfterEstimate = n.getBooleanValue(); },
        "regulations": n => { subjectRightsRequest.regulations = n.getCollectionOfPrimitiveValues<string>(); },
        "sitelocations": n => { subjectRightsRequest.sitelocations = n.getObjectValue<SubjectRightsRequestSiteLocation>(createSubjectRightsRequestSiteLocationFromDiscriminatorValue); },
        "stages": n => { subjectRightsRequest.stages = n.getCollectionOfObjectValues<SubjectRightsRequestStageDetail>(createSubjectRightsRequestStageDetailFromDiscriminatorValue); },
        "status": n => { subjectRightsRequest.status = n.getEnumValue<SubjectRightsRequestStatus>(SubjectRightsRequestStatus); },
        "team": n => { subjectRightsRequest.team = n.getObjectValue<Team>(createTeamFromDiscriminatorValue); },
        "type": n => { subjectRightsRequest.type = n.getEnumValue<SubjectRightsRequestType>(SubjectRightsRequestType); },
    }
}
