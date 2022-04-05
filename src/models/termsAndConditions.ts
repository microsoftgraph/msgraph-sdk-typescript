import {createTermsAndConditionsAcceptanceStatusFromDiscriminatorValue} from './createTermsAndConditionsAcceptanceStatusFromDiscriminatorValue';
import {createTermsAndConditionsAssignmentFromDiscriminatorValue} from './createTermsAndConditionsAssignmentFromDiscriminatorValue';
import {Entity, TermsAndConditionsAcceptanceStatus, TermsAndConditionsAssignment} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class TermsAndConditions extends Entity implements Parsable {
    /** Administrator-supplied explanation of the terms and conditions, typically describing what it means to accept the terms and conditions set out in the T&C policy. This is shown to the user on prompts to accept the T&C policy.  */
    private _acceptanceStatement?: string | undefined;
    /** The list of acceptance statuses for this T&C policy.  */
    private _acceptanceStatuses?: TermsAndConditionsAcceptanceStatus[] | undefined;
    /** The list of assignments for this T&C policy.  */
    private _assignments?: TermsAndConditionsAssignment[] | undefined;
    /** Administrator-supplied body text of the terms and conditions, typically the terms themselves. This is shown to the user on prompts to accept the T&C policy.  */
    private _bodyText?: string | undefined;
    /** DateTime the object was created.  */
    private _createdDateTime?: Date | undefined;
    /** Administrator-supplied description of the T&C policy.  */
    private _description?: string | undefined;
    /** Administrator-supplied name for the T&C policy.  */
    private _displayName?: string | undefined;
    /** DateTime the object was last modified.  */
    private _lastModifiedDateTime?: Date | undefined;
    /** Administrator-supplied title of the terms and conditions. This is shown to the user on prompts to accept the T&C policy.  */
    private _title?: string | undefined;
    /** Integer indicating the current version of the terms. Incremented when an administrator makes a change to the terms and wishes to require users to re-accept the modified T&C policy.  */
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
        this._acceptanceStatement = value;
    };
    /**
     * Gets the acceptanceStatuses property value. The list of acceptance statuses for this T&C policy.
     * @returns a termsAndConditionsAcceptanceStatus
     */
    public get acceptanceStatuses() {
        return this._acceptanceStatuses;
    };
    /**
     * Sets the acceptanceStatuses property value. The list of acceptance statuses for this T&C policy.
     * @param value Value to set for the acceptanceStatuses property.
     */
    public set acceptanceStatuses(value: TermsAndConditionsAcceptanceStatus[] | undefined) {
        this._acceptanceStatuses = value;
    };
    /**
     * Gets the assignments property value. The list of assignments for this T&C policy.
     * @returns a termsAndConditionsAssignment
     */
    public get assignments() {
        return this._assignments;
    };
    /**
     * Sets the assignments property value. The list of assignments for this T&C policy.
     * @param value Value to set for the assignments property.
     */
    public set assignments(value: TermsAndConditionsAssignment[] | undefined) {
        this._assignments = value;
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
        this._bodyText = value;
    };
    /**
     * Instantiates a new termsAndConditions and sets the default values.
     */
    public constructor() {
        super();
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
        this._createdDateTime = value;
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
        this._description = value;
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
        this._displayName = value;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (item: T, node: ParseNode) => void>
     */
    public getFieldDeserializers<T>() : Record<string, (item: T, node: ParseNode) => void> {
        return {...super.getFieldDeserializers<T>(),
            "acceptanceStatement": (o, n) => { (o as unknown as TermsAndConditions).acceptanceStatement = n.getStringValue(); },
            "acceptanceStatuses": (o, n) => { (o as unknown as TermsAndConditions).acceptanceStatuses = n.getCollectionOfObjectValues<TermsAndConditionsAcceptanceStatus>(createTermsAndConditionsAcceptanceStatusFromDiscriminatorValue); },
            "assignments": (o, n) => { (o as unknown as TermsAndConditions).assignments = n.getCollectionOfObjectValues<TermsAndConditionsAssignment>(createTermsAndConditionsAssignmentFromDiscriminatorValue); },
            "bodyText": (o, n) => { (o as unknown as TermsAndConditions).bodyText = n.getStringValue(); },
            "createdDateTime": (o, n) => { (o as unknown as TermsAndConditions).createdDateTime = n.getDateValue(); },
            "description": (o, n) => { (o as unknown as TermsAndConditions).description = n.getStringValue(); },
            "displayName": (o, n) => { (o as unknown as TermsAndConditions).displayName = n.getStringValue(); },
            "lastModifiedDateTime": (o, n) => { (o as unknown as TermsAndConditions).lastModifiedDateTime = n.getDateValue(); },
            "title": (o, n) => { (o as unknown as TermsAndConditions).title = n.getStringValue(); },
            "version": (o, n) => { (o as unknown as TermsAndConditions).version = n.getNumberValue(); },
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
        this._lastModifiedDateTime = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        writer.writeStringValue("acceptanceStatement", this.acceptanceStatement);
        writer.writeCollectionOfObjectValues<TermsAndConditionsAcceptanceStatus>("acceptanceStatuses", this.acceptanceStatuses);
        writer.writeCollectionOfObjectValues<TermsAndConditionsAssignment>("assignments", this.assignments);
        writer.writeStringValue("bodyText", this.bodyText);
        writer.writeDateValue("createdDateTime", this.createdDateTime);
        writer.writeStringValue("description", this.description);
        writer.writeStringValue("displayName", this.displayName);
        writer.writeDateValue("lastModifiedDateTime", this.lastModifiedDateTime);
        writer.writeStringValue("title", this.title);
        writer.writeNumberValue("version", this.version);
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
        this._title = value;
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
        this._version = value;
    };
}
