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
import {Identity} from './identity';
import {IdentitySet} from './identitySet';
import {AuthoredNoteImpl, DataSubjectImpl, EntityImpl, IdentityImpl, IdentitySetImpl, SubjectRightsRequestDetailImpl, SubjectRightsRequestHistoryImpl, SubjectRightsRequestStageDetailImpl, TeamImpl} from './index';
import {SubjectRightsRequest} from './subjectRightsRequest';
import {SubjectRightsRequestDetail} from './subjectRightsRequestDetail';
import {SubjectRightsRequestHistory} from './subjectRightsRequestHistory';
import {SubjectRightsRequestStageDetail} from './subjectRightsRequestStageDetail';
import {SubjectRightsRequestStatus} from './subjectRightsRequestStatus';
import {SubjectRightsRequestType} from './subjectRightsRequestType';
import {Team} from './team';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** Provides operations to manage the privacy singleton. */
export class SubjectRightsRequestImpl extends EntityImpl implements Parsable, SubjectRightsRequest {
    /** Identity that the request is assigned to. */
    public assignedTo?: Identity | undefined;
    /** The date and time when the request was closed. The Timestamp type represents date and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z. */
    public closedDateTime?: Date | undefined;
    /** Identity information for the entity that created the request. */
    public createdBy?: IdentitySet | undefined;
    /** The date and time when the request was created. The Timestamp type represents date and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z. */
    public createdDateTime?: Date | undefined;
    /** Information about the data subject. */
    public dataSubject?: DataSubject | undefined;
    /** The type of the data subject. Possible values are: customer, currentEmployee, formerEmployee, prospectiveEmployee, student, teacher, faculty, other, unknownFutureValue. */
    public dataSubjectType?: DataSubjectType | undefined;
    /** Description for the request. */
    public description?: string | undefined;
    /** The name of the request. */
    public displayName?: string | undefined;
    /** Collection of history change events. */
    public history?: SubjectRightsRequestHistory[] | undefined;
    /** Insight about the request. */
    public insight?: SubjectRightsRequestDetail | undefined;
    /** The date and time when the request is internally due. The Timestamp type represents date and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z. */
    public internalDueDateTime?: Date | undefined;
    /** Identity information for the entity that last modified the request. */
    public lastModifiedBy?: IdentitySet | undefined;
    /** The date and time when the request was last modified. The Timestamp type represents date and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z. */
    public lastModifiedDateTime?: Date | undefined;
    /** List of notes associated with the request. */
    public notes?: AuthoredNote[] | undefined;
    /** List of regulations that this request will fulfill. */
    public regulations?: string[] | undefined;
    /** Information about the different stages for the request. */
    public stages?: SubjectRightsRequestStageDetail[] | undefined;
    /** The status of the request. Possible values are: active, closed, unknownFutureValue. */
    public status?: SubjectRightsRequestStatus | undefined;
    /** Information about the Microsoft Teams team that was created for the request. */
    public team?: Team | undefined;
    /** The type of the request. Possible values are: export, delete, access, tagForAction, unknownFutureValue. */
    public type?: SubjectRightsRequestType | undefined;
    /**
     * Instantiates a new subjectRightsRequest and sets the default values.
     * @param subjectRightsRequestParameterValue 
     */
    public constructor(subjectRightsRequestParameterValue?: SubjectRightsRequest | undefined) {
        super();
        this.assignedTo = subjectRightsRequestParameterValue?.assignedTo ;
        this.closedDateTime = subjectRightsRequestParameterValue?.closedDateTime ;
        this.createdBy = subjectRightsRequestParameterValue?.createdBy ;
        this.createdDateTime = subjectRightsRequestParameterValue?.createdDateTime ;
        this.dataSubject = subjectRightsRequestParameterValue?.dataSubject ;
        this.dataSubjectType = subjectRightsRequestParameterValue?.dataSubjectType ;
        this.description = subjectRightsRequestParameterValue?.description ;
        this.displayName = subjectRightsRequestParameterValue?.displayName ;
        this.history = subjectRightsRequestParameterValue?.history ;
        this.insight = subjectRightsRequestParameterValue?.insight ;
        this.internalDueDateTime = subjectRightsRequestParameterValue?.internalDueDateTime ;
        this.lastModifiedBy = subjectRightsRequestParameterValue?.lastModifiedBy ;
        this.lastModifiedDateTime = subjectRightsRequestParameterValue?.lastModifiedDateTime ;
        this.notes = subjectRightsRequestParameterValue?.notes ;
        this.regulations = subjectRightsRequestParameterValue?.regulations ;
        this.stages = subjectRightsRequestParameterValue?.stages ;
        this.status = subjectRightsRequestParameterValue?.status ;
        this.team = subjectRightsRequestParameterValue?.team ;
        this.type = subjectRightsRequestParameterValue?.type ;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {...super.getFieldDeserializers(),
            "assignedTo": n => { this.assignedTo = n.getObjectValue<IdentityImpl>(createIdentityFromDiscriminatorValue); },
            "closedDateTime": n => { this.closedDateTime = n.getDateValue(); },
            "createdBy": n => { this.createdBy = n.getObjectValue<IdentitySetImpl>(createIdentitySetFromDiscriminatorValue); },
            "createdDateTime": n => { this.createdDateTime = n.getDateValue(); },
            "dataSubject": n => { this.dataSubject = n.getObjectValue<DataSubjectImpl>(createDataSubjectFromDiscriminatorValue); },
            "dataSubjectType": n => { this.dataSubjectType = n.getEnumValue<DataSubjectType>(DataSubjectType); },
            "description": n => { this.description = n.getStringValue(); },
            "displayName": n => { this.displayName = n.getStringValue(); },
            "history": n => { this.history = n.getCollectionOfObjectValues<SubjectRightsRequestHistoryImpl>(createSubjectRightsRequestHistoryFromDiscriminatorValue); },
            "insight": n => { this.insight = n.getObjectValue<SubjectRightsRequestDetailImpl>(createSubjectRightsRequestDetailFromDiscriminatorValue); },
            "internalDueDateTime": n => { this.internalDueDateTime = n.getDateValue(); },
            "lastModifiedBy": n => { this.lastModifiedBy = n.getObjectValue<IdentitySetImpl>(createIdentitySetFromDiscriminatorValue); },
            "lastModifiedDateTime": n => { this.lastModifiedDateTime = n.getDateValue(); },
            "notes": n => { this.notes = n.getCollectionOfObjectValues<AuthoredNoteImpl>(createAuthoredNoteFromDiscriminatorValue); },
            "regulations": n => { this.regulations = n.getCollectionOfPrimitiveValues<string>(); },
            "stages": n => { this.stages = n.getCollectionOfObjectValues<SubjectRightsRequestStageDetailImpl>(createSubjectRightsRequestStageDetailFromDiscriminatorValue); },
            "status": n => { this.status = n.getEnumValue<SubjectRightsRequestStatus>(SubjectRightsRequestStatus); },
            "team": n => { this.team = n.getObjectValue<TeamImpl>(createTeamFromDiscriminatorValue); },
            "type": n => { this.type = n.getEnumValue<SubjectRightsRequestType>(SubjectRightsRequestType); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        if(this.assignedTo){
        writer.writeObjectValue<IdentityImpl>("assignedTo", new IdentityImpl(this.assignedTo));
        }
        if(this.closedDateTime){
        writer.writeDateValue("closedDateTime", this.closedDateTime);
        }
        if(this.createdBy){
        writer.writeObjectValue<IdentitySetImpl>("createdBy", new IdentitySetImpl(this.createdBy));
        }
        if(this.createdDateTime){
        writer.writeDateValue("createdDateTime", this.createdDateTime);
        }
        if(this.dataSubject){
        writer.writeObjectValue<DataSubjectImpl>("dataSubject", new DataSubjectImpl(this.dataSubject));
        }
        if(this.dataSubjectType){
        writer.writeEnumValue<DataSubjectType>("dataSubjectType", this.dataSubjectType);
        }
        if(this.description){
        writer.writeStringValue("description", this.description);
        }
        if(this.displayName){
        writer.writeStringValue("displayName", this.displayName);
        }
        if(this.history && this.history.length != 0){        const historyArrValue: SubjectRightsRequestHistoryImpl[] = []; this.history?.forEach(element => {historyArrValue.push(new SubjectRightsRequestHistoryImpl(element));});
        writer.writeCollectionOfObjectValues<SubjectRightsRequestHistoryImpl>("history", historyArrValue);
        }
        if(this.insight){
        writer.writeObjectValue<SubjectRightsRequestDetailImpl>("insight", new SubjectRightsRequestDetailImpl(this.insight));
        }
        if(this.internalDueDateTime){
        writer.writeDateValue("internalDueDateTime", this.internalDueDateTime);
        }
        if(this.lastModifiedBy){
        writer.writeObjectValue<IdentitySetImpl>("lastModifiedBy", new IdentitySetImpl(this.lastModifiedBy));
        }
        if(this.lastModifiedDateTime){
        writer.writeDateValue("lastModifiedDateTime", this.lastModifiedDateTime);
        }
        if(this.notes && this.notes.length != 0){        const notesArrValue: AuthoredNoteImpl[] = []; this.notes?.forEach(element => {notesArrValue.push(new AuthoredNoteImpl(element));});
        writer.writeCollectionOfObjectValues<AuthoredNoteImpl>("notes", notesArrValue);
        }
        if(this.regulations){
        writer.writeCollectionOfPrimitiveValues<string>("regulations", this.regulations);
        }
        if(this.stages && this.stages.length != 0){        const stagesArrValue: SubjectRightsRequestStageDetailImpl[] = []; this.stages?.forEach(element => {stagesArrValue.push(new SubjectRightsRequestStageDetailImpl(element));});
        writer.writeCollectionOfObjectValues<SubjectRightsRequestStageDetailImpl>("stages", stagesArrValue);
        }
        if(this.status){
        writer.writeEnumValue<SubjectRightsRequestStatus>("status", this.status);
        }
        if(this.team){
        writer.writeObjectValue<TeamImpl>("team", new TeamImpl(this.team));
        }
        if(this.type){
        writer.writeEnumValue<SubjectRightsRequestType>("type", this.type);
        }
    };
}
