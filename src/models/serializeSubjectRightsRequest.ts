import {AuthoredNote} from './authoredNote';
import {DataSubject} from './dataSubject';
import {DataSubjectType} from './dataSubjectType';
import {Identity} from './identity';
import {IdentitySet} from './identitySet';
import {serializeAuthoredNote} from './serializeAuthoredNote';
import {serializeDataSubject} from './serializeDataSubject';
import {serializeEntity} from './serializeEntity';
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

export function serializeSubjectRightsRequest(writer: SerializationWriter, subjectRightsRequest: SubjectRightsRequest | undefined = {} as SubjectRightsRequest) : void {
        serializeEntity(writer, subjectRightsRequest)
        writer.writeObjectValue<Identity>("assignedTo", subjectRightsRequest.assignedTo, serializeIdentity);
        writer.writeDateValue("closedDateTime", subjectRightsRequest.closedDateTime);
        writer.writeObjectValue<IdentitySet>("createdBy", subjectRightsRequest.createdBy, serializeIdentitySet);
        writer.writeDateValue("createdDateTime", subjectRightsRequest.createdDateTime);
        writer.writeObjectValue<DataSubject>("dataSubject", subjectRightsRequest.dataSubject, serializeDataSubject);
        writer.writeEnumValue<DataSubjectType>("dataSubjectType", subjectRightsRequest.dataSubjectType);
        writer.writeStringValue("description", subjectRightsRequest.description);
        writer.writeStringValue("displayName", subjectRightsRequest.displayName);
        writer.writeCollectionOfObjectValues<SubjectRightsRequestHistory>("history", subjectRightsRequest.history, serializeSubjectRightsRequestHistory);
        writer.writeObjectValue<SubjectRightsRequestDetail>("insight", subjectRightsRequest.insight, serializeSubjectRightsRequestDetail);
        writer.writeDateValue("internalDueDateTime", subjectRightsRequest.internalDueDateTime);
        writer.writeObjectValue<IdentitySet>("lastModifiedBy", subjectRightsRequest.lastModifiedBy, serializeIdentitySet);
        writer.writeDateValue("lastModifiedDateTime", subjectRightsRequest.lastModifiedDateTime);
        writer.writeCollectionOfObjectValues<AuthoredNote>("notes", subjectRightsRequest.notes, serializeAuthoredNote);
        writer.writeCollectionOfPrimitiveValues<string>("regulations", subjectRightsRequest.regulations);
        writer.writeCollectionOfObjectValues<SubjectRightsRequestStageDetail>("stages", subjectRightsRequest.stages, serializeSubjectRightsRequestStageDetail);
        writer.writeEnumValue<SubjectRightsRequestStatus>("status", subjectRightsRequest.status);
        writer.writeObjectValue<Team>("team", subjectRightsRequest.team, serializeTeam);
        writer.writeEnumValue<SubjectRightsRequestType>("type", subjectRightsRequest.type);
}
