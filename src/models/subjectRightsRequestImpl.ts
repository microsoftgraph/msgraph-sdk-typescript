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
export class SubjectRightsRequestImpl extends EntityImpl implements SubjectRightsRequest {
    /** Identity that the request is assigned to. */
    private _assignedTo?: Identity | undefined;
    /** The date and time when the request was closed. The Timestamp type represents date and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z. */
    private _closedDateTime?: Date | undefined;
    /** Identity information for the entity that created the request. */
    private _createdBy?: IdentitySet | undefined;
    /** The date and time when the request was created. The Timestamp type represents date and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z. */
    private _createdDateTime?: Date | undefined;
    /** Information about the data subject. */
    private _dataSubject?: DataSubject | undefined;
    /** The type of the data subject. Possible values are: customer, currentEmployee, formerEmployee, prospectiveEmployee, student, teacher, faculty, other, unknownFutureValue. */
    private _dataSubjectType?: DataSubjectType | undefined;
    /** Description for the request. */
    private _description?: string | undefined;
    /** The name of the request. */
    private _displayName?: string | undefined;
    /** Collection of history change events. */
    private _history?: SubjectRightsRequestHistory[] | undefined;
    /** Insight about the request. */
    private _insight?: SubjectRightsRequestDetail | undefined;
    /** The date and time when the request is internally due. The Timestamp type represents date and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z. */
    private _internalDueDateTime?: Date | undefined;
    /** Identity information for the entity that last modified the request. */
    private _lastModifiedBy?: IdentitySet | undefined;
    /** The date and time when the request was last modified. The Timestamp type represents date and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z. */
    private _lastModifiedDateTime?: Date | undefined;
    /** List of notes associated with the request. */
    private _notes?: AuthoredNote[] | undefined;
    /** List of regulations that this request will fulfill. */
    private _regulations?: string[] | undefined;
    /** Information about the different stages for the request. */
    private _stages?: SubjectRightsRequestStageDetail[] | undefined;
    /** The status of the request. Possible values are: active, closed, unknownFutureValue. */
    private _status?: SubjectRightsRequestStatus | undefined;
    /** Information about the Microsoft Teams team that was created for the request. */
    private _team?: Team | undefined;
    /** The type of the request. Possible values are: export, delete, access, tagForAction, unknownFutureValue. */
    private _type?: SubjectRightsRequestType | undefined;
    /**
     * Gets the assignedTo property value. Identity that the request is assigned to.
     * @returns a IdentityInterface
     */
    public get assignedTo() {
        return this._assignedTo;
    };
    /**
     * Sets the assignedTo property value. Identity that the request is assigned to.
     * @param value Value to set for the assignedTo property.
     */
    public set assignedTo(value: Identity | undefined) {
        if(value) {
            this._assignedTo = value instanceof IdentityImpl? value : new IdentityImpl(value);
        }
    };
    /**
     * Gets the closedDateTime property value. The date and time when the request was closed. The Timestamp type represents date and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z.
     * @returns a Date
     */
    public get closedDateTime() {
        return this._closedDateTime;
    };
    /**
     * Sets the closedDateTime property value. The date and time when the request was closed. The Timestamp type represents date and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z.
     * @param value Value to set for the closedDateTime property.
     */
    public set closedDateTime(value: Date | undefined) {
        if(value) {
            this._closedDateTime = value;
        }
    };
    /**
     * Instantiates a new subjectRightsRequest and sets the default values.
     * @param subjectRightsRequestParameterValue 
     */
    public constructor(subjectRightsRequestParameterValue?: SubjectRightsRequest | undefined) {
        super(subjectRightsRequestParameterValue);
        this._assignedTo = subjectRightsRequestParameterValue?.assignedTo;
        this._closedDateTime = subjectRightsRequestParameterValue?.closedDateTime;
        this._createdBy = subjectRightsRequestParameterValue?.createdBy;
        this._createdDateTime = subjectRightsRequestParameterValue?.createdDateTime;
        this._dataSubject = subjectRightsRequestParameterValue?.dataSubject;
        this._dataSubjectType = subjectRightsRequestParameterValue?.dataSubjectType;
        this._description = subjectRightsRequestParameterValue?.description;
        this._displayName = subjectRightsRequestParameterValue?.displayName;
        this._history = subjectRightsRequestParameterValue?.history;
        this._insight = subjectRightsRequestParameterValue?.insight;
        this._internalDueDateTime = subjectRightsRequestParameterValue?.internalDueDateTime;
        this._lastModifiedBy = subjectRightsRequestParameterValue?.lastModifiedBy;
        this._lastModifiedDateTime = subjectRightsRequestParameterValue?.lastModifiedDateTime;
        this._notes = subjectRightsRequestParameterValue?.notes;
        this._regulations = subjectRightsRequestParameterValue?.regulations;
        this._stages = subjectRightsRequestParameterValue?.stages;
        this._status = subjectRightsRequestParameterValue?.status;
        this._team = subjectRightsRequestParameterValue?.team;
        this._type = subjectRightsRequestParameterValue?.type;
    };
    /**
     * Gets the createdBy property value. Identity information for the entity that created the request.
     * @returns a IdentitySetInterface
     */
    public get createdBy() {
        return this._createdBy;
    };
    /**
     * Sets the createdBy property value. Identity information for the entity that created the request.
     * @param value Value to set for the createdBy property.
     */
    public set createdBy(value: IdentitySet | undefined) {
        if(value) {
            this._createdBy = value instanceof IdentitySetImpl? value : new IdentitySetImpl(value);
        }
    };
    /**
     * Gets the createdDateTime property value. The date and time when the request was created. The Timestamp type represents date and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z.
     * @returns a Date
     */
    public get createdDateTime() {
        return this._createdDateTime;
    };
    /**
     * Sets the createdDateTime property value. The date and time when the request was created. The Timestamp type represents date and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z.
     * @param value Value to set for the createdDateTime property.
     */
    public set createdDateTime(value: Date | undefined) {
        if(value) {
            this._createdDateTime = value;
        }
    };
    /**
     * Gets the dataSubject property value. Information about the data subject.
     * @returns a DataSubjectInterface
     */
    public get dataSubject() {
        return this._dataSubject;
    };
    /**
     * Sets the dataSubject property value. Information about the data subject.
     * @param value Value to set for the dataSubject property.
     */
    public set dataSubject(value: DataSubject | undefined) {
        if(value) {
            this._dataSubject = value instanceof DataSubjectImpl? value : new DataSubjectImpl(value);
        }
    };
    /**
     * Gets the dataSubjectType property value. The type of the data subject. Possible values are: customer, currentEmployee, formerEmployee, prospectiveEmployee, student, teacher, faculty, other, unknownFutureValue.
     * @returns a dataSubjectType
     */
    public get dataSubjectType() {
        return this._dataSubjectType;
    };
    /**
     * Sets the dataSubjectType property value. The type of the data subject. Possible values are: customer, currentEmployee, formerEmployee, prospectiveEmployee, student, teacher, faculty, other, unknownFutureValue.
     * @param value Value to set for the dataSubjectType property.
     */
    public set dataSubjectType(value: DataSubjectType | undefined) {
        if(value) {
            this._dataSubjectType = value;
        }
    };
    /**
     * Gets the description property value. Description for the request.
     * @returns a string
     */
    public get description() {
        return this._description;
    };
    /**
     * Sets the description property value. Description for the request.
     * @param value Value to set for the description property.
     */
    public set description(value: string | undefined) {
        if(value) {
            this._description = value;
        }
    };
    /**
     * Gets the displayName property value. The name of the request.
     * @returns a string
     */
    public get displayName() {
        return this._displayName;
    };
    /**
     * Sets the displayName property value. The name of the request.
     * @param value Value to set for the displayName property.
     */
    public set displayName(value: string | undefined) {
        if(value) {
            this._displayName = value;
        }
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
     * Gets the history property value. Collection of history change events.
     * @returns a SubjectRightsRequestHistoryInterface
     */
    public get history() {
        return this._history;
    };
    /**
     * Sets the history property value. Collection of history change events.
     * @param value Value to set for the history property.
     */
    public set history(value: SubjectRightsRequestHistory[] | undefined) {
        if(value) {
            const historyArrValue: SubjectRightsRequestHistoryImpl[] = [];
            this.history?.forEach(element => {
                historyArrValue.push((element instanceof SubjectRightsRequestHistoryImpl? element:new SubjectRightsRequestHistoryImpl(element)));
            });
            this._history = historyArrValue;
        }
    };
    /**
     * Gets the insight property value. Insight about the request.
     * @returns a SubjectRightsRequestDetailInterface
     */
    public get insight() {
        return this._insight;
    };
    /**
     * Sets the insight property value. Insight about the request.
     * @param value Value to set for the insight property.
     */
    public set insight(value: SubjectRightsRequestDetail | undefined) {
        if(value) {
            this._insight = value instanceof SubjectRightsRequestDetailImpl? value : new SubjectRightsRequestDetailImpl(value);
        }
    };
    /**
     * Gets the internalDueDateTime property value. The date and time when the request is internally due. The Timestamp type represents date and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z.
     * @returns a Date
     */
    public get internalDueDateTime() {
        return this._internalDueDateTime;
    };
    /**
     * Sets the internalDueDateTime property value. The date and time when the request is internally due. The Timestamp type represents date and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z.
     * @param value Value to set for the internalDueDateTime property.
     */
    public set internalDueDateTime(value: Date | undefined) {
        if(value) {
            this._internalDueDateTime = value;
        }
    };
    /**
     * Gets the lastModifiedBy property value. Identity information for the entity that last modified the request.
     * @returns a IdentitySetInterface
     */
    public get lastModifiedBy() {
        return this._lastModifiedBy;
    };
    /**
     * Sets the lastModifiedBy property value. Identity information for the entity that last modified the request.
     * @param value Value to set for the lastModifiedBy property.
     */
    public set lastModifiedBy(value: IdentitySet | undefined) {
        if(value) {
            this._lastModifiedBy = value instanceof IdentitySetImpl? value : new IdentitySetImpl(value);
        }
    };
    /**
     * Gets the lastModifiedDateTime property value. The date and time when the request was last modified. The Timestamp type represents date and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z.
     * @returns a Date
     */
    public get lastModifiedDateTime() {
        return this._lastModifiedDateTime;
    };
    /**
     * Sets the lastModifiedDateTime property value. The date and time when the request was last modified. The Timestamp type represents date and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z.
     * @param value Value to set for the lastModifiedDateTime property.
     */
    public set lastModifiedDateTime(value: Date | undefined) {
        if(value) {
            this._lastModifiedDateTime = value;
        }
    };
    /**
     * Gets the notes property value. List of notes associated with the request.
     * @returns a AuthoredNoteInterface
     */
    public get notes() {
        return this._notes;
    };
    /**
     * Sets the notes property value. List of notes associated with the request.
     * @param value Value to set for the notes property.
     */
    public set notes(value: AuthoredNote[] | undefined) {
        if(value) {
            const notesArrValue: AuthoredNoteImpl[] = [];
            this.notes?.forEach(element => {
                notesArrValue.push((element instanceof AuthoredNoteImpl? element:new AuthoredNoteImpl(element)));
            });
            this._notes = notesArrValue;
        }
    };
    /**
     * Gets the regulations property value. List of regulations that this request will fulfill.
     * @returns a string
     */
    public get regulations() {
        return this._regulations;
    };
    /**
     * Sets the regulations property value. List of regulations that this request will fulfill.
     * @param value Value to set for the regulations property.
     */
    public set regulations(value: string[] | undefined) {
        if(value) {
            this._regulations = value;
        }
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        if(this.assignedTo){
            writer.writeObjectValue<IdentityImpl>("assignedTo", (!this.assignedTo || this.assignedTo instanceof IdentityImpl? this.assignedTo : new IdentityImpl(this.assignedTo)));
        }
        if(this.closedDateTime){
            writer.writeDateValue("closedDateTime", this.closedDateTime);
        }
        if(this.createdBy){
            writer.writeObjectValue<IdentitySetImpl>("createdBy", (!this.createdBy || this.createdBy instanceof IdentitySetImpl? this.createdBy : new IdentitySetImpl(this.createdBy)));
        }
        if(this.createdDateTime){
            writer.writeDateValue("createdDateTime", this.createdDateTime);
        }
        if(this.dataSubject){
            writer.writeObjectValue<DataSubjectImpl>("dataSubject", (!this.dataSubject || this.dataSubject instanceof DataSubjectImpl? this.dataSubject : new DataSubjectImpl(this.dataSubject)));
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
        if(this.history && this.history.length != 0){        const historyArrValue: SubjectRightsRequestHistoryImpl[] = [];
        this.history?.forEach(element => {
            historyArrValue.push((element instanceof SubjectRightsRequestHistoryImpl? element:new SubjectRightsRequestHistoryImpl(element)));
        });
            writer.writeCollectionOfObjectValues<SubjectRightsRequestHistoryImpl>("history", historyArrValue);
        }
        if(this.insight){
            writer.writeObjectValue<SubjectRightsRequestDetailImpl>("insight", (!this.insight || this.insight instanceof SubjectRightsRequestDetailImpl? this.insight : new SubjectRightsRequestDetailImpl(this.insight)));
        }
        if(this.internalDueDateTime){
            writer.writeDateValue("internalDueDateTime", this.internalDueDateTime);
        }
        if(this.lastModifiedBy){
            writer.writeObjectValue<IdentitySetImpl>("lastModifiedBy", (!this.lastModifiedBy || this.lastModifiedBy instanceof IdentitySetImpl? this.lastModifiedBy : new IdentitySetImpl(this.lastModifiedBy)));
        }
        if(this.lastModifiedDateTime){
            writer.writeDateValue("lastModifiedDateTime", this.lastModifiedDateTime);
        }
        if(this.notes && this.notes.length != 0){        const notesArrValue: AuthoredNoteImpl[] = [];
        this.notes?.forEach(element => {
            notesArrValue.push((element instanceof AuthoredNoteImpl? element:new AuthoredNoteImpl(element)));
        });
            writer.writeCollectionOfObjectValues<AuthoredNoteImpl>("notes", notesArrValue);
        }
        if(this.regulations){
            writer.writeCollectionOfPrimitiveValues<string>("regulations", this.regulations);
        }
        if(this.stages && this.stages.length != 0){        const stagesArrValue: SubjectRightsRequestStageDetailImpl[] = [];
        this.stages?.forEach(element => {
            stagesArrValue.push((element instanceof SubjectRightsRequestStageDetailImpl? element:new SubjectRightsRequestStageDetailImpl(element)));
        });
            writer.writeCollectionOfObjectValues<SubjectRightsRequestStageDetailImpl>("stages", stagesArrValue);
        }
        if(this.status){
            writer.writeEnumValue<SubjectRightsRequestStatus>("status", this.status);
        }
        if(this.team){
            writer.writeObjectValue<TeamImpl>("team", (!this.team || this.team instanceof TeamImpl? this.team : new TeamImpl(this.team)));
        }
        if(this.type){
            writer.writeEnumValue<SubjectRightsRequestType>("type", this.type);
        }
    };
    /**
     * Gets the stages property value. Information about the different stages for the request.
     * @returns a SubjectRightsRequestStageDetailInterface
     */
    public get stages() {
        return this._stages;
    };
    /**
     * Sets the stages property value. Information about the different stages for the request.
     * @param value Value to set for the stages property.
     */
    public set stages(value: SubjectRightsRequestStageDetail[] | undefined) {
        if(value) {
            const stagesArrValue: SubjectRightsRequestStageDetailImpl[] = [];
            this.stages?.forEach(element => {
                stagesArrValue.push((element instanceof SubjectRightsRequestStageDetailImpl? element:new SubjectRightsRequestStageDetailImpl(element)));
            });
            this._stages = stagesArrValue;
        }
    };
    /**
     * Gets the status property value. The status of the request. Possible values are: active, closed, unknownFutureValue.
     * @returns a subjectRightsRequestStatus
     */
    public get status() {
        return this._status;
    };
    /**
     * Sets the status property value. The status of the request. Possible values are: active, closed, unknownFutureValue.
     * @param value Value to set for the status property.
     */
    public set status(value: SubjectRightsRequestStatus | undefined) {
        if(value) {
            this._status = value;
        }
    };
    /**
     * Gets the team property value. Information about the Microsoft Teams team that was created for the request.
     * @returns a TeamInterface
     */
    public get team() {
        return this._team;
    };
    /**
     * Sets the team property value. Information about the Microsoft Teams team that was created for the request.
     * @param value Value to set for the team property.
     */
    public set team(value: Team | undefined) {
        if(value) {
            this._team = value instanceof TeamImpl? value : new TeamImpl(value);
        }
    };
    /**
     * Gets the type property value. The type of the request. Possible values are: export, delete, access, tagForAction, unknownFutureValue.
     * @returns a subjectRightsRequestType
     */
    public get type() {
        return this._type;
    };
    /**
     * Sets the type property value. The type of the request. Possible values are: export, delete, access, tagForAction, unknownFutureValue.
     * @param value Value to set for the type property.
     */
    public set type(value: SubjectRightsRequestType | undefined) {
        if(value) {
            this._type = value;
        }
    };
}
