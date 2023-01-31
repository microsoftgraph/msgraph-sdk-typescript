import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class SecureScoreControlStateUpdate implements AdditionalDataHolder, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    private _additionalData: Record<string, unknown>;
    /** Assigns the control to the user who will take the action. */
    private _assignedTo?: string | undefined;
    /** Provides optional comment about the control. */
    private _comment?: string | undefined;
    private _odataType?: string | undefined;
    /** State of the control, which can be modified via a PATCH command (for example, ignored, thirdParty). */
    private _state?: string | undefined;
    /** ID of the user who updated tenant state. */
    private _updatedBy?: string | undefined;
    /** Time at which the control state was updated. */
    private _updatedDateTime?: Date | undefined;
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
     * Gets the assignedTo property value. Assigns the control to the user who will take the action.
     * @returns a string
     */
    public get assignedTo() {
        return this._assignedTo;
    };
    /**
     * Sets the assignedTo property value. Assigns the control to the user who will take the action.
     * @param value Value to set for the assignedTo property.
     */
    public set assignedTo(value: string | undefined) {
        this._assignedTo = value;
    };
    /**
     * Gets the comment property value. Provides optional comment about the control.
     * @returns a string
     */
    public get comment() {
        return this._comment;
    };
    /**
     * Sets the comment property value. Provides optional comment about the control.
     * @param value Value to set for the comment property.
     */
    public set comment(value: string | undefined) {
        this._comment = value;
    };
    /**
     * Instantiates a new secureScoreControlStateUpdate and sets the default values.
     */
    public constructor() {
        this._additionalData = {};
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "assignedTo": n => { this.assignedTo = n.getStringValue(); },
            "comment": n => { this.comment = n.getStringValue(); },
            "@odata.type": n => { this.odataType = n.getStringValue(); },
            "state": n => { this.state = n.getStringValue(); },
            "updatedBy": n => { this.updatedBy = n.getStringValue(); },
            "updatedDateTime": n => { this.updatedDateTime = n.getDateValue(); },
        };
    };
    /**
     * Gets the @odata.type property value. 
     * @returns a string
     */
    public get odataType() {
        return this._odataType;
    };
    /**
     * Sets the @odata.type property value. 
     * @param value Value to set for the OdataType property.
     */
    public set odataType(value: string | undefined) {
        this._odataType = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        writer.writeStringValue("assignedTo", this.assignedTo);
        writer.writeStringValue("comment", this.comment);
        writer.writeStringValue("@odata.type", this.odataType);
        writer.writeStringValue("state", this.state);
        writer.writeStringValue("updatedBy", this.updatedBy);
        writer.writeDateValue("updatedDateTime", this.updatedDateTime);
        writer.writeAdditionalData(this.additionalData);
    };
    /**
     * Gets the state property value. State of the control, which can be modified via a PATCH command (for example, ignored, thirdParty).
     * @returns a string
     */
    public get state() {
        return this._state;
    };
    /**
     * Sets the state property value. State of the control, which can be modified via a PATCH command (for example, ignored, thirdParty).
     * @param value Value to set for the state property.
     */
    public set state(value: string | undefined) {
        this._state = value;
    };
    /**
     * Gets the updatedBy property value. ID of the user who updated tenant state.
     * @returns a string
     */
    public get updatedBy() {
        return this._updatedBy;
    };
    /**
     * Sets the updatedBy property value. ID of the user who updated tenant state.
     * @param value Value to set for the updatedBy property.
     */
    public set updatedBy(value: string | undefined) {
        this._updatedBy = value;
    };
    /**
     * Gets the updatedDateTime property value. Time at which the control state was updated.
     * @returns a Date
     */
    public get updatedDateTime() {
        return this._updatedDateTime;
    };
    /**
     * Sets the updatedDateTime property value. Time at which the control state was updated.
     * @param value Value to set for the updatedDateTime property.
     */
    public set updatedDateTime(value: Date | undefined) {
        this._updatedDateTime = value;
    };
}
