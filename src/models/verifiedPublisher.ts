import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class VerifiedPublisher implements AdditionalDataHolder, Parsable {
    /** The timestamp when the verified publisher was first added or most recently updated. */
    private _addedDateTime?: Date | undefined;
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    private _additionalData: Record<string, unknown>;
    /** The verified publisher name from the app publisher's Microsoft Partner Network (MPN) account. */
    private _displayName?: string | undefined;
    /** The ID of the verified publisher from the app publisher's Partner Center account. */
    private _verifiedPublisherId?: string | undefined;
    /**
     * Gets the addedDateTime property value. The timestamp when the verified publisher was first added or most recently updated.
     * @returns a Date
     */
    public get addedDateTime() {
        return this._addedDateTime;
    };
    /**
     * Sets the addedDateTime property value. The timestamp when the verified publisher was first added or most recently updated.
     * @param value Value to set for the addedDateTime property.
     */
    public set addedDateTime(value: Date | undefined) {
        this._addedDateTime = value;
    };
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
     * Instantiates a new verifiedPublisher and sets the default values.
     */
    public constructor() {
        this._additionalData = {};
    };
    /**
     * Gets the displayName property value. The verified publisher name from the app publisher's Microsoft Partner Network (MPN) account.
     * @returns a string
     */
    public get displayName() {
        return this._displayName;
    };
    /**
     * Sets the displayName property value. The verified publisher name from the app publisher's Microsoft Partner Network (MPN) account.
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
        return {
            "addedDateTime": n => { this.addedDateTime = n.getDateValue(); },
            "displayName": n => { this.displayName = n.getStringValue(); },
            "verifiedPublisherId": n => { this.verifiedPublisherId = n.getStringValue(); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        writer.writeDateValue("addedDateTime", this.addedDateTime);
        writer.writeStringValue("displayName", this.displayName);
        writer.writeStringValue("verifiedPublisherId", this.verifiedPublisherId);
        writer.writeAdditionalData(this.additionalData);
    };
    /**
     * Gets the verifiedPublisherId property value. The ID of the verified publisher from the app publisher's Partner Center account.
     * @returns a string
     */
    public get verifiedPublisherId() {
        return this._verifiedPublisherId;
    };
    /**
     * Sets the verifiedPublisherId property value. The ID of the verified publisher from the app publisher's Partner Center account.
     * @param value Value to set for the verifiedPublisherId property.
     */
    public set verifiedPublisherId(value: string | undefined) {
        this._verifiedPublisherId = value;
    };
}
