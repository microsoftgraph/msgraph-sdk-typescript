import {createEducationOutcomeFromDiscriminatorValue} from './createEducationOutcomeFromDiscriminatorValue';
import {createEducationSubmissionRecipientFromDiscriminatorValue} from './createEducationSubmissionRecipientFromDiscriminatorValue';
import {createEducationSubmissionResourceFromDiscriminatorValue} from './createEducationSubmissionResourceFromDiscriminatorValue';
import {createIdentitySetFromDiscriminatorValue} from './createIdentitySetFromDiscriminatorValue';
import {EducationOutcome} from './educationOutcome';
import {EducationSubmission} from './educationSubmission';
import {EducationSubmissionRecipient} from './educationSubmissionRecipient';
import {EducationSubmissionResource} from './educationSubmissionResource';
import {EducationSubmissionStatus} from './educationSubmissionStatus';
import {IdentitySet} from './identitySet';
import {EducationOutcomeImpl, EducationSubmissionRecipientImpl, EducationSubmissionResourceImpl, EntityImpl, IdentitySetImpl} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** Provides operations to manage the educationRoot singleton. */
export class EducationSubmissionImpl extends EntityImpl implements EducationSubmission {
    /** The outcomes property */
    private _outcomes?: EducationOutcome[] | undefined;
    /** User who moved the status of this submission to reassigned. */
    private _reassignedBy?: IdentitySet | undefined;
    /** Moment in time when the submission was reassigned. The Timestamp type represents date and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z */
    private _reassignedDateTime?: Date | undefined;
    /** Who this submission is assigned to. */
    private _recipient?: EducationSubmissionRecipient | undefined;
    /** The resources property */
    private _resources?: EducationSubmissionResource[] | undefined;
    /** Folder where all file resources for this submission need to be stored. */
    private _resourcesFolderUrl?: string | undefined;
    /** User who moved the status of this submission to returned. */
    private _returnedBy?: IdentitySet | undefined;
    /** Moment in time when the submission was returned. The Timestamp type represents date and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z */
    private _returnedDateTime?: Date | undefined;
    /** Read-only. Possible values are: working, submitted, released, returned, unknownFutureValue and reassigned. Note that you must use the Prefer: include-unknown-enum-members request header to get the following value(s) in this evolvable enum: reassigned. */
    private _status?: EducationSubmissionStatus | undefined;
    /** User who moved the resource into the submitted state. */
    private _submittedBy?: IdentitySet | undefined;
    /** Moment in time when the submission was moved into the submitted state. The Timestamp type represents date and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z */
    private _submittedDateTime?: Date | undefined;
    /** The submittedResources property */
    private _submittedResources?: EducationSubmissionResource[] | undefined;
    /** User who moved the resource from submitted into the working state. */
    private _unsubmittedBy?: IdentitySet | undefined;
    /** Moment in time when the submission was moved from submitted into the working state. The Timestamp type represents date and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z */
    private _unsubmittedDateTime?: Date | undefined;
    /**
     * Instantiates a new educationSubmission and sets the default values.
     * @param educationSubmissionParameterValue 
     */
    public constructor(educationSubmissionParameterValue?: EducationSubmission | undefined) {
        super(educationSubmissionParameterValue);
        this._outcomes = educationSubmissionParameterValue?.outcomes;
        this._reassignedBy = educationSubmissionParameterValue?.reassignedBy;
        this._reassignedDateTime = educationSubmissionParameterValue?.reassignedDateTime;
        this._recipient = educationSubmissionParameterValue?.recipient;
        this._resources = educationSubmissionParameterValue?.resources;
        this._resourcesFolderUrl = educationSubmissionParameterValue?.resourcesFolderUrl;
        this._returnedBy = educationSubmissionParameterValue?.returnedBy;
        this._returnedDateTime = educationSubmissionParameterValue?.returnedDateTime;
        this._status = educationSubmissionParameterValue?.status;
        this._submittedBy = educationSubmissionParameterValue?.submittedBy;
        this._submittedDateTime = educationSubmissionParameterValue?.submittedDateTime;
        this._submittedResources = educationSubmissionParameterValue?.submittedResources;
        this._unsubmittedBy = educationSubmissionParameterValue?.unsubmittedBy;
        this._unsubmittedDateTime = educationSubmissionParameterValue?.unsubmittedDateTime;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {...super.getFieldDeserializers(),
            "outcomes": n => { this.outcomes = n.getCollectionOfObjectValues<EducationOutcomeImpl>(createEducationOutcomeFromDiscriminatorValue); },
            "reassignedBy": n => { this.reassignedBy = n.getObjectValue<IdentitySetImpl>(createIdentitySetFromDiscriminatorValue); },
            "reassignedDateTime": n => { this.reassignedDateTime = n.getDateValue(); },
            "recipient": n => { this.recipient = n.getObjectValue<EducationSubmissionRecipientImpl>(createEducationSubmissionRecipientFromDiscriminatorValue); },
            "resources": n => { this.resources = n.getCollectionOfObjectValues<EducationSubmissionResourceImpl>(createEducationSubmissionResourceFromDiscriminatorValue); },
            "resourcesFolderUrl": n => { this.resourcesFolderUrl = n.getStringValue(); },
            "returnedBy": n => { this.returnedBy = n.getObjectValue<IdentitySetImpl>(createIdentitySetFromDiscriminatorValue); },
            "returnedDateTime": n => { this.returnedDateTime = n.getDateValue(); },
            "status": n => { this.status = n.getEnumValue<EducationSubmissionStatus>(EducationSubmissionStatus); },
            "submittedBy": n => { this.submittedBy = n.getObjectValue<IdentitySetImpl>(createIdentitySetFromDiscriminatorValue); },
            "submittedDateTime": n => { this.submittedDateTime = n.getDateValue(); },
            "submittedResources": n => { this.submittedResources = n.getCollectionOfObjectValues<EducationSubmissionResourceImpl>(createEducationSubmissionResourceFromDiscriminatorValue); },
            "unsubmittedBy": n => { this.unsubmittedBy = n.getObjectValue<IdentitySetImpl>(createIdentitySetFromDiscriminatorValue); },
            "unsubmittedDateTime": n => { this.unsubmittedDateTime = n.getDateValue(); },
        };
    };
    /**
     * Gets the outcomes property value. The outcomes property
     * @returns a EducationOutcomeInterface
     */
    public get outcomes() {
        return this._outcomes;
    };
    /**
     * Sets the outcomes property value. The outcomes property
     * @param value Value to set for the outcomes property.
     */
    public set outcomes(value: EducationOutcome[] | undefined) {
        if(value) {
            const outcomesArrValue: EducationOutcomeImpl[] = [];
            this.outcomes?.forEach(element => {
                outcomesArrValue.push((element instanceof EducationOutcomeImpl? element as EducationOutcomeImpl:new EducationOutcomeImpl(element)));
            });
            this._outcomes = outcomesArrValue;
        }
    };
    /**
     * Gets the reassignedBy property value. User who moved the status of this submission to reassigned.
     * @returns a IdentitySetInterface
     */
    public get reassignedBy() {
        return this._reassignedBy;
    };
    /**
     * Sets the reassignedBy property value. User who moved the status of this submission to reassigned.
     * @param value Value to set for the reassignedBy property.
     */
    public set reassignedBy(value: IdentitySet | undefined) {
        if(value) {
            this._reassignedBy = value instanceof IdentitySetImpl? value as IdentitySetImpl: new IdentitySetImpl(value);
        }
    };
    /**
     * Gets the reassignedDateTime property value. Moment in time when the submission was reassigned. The Timestamp type represents date and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z
     * @returns a Date
     */
    public get reassignedDateTime() {
        return this._reassignedDateTime;
    };
    /**
     * Sets the reassignedDateTime property value. Moment in time when the submission was reassigned. The Timestamp type represents date and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z
     * @param value Value to set for the reassignedDateTime property.
     */
    public set reassignedDateTime(value: Date | undefined) {
        if(value) {
            this._reassignedDateTime = value;
        }
    };
    /**
     * Gets the recipient property value. Who this submission is assigned to.
     * @returns a EducationSubmissionRecipientInterface
     */
    public get recipient() {
        return this._recipient;
    };
    /**
     * Sets the recipient property value. Who this submission is assigned to.
     * @param value Value to set for the recipient property.
     */
    public set recipient(value: EducationSubmissionRecipient | undefined) {
        if(value) {
            this._recipient = value instanceof EducationSubmissionRecipientImpl? value as EducationSubmissionRecipientImpl: new EducationSubmissionRecipientImpl(value);
        }
    };
    /**
     * Gets the resources property value. The resources property
     * @returns a EducationSubmissionResourceInterface
     */
    public get resources() {
        return this._resources;
    };
    /**
     * Sets the resources property value. The resources property
     * @param value Value to set for the resources property.
     */
    public set resources(value: EducationSubmissionResource[] | undefined) {
        if(value) {
            const resourcesArrValue: EducationSubmissionResourceImpl[] = [];
            this.resources?.forEach(element => {
                resourcesArrValue.push((element instanceof EducationSubmissionResourceImpl? element as EducationSubmissionResourceImpl:new EducationSubmissionResourceImpl(element)));
            });
            this._resources = resourcesArrValue;
        }
    };
    /**
     * Gets the resourcesFolderUrl property value. Folder where all file resources for this submission need to be stored.
     * @returns a string
     */
    public get resourcesFolderUrl() {
        return this._resourcesFolderUrl;
    };
    /**
     * Sets the resourcesFolderUrl property value. Folder where all file resources for this submission need to be stored.
     * @param value Value to set for the resourcesFolderUrl property.
     */
    public set resourcesFolderUrl(value: string | undefined) {
        if(value) {
            this._resourcesFolderUrl = value;
        }
    };
    /**
     * Gets the returnedBy property value. User who moved the status of this submission to returned.
     * @returns a IdentitySetInterface
     */
    public get returnedBy() {
        return this._returnedBy;
    };
    /**
     * Sets the returnedBy property value. User who moved the status of this submission to returned.
     * @param value Value to set for the returnedBy property.
     */
    public set returnedBy(value: IdentitySet | undefined) {
        if(value) {
            this._returnedBy = value instanceof IdentitySetImpl? value as IdentitySetImpl: new IdentitySetImpl(value);
        }
    };
    /**
     * Gets the returnedDateTime property value. Moment in time when the submission was returned. The Timestamp type represents date and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z
     * @returns a Date
     */
    public get returnedDateTime() {
        return this._returnedDateTime;
    };
    /**
     * Sets the returnedDateTime property value. Moment in time when the submission was returned. The Timestamp type represents date and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z
     * @param value Value to set for the returnedDateTime property.
     */
    public set returnedDateTime(value: Date | undefined) {
        if(value) {
            this._returnedDateTime = value;
        }
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        if(this.outcomes && this.outcomes.length != 0){        const outcomesArrValue: EducationOutcomeImpl[] = [];
        this.outcomes?.forEach(element => {
            outcomesArrValue.push((element instanceof EducationOutcomeImpl? element as EducationOutcomeImpl:new EducationOutcomeImpl(element)));
        });
            writer.writeCollectionOfObjectValues<EducationOutcomeImpl>("outcomes", outcomesArrValue);
        }
        if(this.reassignedBy){
            writer.writeObjectValue<IdentitySetImpl>("reassignedBy", (this.reassignedBy instanceof IdentitySetImpl? this.reassignedBy as IdentitySetImpl: new IdentitySetImpl(this.reassignedBy)));
        }
        if(this.reassignedDateTime){
            writer.writeDateValue("reassignedDateTime", this.reassignedDateTime);
        }
        if(this.recipient){
            writer.writeObjectValue<EducationSubmissionRecipientImpl>("recipient", (this.recipient instanceof EducationSubmissionRecipientImpl? this.recipient as EducationSubmissionRecipientImpl: new EducationSubmissionRecipientImpl(this.recipient)));
        }
        if(this.resources && this.resources.length != 0){        const resourcesArrValue: EducationSubmissionResourceImpl[] = [];
        this.resources?.forEach(element => {
            resourcesArrValue.push((element instanceof EducationSubmissionResourceImpl? element as EducationSubmissionResourceImpl:new EducationSubmissionResourceImpl(element)));
        });
            writer.writeCollectionOfObjectValues<EducationSubmissionResourceImpl>("resources", resourcesArrValue);
        }
        if(this.resourcesFolderUrl){
            writer.writeStringValue("resourcesFolderUrl", this.resourcesFolderUrl);
        }
        if(this.returnedBy){
            writer.writeObjectValue<IdentitySetImpl>("returnedBy", (this.returnedBy instanceof IdentitySetImpl? this.returnedBy as IdentitySetImpl: new IdentitySetImpl(this.returnedBy)));
        }
        if(this.returnedDateTime){
            writer.writeDateValue("returnedDateTime", this.returnedDateTime);
        }
        if(this.status){
            writer.writeEnumValue<EducationSubmissionStatus>("status", this.status);
        }
        if(this.submittedBy){
            writer.writeObjectValue<IdentitySetImpl>("submittedBy", (this.submittedBy instanceof IdentitySetImpl? this.submittedBy as IdentitySetImpl: new IdentitySetImpl(this.submittedBy)));
        }
        if(this.submittedDateTime){
            writer.writeDateValue("submittedDateTime", this.submittedDateTime);
        }
        if(this.submittedResources && this.submittedResources.length != 0){        const submittedResourcesArrValue: EducationSubmissionResourceImpl[] = [];
        this.submittedResources?.forEach(element => {
            submittedResourcesArrValue.push((element instanceof EducationSubmissionResourceImpl? element as EducationSubmissionResourceImpl:new EducationSubmissionResourceImpl(element)));
        });
            writer.writeCollectionOfObjectValues<EducationSubmissionResourceImpl>("submittedResources", submittedResourcesArrValue);
        }
        if(this.unsubmittedBy){
            writer.writeObjectValue<IdentitySetImpl>("unsubmittedBy", (this.unsubmittedBy instanceof IdentitySetImpl? this.unsubmittedBy as IdentitySetImpl: new IdentitySetImpl(this.unsubmittedBy)));
        }
        if(this.unsubmittedDateTime){
            writer.writeDateValue("unsubmittedDateTime", this.unsubmittedDateTime);
        }
    };
    /**
     * Gets the status property value. Read-only. Possible values are: working, submitted, released, returned, unknownFutureValue and reassigned. Note that you must use the Prefer: include-unknown-enum-members request header to get the following value(s) in this evolvable enum: reassigned.
     * @returns a educationSubmissionStatus
     */
    public get status() {
        return this._status;
    };
    /**
     * Sets the status property value. Read-only. Possible values are: working, submitted, released, returned, unknownFutureValue and reassigned. Note that you must use the Prefer: include-unknown-enum-members request header to get the following value(s) in this evolvable enum: reassigned.
     * @param value Value to set for the status property.
     */
    public set status(value: EducationSubmissionStatus | undefined) {
        if(value) {
            this._status = value;
        }
    };
    /**
     * Gets the submittedBy property value. User who moved the resource into the submitted state.
     * @returns a IdentitySetInterface
     */
    public get submittedBy() {
        return this._submittedBy;
    };
    /**
     * Sets the submittedBy property value. User who moved the resource into the submitted state.
     * @param value Value to set for the submittedBy property.
     */
    public set submittedBy(value: IdentitySet | undefined) {
        if(value) {
            this._submittedBy = value instanceof IdentitySetImpl? value as IdentitySetImpl: new IdentitySetImpl(value);
        }
    };
    /**
     * Gets the submittedDateTime property value. Moment in time when the submission was moved into the submitted state. The Timestamp type represents date and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z
     * @returns a Date
     */
    public get submittedDateTime() {
        return this._submittedDateTime;
    };
    /**
     * Sets the submittedDateTime property value. Moment in time when the submission was moved into the submitted state. The Timestamp type represents date and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z
     * @param value Value to set for the submittedDateTime property.
     */
    public set submittedDateTime(value: Date | undefined) {
        if(value) {
            this._submittedDateTime = value;
        }
    };
    /**
     * Gets the submittedResources property value. The submittedResources property
     * @returns a EducationSubmissionResourceInterface
     */
    public get submittedResources() {
        return this._submittedResources;
    };
    /**
     * Sets the submittedResources property value. The submittedResources property
     * @param value Value to set for the submittedResources property.
     */
    public set submittedResources(value: EducationSubmissionResource[] | undefined) {
        if(value) {
            const submittedResourcesArrValue: EducationSubmissionResourceImpl[] = [];
            this.submittedResources?.forEach(element => {
                submittedResourcesArrValue.push((element instanceof EducationSubmissionResourceImpl? element as EducationSubmissionResourceImpl:new EducationSubmissionResourceImpl(element)));
            });
            this._submittedResources = submittedResourcesArrValue;
        }
    };
    /**
     * Gets the unsubmittedBy property value. User who moved the resource from submitted into the working state.
     * @returns a IdentitySetInterface
     */
    public get unsubmittedBy() {
        return this._unsubmittedBy;
    };
    /**
     * Sets the unsubmittedBy property value. User who moved the resource from submitted into the working state.
     * @param value Value to set for the unsubmittedBy property.
     */
    public set unsubmittedBy(value: IdentitySet | undefined) {
        if(value) {
            this._unsubmittedBy = value instanceof IdentitySetImpl? value as IdentitySetImpl: new IdentitySetImpl(value);
        }
    };
    /**
     * Gets the unsubmittedDateTime property value. Moment in time when the submission was moved from submitted into the working state. The Timestamp type represents date and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z
     * @returns a Date
     */
    public get unsubmittedDateTime() {
        return this._unsubmittedDateTime;
    };
    /**
     * Sets the unsubmittedDateTime property value. Moment in time when the submission was moved from submitted into the working state. The Timestamp type represents date and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z
     * @param value Value to set for the unsubmittedDateTime property.
     */
    public set unsubmittedDateTime(value: Date | undefined) {
        if(value) {
            this._unsubmittedDateTime = value;
        }
    };
}
