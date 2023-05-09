import {AuthoredNote} from './authoredNote';
import {createAuthoredNoteFromDiscriminatorValue} from './createAuthoredNoteFromDiscriminatorValue';
import {createDataSubjectFromDiscriminatorValue} from './createDataSubjectFromDiscriminatorValue';
import {createIdentityFromDiscriminatorValue} from './createIdentityFromDiscriminatorValue';
import {createIdentitySetFromDiscriminatorValue} from './createIdentitySetFromDiscriminatorValue';
import {createSubjectRightsRequestDetailFromDiscriminatorValue} from './createSubjectRightsRequestDetailFromDiscriminatorValue';
import {createSubjectRightsRequestHistoryFromDiscriminatorValue} from './createSubjectRightsRequestHistoryFromDiscriminatorValue';
import {createSubjectRightsRequestStageDetailFromDiscriminatorValue} from './createSubjectRightsRequestStageDetailFromDiscriminatorValue';
import {createTeamFromDiscriminatorValue} from './createTeamFromDiscriminatorValue';
import {DataSubject} from './dataSubject';
import {DataSubjectType} from './dataSubjectType';
import {deserializeIntoEntity} from './deserializeIntoEntity';
import {Identity} from './identity';
import {IdentitySet} from './identitySet';
import {serializeAuthoredNote} from './serializeAuthoredNote';
import {serializeDataSubject} from './serializeDataSubject';
import {serializeIdentity} from './serializeIdentity';
import {serializeIdentitySet} from './serializeIdentitySet';
import {serializeSubjectRightsRequestDetail} from './serializeSubjectRightsRequestDetail';
import {serializeSubjectRightsRequestHistory} from './serializeSubjectRightsRequestHistory';
import {serializeSubjectRightsRequestStageDetail} from './serializeSubjectRightsRequestStageDetail';
import {serializeTeam} from './serializeTeam';
import {SubjectRightsRequest} from './subjectRightsRequest';
import {SubjectRightsRequestDetail} from './subjectRightsRequestDetail';
import {SubjectRightsRequestHistory} from './subjectRightsRequestHistory';
import {SubjectRightsRequestStageDetail} from './subjectRightsRequestStageDetail';
import {SubjectRightsRequestStatus} from './subjectRightsRequestStatus';
import {SubjectRightsRequestType} from './subjectRightsRequestType';
import {Team} from './team';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoSubjectRightsRequest(subjectRightsRequest: SubjectRightsRequest | undefined = {} as SubjectRightsRequest) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEntity(subjectRightsRequest),
        "assignedTo": n => { subjectRightsRequest.assignedTo = n.getObjectValue<Identity>(createIdentityFromDiscriminatorValue); },
        "closedDateTime": n => { subjectRightsRequest.closedDateTime = n.getDateValue(); },
        "createdBy": n => { subjectRightsRequest.createdBy = n.getObjectValue<IdentitySet>(createIdentitySetFromDiscriminatorValue); },
        "createdDateTime": n => { subjectRightsRequest.createdDateTime = n.getDateValue(); },
        "dataSubject": n => { subjectRightsRequest.dataSubject = n.getObjectValue<DataSubject>(createDataSubjectFromDiscriminatorValue); },
        "dataSubjectType": n => { subjectRightsRequest.dataSubjectType = n.getEnumValue<DataSubjectType>(DataSubjectType); },
        "description": n => { subjectRightsRequest.description = n.getStringValue(); },
        "displayName": n => { subjectRightsRequest.displayName = n.getStringValue(); },
        "history": n => { subjectRightsRequest.history = n.getCollectionOfObjectValues<SubjectRightsRequestHistory>(createSubjectRightsRequestHistoryFromDiscriminatorValue); },
        "insight": n => { subjectRightsRequest.insight = n.getObjectValue<SubjectRightsRequestDetail>(createSubjectRightsRequestDetailFromDiscriminatorValue); },
        "internalDueDateTime": n => { subjectRightsRequest.internalDueDateTime = n.getDateValue(); },
        "lastModifiedBy": n => { subjectRightsRequest.lastModifiedBy = n.getObjectValue<IdentitySet>(createIdentitySetFromDiscriminatorValue); },
        "lastModifiedDateTime": n => { subjectRightsRequest.lastModifiedDateTime = n.getDateValue(); },
        "notes": n => { subjectRightsRequest.notes = n.getCollectionOfObjectValues<AuthoredNote>(createAuthoredNoteFromDiscriminatorValue); },
        "regulations": n => { subjectRightsRequest.regulations = n.getCollectionOfPrimitiveValues<string>(); },
        "stages": n => { subjectRightsRequest.stages = n.getCollectionOfObjectValues<SubjectRightsRequestStageDetail>(createSubjectRightsRequestStageDetailFromDiscriminatorValue); },
        "status": n => { subjectRightsRequest.status = n.getEnumValue<SubjectRightsRequestStatus>(SubjectRightsRequestStatus); },
        "team": n => { subjectRightsRequest.team = n.getObjectValue<Team>(createTeamFromDiscriminatorValue); },
        "type": n => { subjectRightsRequest.type = n.getEnumValue<SubjectRightsRequestType>(SubjectRightsRequestType); },
    }
}
