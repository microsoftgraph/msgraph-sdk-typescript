import {createSubjectSetFromDiscriminatorValue} from './createSubjectSetFromDiscriminatorValue';
import {SubjectSet} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class AccessPackageAssignmentRequestorSettings implements AdditionalDataHolder, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    private _additionalData: Record<string, unknown>;
    /** If false, the requestor is not permitted to include a schedule in their request. */
    private _allowCustomAssignmentSchedule?: boolean | undefined;
    /** If true, allows on-behalf-of requestors to create a request to add access for another principal. */
    private _enableOnBehalfRequestorsToAddAccess?: boolean | undefined;
    /** If true, allows on-behalf-of requestors to create a request to remove access for another principal. */
    private _enableOnBehalfRequestorsToRemoveAccess?: boolean | undefined;
    /** If true, allows on-behalf-of requestors to create a request to update access for another principal. */
    private _enableOnBehalfRequestorsToUpdateAccess?: boolean | undefined;
    /** If true, allows requestors to create a request to add access for themselves. */
    private _enableTargetsToSelfAddAccess?: boolean | undefined;
    /** If true, allows requestors to create a request to remove their access. */
    private _enableTargetsToSelfRemoveAccess?: boolean | undefined;
    /** If true, allows requestors to create a request to update their access. */
    private _enableTargetsToSelfUpdateAccess?: boolean | undefined;
    /** The OdataType property */
    private _odataType?: string | undefined;
    /** The principals who can request on-behalf-of others. */
    private _onBehalfRequestors?: SubjectSet[] | undefined;
    /**
     * Gets the additionalData property value. Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     * @returns a Record<string, unknown>
     */
    public get additionalData() {
        return this._additionalData;
    };
    /**
     * Sets the additionalData property value. Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     * @param value Value to set for the AdditionalData property.
     */
    public set additionalData(value: Record<string, unknown>) {
        this._additionalData = value;
    };
    /**
     * Gets the allowCustomAssignmentSchedule property value. If false, the requestor is not permitted to include a schedule in their request.
     * @returns a boolean
     */
    public get allowCustomAssignmentSchedule() {
        return this._allowCustomAssignmentSchedule;
    };
    /**
     * Sets the allowCustomAssignmentSchedule property value. If false, the requestor is not permitted to include a schedule in their request.
     * @param value Value to set for the allowCustomAssignmentSchedule property.
     */
    public set allowCustomAssignmentSchedule(value: boolean | undefined) {
        this._allowCustomAssignmentSchedule = value;
    };
    /**
     * Instantiates a new accessPackageAssignmentRequestorSettings and sets the default values.
     */
    public constructor() {
        this._additionalData = {};
    };
    /**
     * Gets the enableOnBehalfRequestorsToAddAccess property value. If true, allows on-behalf-of requestors to create a request to add access for another principal.
     * @returns a boolean
     */
    public get enableOnBehalfRequestorsToAddAccess() {
        return this._enableOnBehalfRequestorsToAddAccess;
    };
    /**
     * Sets the enableOnBehalfRequestorsToAddAccess property value. If true, allows on-behalf-of requestors to create a request to add access for another principal.
     * @param value Value to set for the enableOnBehalfRequestorsToAddAccess property.
     */
    public set enableOnBehalfRequestorsToAddAccess(value: boolean | undefined) {
        this._enableOnBehalfRequestorsToAddAccess = value;
    };
    /**
     * Gets the enableOnBehalfRequestorsToRemoveAccess property value. If true, allows on-behalf-of requestors to create a request to remove access for another principal.
     * @returns a boolean
     */
    public get enableOnBehalfRequestorsToRemoveAccess() {
        return this._enableOnBehalfRequestorsToRemoveAccess;
    };
    /**
     * Sets the enableOnBehalfRequestorsToRemoveAccess property value. If true, allows on-behalf-of requestors to create a request to remove access for another principal.
     * @param value Value to set for the enableOnBehalfRequestorsToRemoveAccess property.
     */
    public set enableOnBehalfRequestorsToRemoveAccess(value: boolean | undefined) {
        this._enableOnBehalfRequestorsToRemoveAccess = value;
    };
    /**
     * Gets the enableOnBehalfRequestorsToUpdateAccess property value. If true, allows on-behalf-of requestors to create a request to update access for another principal.
     * @returns a boolean
     */
    public get enableOnBehalfRequestorsToUpdateAccess() {
        return this._enableOnBehalfRequestorsToUpdateAccess;
    };
    /**
     * Sets the enableOnBehalfRequestorsToUpdateAccess property value. If true, allows on-behalf-of requestors to create a request to update access for another principal.
     * @param value Value to set for the enableOnBehalfRequestorsToUpdateAccess property.
     */
    public set enableOnBehalfRequestorsToUpdateAccess(value: boolean | undefined) {
        this._enableOnBehalfRequestorsToUpdateAccess = value;
    };
    /**
     * Gets the enableTargetsToSelfAddAccess property value. If true, allows requestors to create a request to add access for themselves.
     * @returns a boolean
     */
    public get enableTargetsToSelfAddAccess() {
        return this._enableTargetsToSelfAddAccess;
    };
    /**
     * Sets the enableTargetsToSelfAddAccess property value. If true, allows requestors to create a request to add access for themselves.
     * @param value Value to set for the enableTargetsToSelfAddAccess property.
     */
    public set enableTargetsToSelfAddAccess(value: boolean | undefined) {
        this._enableTargetsToSelfAddAccess = value;
    };
    /**
     * Gets the enableTargetsToSelfRemoveAccess property value. If true, allows requestors to create a request to remove their access.
     * @returns a boolean
     */
    public get enableTargetsToSelfRemoveAccess() {
        return this._enableTargetsToSelfRemoveAccess;
    };
    /**
     * Sets the enableTargetsToSelfRemoveAccess property value. If true, allows requestors to create a request to remove their access.
     * @param value Value to set for the enableTargetsToSelfRemoveAccess property.
     */
    public set enableTargetsToSelfRemoveAccess(value: boolean | undefined) {
        this._enableTargetsToSelfRemoveAccess = value;
    };
    /**
     * Gets the enableTargetsToSelfUpdateAccess property value. If true, allows requestors to create a request to update their access.
     * @returns a boolean
     */
    public get enableTargetsToSelfUpdateAccess() {
        return this._enableTargetsToSelfUpdateAccess;
    };
    /**
     * Sets the enableTargetsToSelfUpdateAccess property value. If true, allows requestors to create a request to update their access.
     * @param value Value to set for the enableTargetsToSelfUpdateAccess property.
     */
    public set enableTargetsToSelfUpdateAccess(value: boolean | undefined) {
        this._enableTargetsToSelfUpdateAccess = value;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "allowCustomAssignmentSchedule": n => { this.allowCustomAssignmentSchedule = n.getBooleanValue(); },
            "enableOnBehalfRequestorsToAddAccess": n => { this.enableOnBehalfRequestorsToAddAccess = n.getBooleanValue(); },
            "enableOnBehalfRequestorsToRemoveAccess": n => { this.enableOnBehalfRequestorsToRemoveAccess = n.getBooleanValue(); },
            "enableOnBehalfRequestorsToUpdateAccess": n => { this.enableOnBehalfRequestorsToUpdateAccess = n.getBooleanValue(); },
            "enableTargetsToSelfAddAccess": n => { this.enableTargetsToSelfAddAccess = n.getBooleanValue(); },
            "enableTargetsToSelfRemoveAccess": n => { this.enableTargetsToSelfRemoveAccess = n.getBooleanValue(); },
            "enableTargetsToSelfUpdateAccess": n => { this.enableTargetsToSelfUpdateAccess = n.getBooleanValue(); },
            "@odata.type": n => { this.odataType = n.getStringValue(); },
            "onBehalfRequestors": n => { this.onBehalfRequestors = n.getCollectionOfObjectValues<SubjectSet>(createSubjectSetFromDiscriminatorValue); },
        };
    };
    /**
     * Gets the @odata.type property value. The OdataType property
     * @returns a string
     */
    public get odataType() {
        return this._odataType;
    };
    /**
     * Sets the @odata.type property value. The OdataType property
     * @param value Value to set for the OdataType property.
     */
    public set odataType(value: string | undefined) {
        this._odataType = value;
    };
    /**
     * Gets the onBehalfRequestors property value. The principals who can request on-behalf-of others.
     * @returns a subjectSet
     */
    public get onBehalfRequestors() {
        return this._onBehalfRequestors;
    };
    /**
     * Sets the onBehalfRequestors property value. The principals who can request on-behalf-of others.
     * @param value Value to set for the onBehalfRequestors property.
     */
    public set onBehalfRequestors(value: SubjectSet[] | undefined) {
        this._onBehalfRequestors = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        writer.writeBooleanValue("allowCustomAssignmentSchedule", this.allowCustomAssignmentSchedule);
        writer.writeBooleanValue("enableOnBehalfRequestorsToAddAccess", this.enableOnBehalfRequestorsToAddAccess);
        writer.writeBooleanValue("enableOnBehalfRequestorsToRemoveAccess", this.enableOnBehalfRequestorsToRemoveAccess);
        writer.writeBooleanValue("enableOnBehalfRequestorsToUpdateAccess", this.enableOnBehalfRequestorsToUpdateAccess);
        writer.writeBooleanValue("enableTargetsToSelfAddAccess", this.enableTargetsToSelfAddAccess);
        writer.writeBooleanValue("enableTargetsToSelfRemoveAccess", this.enableTargetsToSelfRemoveAccess);
        writer.writeBooleanValue("enableTargetsToSelfUpdateAccess", this.enableTargetsToSelfUpdateAccess);
        writer.writeStringValue("@odata.type", this.odataType);
        writer.writeCollectionOfObjectValues<SubjectSet>("onBehalfRequestors", this.onBehalfRequestors);
        writer.writeAdditionalData(this.additionalData);
    };
}
