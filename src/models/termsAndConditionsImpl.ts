import {createTermsAndConditionsAcceptanceStatusFromDiscriminatorValue} from './createTermsAndConditionsAcceptanceStatusFromDiscriminatorValue';
import {createTermsAndConditionsAssignmentFromDiscriminatorValue} from './createTermsAndConditionsAssignmentFromDiscriminatorValue';
import {EntityImpl, TermsAndConditionsAcceptanceStatusImpl, TermsAndConditionsAssignmentImpl} from './index';
import {TermsAndConditions} from './termsAndConditions';
import {TermsAndConditionsAcceptanceStatus} from './termsAndConditionsAcceptanceStatus';
import {TermsAndConditionsAssignment} from './termsAndConditionsAssignment';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** A termsAndConditions entity represents the metadata and contents of a given Terms and Conditions (T&C) policy. T&C policies’ contents are presented to users upon their first attempt to enroll into Intune and subsequently upon edits where an administrator has required re-acceptance. They enable administrators to communicate the provisions to which a user must agree in order to have devices enrolled into Intune. */
export class TermsAndConditionsImpl extends EntityImpl implements TermsAndConditions {
    /** Administrator-supplied explanation of the terms and conditions, typically describing what it means to accept the terms and conditions set out in the T&C policy. This is shown to the user on prompts to accept the T&C policy. */
    private _acceptanceStatement?: string | undefined;
    /** The list of acceptance statuses for this T&C policy. */
    private _acceptanceStatuses?: TermsAndConditionsAcceptanceStatus[] | undefined;
    /** The list of assignments for this T&C policy. */
    private _assignments?: TermsAndConditionsAssignment[] | undefined;
    /** Administrator-supplied body text of the terms and conditions, typically the terms themselves. This is shown to the user on prompts to accept the T&C policy. */
    private _bodyText?: string | undefined;
    /** DateTime the object was created. */
    private _createdDateTime?: Date | undefined;
    /** Administrator-supplied description of the T&C policy. */
    private _description?: string | undefined;
    /** Administrator-supplied name for the T&C policy. */
    private _displayName?: string | undefined;
    /** DateTime the object was last modified. */
    private _lastModifiedDateTime?: Date | undefined;
    /** Administrator-supplied title of the terms and conditions. This is shown to the user on prompts to accept the T&C policy. */
    private _title?: string | undefined;
    /** Integer indicating the current version of the terms. Incremented when an administrator makes a change to the terms and wishes to require users to re-accept the modified T&C policy. */
    private _version?: number | undefined;
    /**
     * Gets the acceptanceStatement property value. Administrator-supplied explanation of the terms and conditions, typically describing what it means to accept the terms and conditions set out in the T&C policy. This is shown to the user on prompts to accept the T&C policy.
     * @returns a string
     */
    public get acceptanceStatement() {
        return this._acceptanceStatement;
    };
    /**
     * Sets the acceptanceStatement property value. Administrator-supplied explanation of the terms and conditions, typically describing what it means to accept the terms and conditions set out in the T&C policy. This is shown to the user on prompts to accept the T&C policy.
     * @param value Value to set for the acceptanceStatement property.
     */
    public set acceptanceStatement(value: string | undefined) {
        if(value) {
            this._acceptanceStatement = value;
        }
    };
    /**
     * Gets the acceptanceStatuses property value. The list of acceptance statuses for this T&C policy.
     * @returns a TermsAndConditionsAcceptanceStatusInterface
     */
    public get acceptanceStatuses() {
        return this._acceptanceStatuses;
    };
    /**
     * Sets the acceptanceStatuses property value. The list of acceptance statuses for this T&C policy.
     * @param value Value to set for the acceptanceStatuses property.
     */
    public set acceptanceStatuses(value: TermsAndConditionsAcceptanceStatus[] | undefined) {
        if(value) {
            const acceptanceStatusesArrValue: TermsAndConditionsAcceptanceStatusImpl[] = [];
            this.acceptanceStatuses?.forEach(element => {
                acceptanceStatusesArrValue.push((element instanceof TermsAndConditionsAcceptanceStatusImpl? element:new TermsAndConditionsAcceptanceStatusImpl(element)));
            });
            this._acceptanceStatuses = acceptanceStatusesArrValue;
        }
    };
    /**
     * Gets the assignments property value. The list of assignments for this T&C policy.
     * @returns a TermsAndConditionsAssignmentInterface
     */
    public get assignments() {
        return this._assignments;
    };
    /**
     * Sets the assignments property value. The list of assignments for this T&C policy.
     * @param value Value to set for the assignments property.
     */
    public set assignments(value: TermsAndConditionsAssignment[] | undefined) {
        if(value) {
            const assignmentsArrValue: TermsAndConditionsAssignmentImpl[] = [];
            this.assignments?.forEach(element => {
                assignmentsArrValue.push((element instanceof TermsAndConditionsAssignmentImpl? element:new TermsAndConditionsAssignmentImpl(element)));
            });
            this._assignments = assignmentsArrValue;
        }
    };
    /**
     * Gets the bodyText property value. Administrator-supplied body text of the terms and conditions, typically the terms themselves. This is shown to the user on prompts to accept the T&C policy.
     * @returns a string
     */
    public get bodyText() {
        return this._bodyText;
    };
    /**
     * Sets the bodyText property value. Administrator-supplied body text of the terms and conditions, typically the terms themselves. This is shown to the user on prompts to accept the T&C policy.
     * @param value Value to set for the bodyText property.
     */
    public set bodyText(value: string | undefined) {
        if(value) {
            this._bodyText = value;
        }
    };
    /**
     * Instantiates a new termsAndConditions and sets the default values.
     * @param termsAndConditionsParameterValue 
     */
    public constructor(termsAndConditionsParameterValue?: TermsAndConditions | undefined) {
        super(termsAndConditionsParameterValue);
        this._acceptanceStatement = termsAndConditionsParameterValue?.acceptanceStatement;
        this._acceptanceStatuses = termsAndConditionsParameterValue?.acceptanceStatuses;
        this._assignments = termsAndConditionsParameterValue?.assignments;
        this._bodyText = termsAndConditionsParameterValue?.bodyText;
        this._createdDateTime = termsAndConditionsParameterValue?.createdDateTime;
        this._description = termsAndConditionsParameterValue?.description;
        this._displayName = termsAndConditionsParameterValue?.displayName;
        this._lastModifiedDateTime = termsAndConditionsParameterValue?.lastModifiedDateTime;
        this._title = termsAndConditionsParameterValue?.title;
        this._version = termsAndConditionsParameterValue?.version;
    };
    /**
     * Gets the createdDateTime property value. DateTime the object was created.
     * @returns a Date
     */
    public get createdDateTime() {
        return this._createdDateTime;
    };
    /**
     * Sets the createdDateTime property value. DateTime the object was created.
     * @param value Value to set for the createdDateTime property.
     */
    public set createdDateTime(value: Date | undefined) {
        if(value) {
            this._createdDateTime = value;
        }
    };
    /**
     * Gets the description property value. Administrator-supplied description of the T&C policy.
     * @returns a string
     */
    public get description() {
        return this._description;
    };
    /**
     * Sets the description property value. Administrator-supplied description of the T&C policy.
     * @param value Value to set for the description property.
     */
    public set description(value: string | undefined) {
        if(value) {
            this._description = value;
        }
    };
    /**
     * Gets the displayName property value. Administrator-supplied name for the T&C policy.
     * @returns a string
     */
    public get displayName() {
        return this._displayName;
    };
    /**
     * Sets the displayName property value. Administrator-supplied name for the T&C policy.
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
            "acceptanceStatement": n => { this.acceptanceStatement = n.getStringValue(); },
            "acceptanceStatuses": n => { this.acceptanceStatuses = n.getCollectionOfObjectValues<TermsAndConditionsAcceptanceStatusImpl>(createTermsAndConditionsAcceptanceStatusFromDiscriminatorValue); },
            "assignments": n => { this.assignments = n.getCollectionOfObjectValues<TermsAndConditionsAssignmentImpl>(createTermsAndConditionsAssignmentFromDiscriminatorValue); },
            "bodyText": n => { this.bodyText = n.getStringValue(); },
            "createdDateTime": n => { this.createdDateTime = n.getDateValue(); },
            "description": n => { this.description = n.getStringValue(); },
            "displayName": n => { this.displayName = n.getStringValue(); },
            "lastModifiedDateTime": n => { this.lastModifiedDateTime = n.getDateValue(); },
            "title": n => { this.title = n.getStringValue(); },
            "version": n => { this.version = n.getNumberValue(); },
        };
    };
    /**
     * Gets the lastModifiedDateTime property value. DateTime the object was last modified.
     * @returns a Date
     */
    public get lastModifiedDateTime() {
        return this._lastModifiedDateTime;
    };
    /**
     * Sets the lastModifiedDateTime property value. DateTime the object was last modified.
     * @param value Value to set for the lastModifiedDateTime property.
     */
    public set lastModifiedDateTime(value: Date | undefined) {
        if(value) {
            this._lastModifiedDateTime = value;
        }
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        if(this.acceptanceStatement){
            writer.writeStringValue("acceptanceStatement", this.acceptanceStatement);
        }
        if(this.acceptanceStatuses && this.acceptanceStatuses.length != 0){        const acceptanceStatusesArrValue: TermsAndConditionsAcceptanceStatusImpl[] = [];
        this.acceptanceStatuses?.forEach(element => {
            acceptanceStatusesArrValue.push((element instanceof TermsAndConditionsAcceptanceStatusImpl? element:new TermsAndConditionsAcceptanceStatusImpl(element)));
        });
            writer.writeCollectionOfObjectValues<TermsAndConditionsAcceptanceStatusImpl>("acceptanceStatuses", acceptanceStatusesArrValue);
        }
        if(this.assignments && this.assignments.length != 0){        const assignmentsArrValue: TermsAndConditionsAssignmentImpl[] = [];
        this.assignments?.forEach(element => {
            assignmentsArrValue.push((element instanceof TermsAndConditionsAssignmentImpl? element:new TermsAndConditionsAssignmentImpl(element)));
        });
            writer.writeCollectionOfObjectValues<TermsAndConditionsAssignmentImpl>("assignments", assignmentsArrValue);
        }
        if(this.bodyText){
            writer.writeStringValue("bodyText", this.bodyText);
        }
        if(this.createdDateTime){
            writer.writeDateValue("createdDateTime", this.createdDateTime);
        }
        if(this.description){
            writer.writeStringValue("description", this.description);
        }
        if(this.displayName){
            writer.writeStringValue("displayName", this.displayName);
        }
        if(this.lastModifiedDateTime){
            writer.writeDateValue("lastModifiedDateTime", this.lastModifiedDateTime);
        }
        if(this.title){
            writer.writeStringValue("title", this.title);
        }
        if(this.version){
            writer.writeNumberValue("version", this.version);
        }
    };
    /**
     * Gets the title property value. Administrator-supplied title of the terms and conditions. This is shown to the user on prompts to accept the T&C policy.
     * @returns a string
     */
    public get title() {
        return this._title;
    };
    /**
     * Sets the title property value. Administrator-supplied title of the terms and conditions. This is shown to the user on prompts to accept the T&C policy.
     * @param value Value to set for the title property.
     */
    public set title(value: string | undefined) {
        if(value) {
            this._title = value;
        }
    };
    /**
     * Gets the version property value. Integer indicating the current version of the terms. Incremented when an administrator makes a change to the terms and wishes to require users to re-accept the modified T&C policy.
     * @returns a integer
     */
    public get version() {
        return this._version;
    };
    /**
     * Sets the version property value. Integer indicating the current version of the terms. Incremented when an administrator makes a change to the terms and wishes to require users to re-accept the modified T&C policy.
     * @param value Value to set for the version property.
     */
    public set version(value: number | undefined) {
        if(value) {
            this._version = value;
        }
    };
}
