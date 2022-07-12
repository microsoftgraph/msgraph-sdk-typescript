import {createAuthoredNoteFromDiscriminatorValue} from './createAuthoredNoteFromDiscriminatorValue';
import {DataSubjectType} from './dataSubjectType';
import {AdminMember1, AuthoredNote, DataSubject, Entity, Identity, IdentitySet, SubjectRightsRequestDetail, SubjectRightsRequestHistory, SubjectRightsRequestStageDetail, Team} from './index';
import {SubjectRightsRequestStatus} from './subjectRightsRequestStatus';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class SubjectRightsRequest extends Entity implements Parsable {
    /** Identity that the request is assigned to. */
    private _assignedTo?: Identity | AdminMember1 | undefined;
    /** The date and time when the request was closed. The Timestamp type represents date and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z. */
    private _closedDateTime?: Date | undefined;
    /** Identity information for the entity that created the request. */
    private _createdBy?: IdentitySet | AdminMember1 | undefined;
    /** The date and time when the request was created. The Timestamp type represents date and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z. */
    private _createdDateTime?: Date | undefined;
    /** Information about the data subject. */
    private _dataSubject?: DataSubject | AdminMember1 | undefined;
    /** The type of the data subject. Possible values are: customer, currentEmployee, formerEmployee, prospectiveEmployee, student, teacher, faculty, other, unknownFutureValue. */
    private _dataSubjectType?: DataSubjectType | AdminMember1 | undefined;
    /** Description for the request. */
    private _description?: string | undefined;
    /** The name of the request. */
    private _displayName?: string | undefined;
    /** Collection of history change events. */
    private _history?: SubjectRightsRequestHistory | AdminMember1[] | undefined;
    /** Insight about the request. */
    private _insight?: SubjectRightsRequestDetail | AdminMember1 | undefined;
    /** The date and time when the request is internally due. The Timestamp type represents date and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z. */
    private _internalDueDateTime?: Date | undefined;
    /** Identity information for the entity that last modified the request. */
    private _lastModifiedBy?: IdentitySet | AdminMember1 | undefined;
    /** The date and time when the request was last modified. The Timestamp type represents date and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z. */
    private _lastModifiedDateTime?: Date | undefined;
    /** List of notes associated with the request. */
    private _notes?: AuthoredNote[] | undefined;
    /** List of regulations that this request will fulfill. */
    private _regulations?: string[] | undefined;
    /** Information about the different stages for the request. */
    private _stages?: SubjectRightsRequestStageDetail | AdminMember1[] | undefined;
    /** The status of the request. Possible values are: active, closed, unknownFutureValue. */
    private _status?: SubjectRightsRequestStatus | AdminMember1 | undefined;
    /** Information about the Microsoft Teams team that was created for the request. */
    private _team?: Team | AdminMember1 | undefined;
    /**
     * Gets the assignedTo property value. Identity that the request is assigned to.
     * @returns a admin
     */
    public get assignedTo() {
        return this._assignedTo;
    };
    /**
     * Sets the assignedTo property value. Identity that the request is assigned to.
     * @param value Value to set for the assignedTo property.
     */
    public set assignedTo(value: Identity | AdminMember1 | undefined) {
        this._assignedTo = value;
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
        this._closedDateTime = value;
    };
    /**
     * Instantiates a new SubjectRightsRequest and sets the default values.
     */
    public constructor() {
        super();
    };
    /**
     * Gets the createdBy property value. Identity information for the entity that created the request.
     * @returns a admin
     */
    public get createdBy() {
        return this._createdBy;
    };
    /**
     * Sets the createdBy property value. Identity information for the entity that created the request.
     * @param value Value to set for the createdBy property.
     */
    public set createdBy(value: IdentitySet | AdminMember1 | undefined) {
        this._createdBy = value;
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
        this._createdDateTime = value;
    };
    /**
     * Gets the dataSubject property value. Information about the data subject.
     * @returns a admin
     */
    public get dataSubject() {
        return this._dataSubject;
    };
    /**
     * Sets the dataSubject property value. Information about the data subject.
     * @param value Value to set for the dataSubject property.
     */
    public set dataSubject(value: DataSubject | AdminMember1 | undefined) {
        this._dataSubject = value;
    };
    /**
     * Gets the dataSubjectType property value. The type of the data subject. Possible values are: customer, currentEmployee, formerEmployee, prospectiveEmployee, student, teacher, faculty, other, unknownFutureValue.
     * @returns a admin
     */
    public get dataSubjectType() {
        return this._dataSubjectType;
    };
    /**
     * Sets the dataSubjectType property value. The type of the data subject. Possible values are: customer, currentEmployee, formerEmployee, prospectiveEmployee, student, teacher, faculty, other, unknownFutureValue.
     * @param value Value to set for the dataSubjectType property.
     */
    public set dataSubjectType(value: DataSubjectType | AdminMember1 | undefined) {
        this._dataSubjectType = value;
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
        this._description = value;
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
        this._displayName = value;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {...super.getFieldDeserializers(),
            "assignedTo": n => { this.assignedTo = n.getObjectValue<Identity>(createIdentityFromDiscriminatorValue); },
            "closedDateTime": n => { this.closedDateTime = n.getDateValue(); },
            "createdBy": n => { this.createdBy = n.getObjectValue<IdentitySet>(createIdentitySetFromDiscriminatorValue); },
            "createdDateTime": n => { this.createdDateTime = n.getDateValue(); },
            "dataSubject": n => { this.dataSubject = n.getObjectValue<DataSubject>(createDataSubjectFromDiscriminatorValue); },
            "dataSubjectType": n => { this.dataSubjectType = n.getObjectValue<DataSubjectType>(createDataSubjectTypeFromDiscriminatorValue); },
            "description": n => { this.description = n.getStringValue(); },
            "displayName": n => { this.displayName = n.getStringValue(); },
            "history": n => { this.history = n.getObjectValue<SubjectRightsRequestHistory>(createSubjectRightsRequestHistoryFromDiscriminatorValue); },
            "insight": n => { this.insight = n.getObjectValue<SubjectRightsRequestDetail>(createSubjectRightsRequestDetailFromDiscriminatorValue); },
            "internalDueDateTime": n => { this.internalDueDateTime = n.getDateValue(); },
            "lastModifiedBy": n => { this.lastModifiedBy = n.getObjectValue<IdentitySet>(createIdentitySetFromDiscriminatorValue); },
            "lastModifiedDateTime": n => { this.lastModifiedDateTime = n.getDateValue(); },
            "notes": n => { this.notes = n.getCollectionOfObjectValues<AuthoredNote>(createAuthoredNoteFromDiscriminatorValue); },
            "regulations": n => { this.regulations = n.getCollectionOfPrimitiveValues<string>(); },
            "stages": n => { this.stages = n.getObjectValue<SubjectRightsRequestStageDetail>(createSubjectRightsRequestStageDetailFromDiscriminatorValue); },
            "status": n => { this.status = n.getObjectValue<SubjectRightsRequestStatus>(createSubjectRightsRequestStatusFromDiscriminatorValue); },
            "team": n => { this.team = n.getObjectValue<Team>(createTeamFromDiscriminatorValue); },
        };
    };
    /**
     * Gets the history property value. Collection of history change events.
     * @returns a admin
     */
    public get history() {
        return this._history;
    };
    /**
     * Sets the history property value. Collection of history change events.
     * @param value Value to set for the history property.
     */
    public set history(value: SubjectRightsRequestHistory | AdminMember1[] | undefined) {
        this._history = value;
    };
    /**
     * Gets the insight property value. Insight about the request.
     * @returns a admin
     */
    public get insight() {
        return this._insight;
    };
    /**
     * Sets the insight property value. Insight about the request.
     * @param value Value to set for the insight property.
     */
    public set insight(value: SubjectRightsRequestDetail | AdminMember1 | undefined) {
        this._insight = value;
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
        this._internalDueDateTime = value;
    };
    /**
     * Gets the lastModifiedBy property value. Identity information for the entity that last modified the request.
     * @returns a admin
     */
    public get lastModifiedBy() {
        return this._lastModifiedBy;
    };
    /**
     * Sets the lastModifiedBy property value. Identity information for the entity that last modified the request.
     * @param value Value to set for the lastModifiedBy property.
     */
    public set lastModifiedBy(value: IdentitySet | AdminMember1 | undefined) {
        this._lastModifiedBy = value;
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
        this._lastModifiedDateTime = value;
    };
    /**
     * Gets the notes property value. List of notes associated with the request.
     * @returns a authoredNote
     */
    public get notes() {
        return this._notes;
    };
    /**
     * Sets the notes property value. List of notes associated with the request.
     * @param value Value to set for the notes property.
     */
    public set notes(value: AuthoredNote[] | undefined) {
        this._notes = value;
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
        this._regulations = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        writer.writeObjectValue<Identity>("assignedTo", this.assignedTo);
        writer.writeDateValue("closedDateTime", this.closedDateTime);
        writer.writeObjectValue<IdentitySet>("createdBy", this.createdBy);
        writer.writeDateValue("createdDateTime", this.createdDateTime);
        writer.writeObjectValue<DataSubject>("dataSubject", this.dataSubject);
        writer.writeObjectValue<DataSubjectType>("dataSubjectType", this.dataSubjectType);
        writer.writeStringValue("description", this.description);
        writer.writeStringValue("displayName", this.displayName);
        writer.writeObjectValue<SubjectRightsRequestHistory>("history", this.history);
        writer.writeObjectValue<SubjectRightsRequestDetail>("insight", this.insight);
        writer.writeDateValue("internalDueDateTime", this.internalDueDateTime);
        writer.writeObjectValue<IdentitySet>("lastModifiedBy", this.lastModifiedBy);
        writer.writeDateValue("lastModifiedDateTime", this.lastModifiedDateTime);
        writer.writeCollectionOfObjectValues<AuthoredNote>("notes", this.notes);
        writer.writeCollectionOfPrimitiveValues<string>("regulations", this.regulations);
        writer.writeObjectValue<SubjectRightsRequestStageDetail>("stages", this.stages);
        writer.writeObjectValue<SubjectRightsRequestStatus>("status", this.status);
        writer.writeObjectValue<Team>("team", this.team);
    };
    /**
     * Gets the stages property value. Information about the different stages for the request.
     * @returns a admin
     */
    public get stages() {
        return this._stages;
    };
    /**
     * Sets the stages property value. Information about the different stages for the request.
     * @param value Value to set for the stages property.
     */
    public set stages(value: SubjectRightsRequestStageDetail | AdminMember1[] | undefined) {
        this._stages = value;
    };
    /**
     * Gets the status property value. The status of the request. Possible values are: active, closed, unknownFutureValue.
     * @returns a admin
     */
    public get status() {
        return this._status;
    };
    /**
     * Sets the status property value. The status of the request. Possible values are: active, closed, unknownFutureValue.
     * @param value Value to set for the status property.
     */
    public set status(value: SubjectRightsRequestStatus | AdminMember1 | undefined) {
        this._status = value;
    };
    /**
     * Gets the team property value. Information about the Microsoft Teams team that was created for the request.
     * @returns a admin
     */
    public get team() {
        return this._team;
    };
    /**
     * Sets the team property value. Information about the Microsoft Teams team that was created for the request.
     * @param value Value to set for the team property.
     */
    public set team(value: Team | AdminMember1 | undefined) {
        this._team = value;
    };
}
