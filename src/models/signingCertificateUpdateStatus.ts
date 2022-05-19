import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class SigningCertificateUpdateStatus implements AdditionalDataHolder, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    private _additionalData: Record<string, unknown>;
    /** Status of the last certificate update. Read-only. For a list of statuses, see certificateUpdateResult status. */
    private _certificateUpdateResult?: string | undefined;
    /** Date and time in ISO 8601 format and in UTC time when the certificate was last updated. Read-only. */
    private _lastRunDateTime?: Date | undefined;
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
     * Gets the certificateUpdateResult property value. Status of the last certificate update. Read-only. For a list of statuses, see certificateUpdateResult status.
     * @returns a string
     */
    public get certificateUpdateResult() {
        return this._certificateUpdateResult;
    };
    /**
     * Sets the certificateUpdateResult property value. Status of the last certificate update. Read-only. For a list of statuses, see certificateUpdateResult status.
     * @param value Value to set for the certificateUpdateResult property.
     */
    public set certificateUpdateResult(value: string | undefined) {
        this._certificateUpdateResult = value;
    };
    /**
     * Instantiates a new signingCertificateUpdateStatus and sets the default values.
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
            "certificateUpdateResult": n => { this.certificateUpdateResult = n.getStringValue(); },
            "lastRunDateTime": n => { this.lastRunDateTime = n.getDateValue(); },
        };
    };
    /**
     * Gets the lastRunDateTime property value. Date and time in ISO 8601 format and in UTC time when the certificate was last updated. Read-only.
     * @returns a Date
     */
    public get lastRunDateTime() {
        return this._lastRunDateTime;
    };
    /**
     * Sets the lastRunDateTime property value. Date and time in ISO 8601 format and in UTC time when the certificate was last updated. Read-only.
     * @param value Value to set for the lastRunDateTime property.
     */
    public set lastRunDateTime(value: Date | undefined) {
        this._lastRunDateTime = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        writer.writeStringValue("certificateUpdateResult", this.certificateUpdateResult);
        writer.writeDateValue("lastRunDateTime", this.lastRunDateTime);
        writer.writeAdditionalData(this.additionalData);
    };
}
