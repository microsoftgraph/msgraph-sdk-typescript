import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class UserTrainingContentEventInfo implements AdditionalDataHolder, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    private _additionalData: Record<string, unknown>;
    /** Browser of the user from where the training event was generated. */
    private _browser?: string | undefined;
    /** Date and time of the training content playback by the user. */
    private _contentDateTime?: Date | undefined;
    /** IP address of the user for the training event. */
    private _ipAddress?: string | undefined;
    /** The OdataType property */
    private _odataType?: string | undefined;
    /** The operating system, platform, and device details of the user for the training event. */
    private _osPlatformDeviceDetails?: string | undefined;
    /** Potential improvement in the tenant security posture after completion of the training by the user. */
    private _potentialScoreImpact?: number | undefined;
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
     * Gets the browser property value. Browser of the user from where the training event was generated.
     * @returns a string
     */
    public get browser() {
        return this._browser;
    };
    /**
     * Sets the browser property value. Browser of the user from where the training event was generated.
     * @param value Value to set for the browser property.
     */
    public set browser(value: string | undefined) {
        this._browser = value;
    };
    /**
     * Instantiates a new userTrainingContentEventInfo and sets the default values.
     */
    public constructor() {
        this._additionalData = {};
        this.odataType = "#microsoft.graph.userTrainingContentEventInfo";
    };
    /**
     * Gets the contentDateTime property value. Date and time of the training content playback by the user.
     * @returns a Date
     */
    public get contentDateTime() {
        return this._contentDateTime;
    };
    /**
     * Sets the contentDateTime property value. Date and time of the training content playback by the user.
     * @param value Value to set for the contentDateTime property.
     */
    public set contentDateTime(value: Date | undefined) {
        this._contentDateTime = value;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "browser": n => { this.browser = n.getStringValue(); },
            "contentDateTime": n => { this.contentDateTime = n.getDateValue(); },
            "ipAddress": n => { this.ipAddress = n.getStringValue(); },
            "@odata.type": n => { this.odataType = n.getStringValue(); },
            "osPlatformDeviceDetails": n => { this.osPlatformDeviceDetails = n.getStringValue(); },
            "potentialScoreImpact": n => { this.potentialScoreImpact = n.getNumberValue(); },
        };
    };
    /**
     * Gets the ipAddress property value. IP address of the user for the training event.
     * @returns a string
     */
    public get ipAddress() {
        return this._ipAddress;
    };
    /**
     * Sets the ipAddress property value. IP address of the user for the training event.
     * @param value Value to set for the ipAddress property.
     */
    public set ipAddress(value: string | undefined) {
        this._ipAddress = value;
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
     * Gets the osPlatformDeviceDetails property value. The operating system, platform, and device details of the user for the training event.
     * @returns a string
     */
    public get osPlatformDeviceDetails() {
        return this._osPlatformDeviceDetails;
    };
    /**
     * Sets the osPlatformDeviceDetails property value. The operating system, platform, and device details of the user for the training event.
     * @param value Value to set for the osPlatformDeviceDetails property.
     */
    public set osPlatformDeviceDetails(value: string | undefined) {
        this._osPlatformDeviceDetails = value;
    };
    /**
     * Gets the potentialScoreImpact property value. Potential improvement in the tenant security posture after completion of the training by the user.
     * @returns a double
     */
    public get potentialScoreImpact() {
        return this._potentialScoreImpact;
    };
    /**
     * Sets the potentialScoreImpact property value. Potential improvement in the tenant security posture after completion of the training by the user.
     * @param value Value to set for the potentialScoreImpact property.
     */
    public set potentialScoreImpact(value: number | undefined) {
        this._potentialScoreImpact = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        writer.writeStringValue("browser", this.browser);
        writer.writeDateValue("contentDateTime", this.contentDateTime);
        writer.writeStringValue("ipAddress", this.ipAddress);
        writer.writeStringValue("@odata.type", this.odataType);
        writer.writeStringValue("osPlatformDeviceDetails", this.osPlatformDeviceDetails);
        writer.writeNumberValue("potentialScoreImpact", this.potentialScoreImpact);
        writer.writeAdditionalData(this.additionalData);
    };
}
