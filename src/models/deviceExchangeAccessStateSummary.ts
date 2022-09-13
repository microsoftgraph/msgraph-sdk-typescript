import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** Device Exchange Access State summary */
export class DeviceExchangeAccessStateSummary implements AdditionalDataHolder, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    private _additionalData: Record<string, unknown>;
    /** Total count of devices with Exchange Access State: Allowed. */
    private _allowedDeviceCount?: number | undefined;
    /** Total count of devices with Exchange Access State: Blocked. */
    private _blockedDeviceCount?: number | undefined;
    /** The OdataType property */
    private _odataType?: string | undefined;
    /** Total count of devices with Exchange Access State: Quarantined. */
    private _quarantinedDeviceCount?: number | undefined;
    /** Total count of devices for which no Exchange Access State could be found. */
    private _unavailableDeviceCount?: number | undefined;
    /** Total count of devices with Exchange Access State: Unknown. */
    private _unknownDeviceCount?: number | undefined;
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
     * Gets the allowedDeviceCount property value. Total count of devices with Exchange Access State: Allowed.
     * @returns a integer
     */
    public get allowedDeviceCount() {
        return this._allowedDeviceCount;
    };
    /**
     * Sets the allowedDeviceCount property value. Total count of devices with Exchange Access State: Allowed.
     * @param value Value to set for the allowedDeviceCount property.
     */
    public set allowedDeviceCount(value: number | undefined) {
        this._allowedDeviceCount = value;
    };
    /**
     * Gets the blockedDeviceCount property value. Total count of devices with Exchange Access State: Blocked.
     * @returns a integer
     */
    public get blockedDeviceCount() {
        return this._blockedDeviceCount;
    };
    /**
     * Sets the blockedDeviceCount property value. Total count of devices with Exchange Access State: Blocked.
     * @param value Value to set for the blockedDeviceCount property.
     */
    public set blockedDeviceCount(value: number | undefined) {
        this._blockedDeviceCount = value;
    };
    /**
     * Instantiates a new deviceExchangeAccessStateSummary and sets the default values.
     */
    public constructor() {
        this._additionalData = {};
        this.odataType = "#microsoft.graph.deviceExchangeAccessStateSummary";
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "allowedDeviceCount": n => { this.allowedDeviceCount = n.getNumberValue(); },
            "blockedDeviceCount": n => { this.blockedDeviceCount = n.getNumberValue(); },
            "@odata.type": n => { this.odataType = n.getStringValue(); },
            "quarantinedDeviceCount": n => { this.quarantinedDeviceCount = n.getNumberValue(); },
            "unavailableDeviceCount": n => { this.unavailableDeviceCount = n.getNumberValue(); },
            "unknownDeviceCount": n => { this.unknownDeviceCount = n.getNumberValue(); },
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
     * Gets the quarantinedDeviceCount property value. Total count of devices with Exchange Access State: Quarantined.
     * @returns a integer
     */
    public get quarantinedDeviceCount() {
        return this._quarantinedDeviceCount;
    };
    /**
     * Sets the quarantinedDeviceCount property value. Total count of devices with Exchange Access State: Quarantined.
     * @param value Value to set for the quarantinedDeviceCount property.
     */
    public set quarantinedDeviceCount(value: number | undefined) {
        this._quarantinedDeviceCount = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        writer.writeNumberValue("allowedDeviceCount", this.allowedDeviceCount);
        writer.writeNumberValue("blockedDeviceCount", this.blockedDeviceCount);
        writer.writeStringValue("@odata.type", this.odataType);
        writer.writeNumberValue("quarantinedDeviceCount", this.quarantinedDeviceCount);
        writer.writeNumberValue("unavailableDeviceCount", this.unavailableDeviceCount);
        writer.writeNumberValue("unknownDeviceCount", this.unknownDeviceCount);
        writer.writeAdditionalData(this.additionalData);
    };
    /**
     * Gets the unavailableDeviceCount property value. Total count of devices for which no Exchange Access State could be found.
     * @returns a integer
     */
    public get unavailableDeviceCount() {
        return this._unavailableDeviceCount;
    };
    /**
     * Sets the unavailableDeviceCount property value. Total count of devices for which no Exchange Access State could be found.
     * @param value Value to set for the unavailableDeviceCount property.
     */
    public set unavailableDeviceCount(value: number | undefined) {
        this._unavailableDeviceCount = value;
    };
    /**
     * Gets the unknownDeviceCount property value. Total count of devices with Exchange Access State: Unknown.
     * @returns a integer
     */
    public get unknownDeviceCount() {
        return this._unknownDeviceCount;
    };
    /**
     * Sets the unknownDeviceCount property value. Total count of devices with Exchange Access State: Unknown.
     * @param value Value to set for the unknownDeviceCount property.
     */
    public set unknownDeviceCount(value: number | undefined) {
        this._unknownDeviceCount = value;
    };
}
