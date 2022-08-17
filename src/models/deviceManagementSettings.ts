import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class DeviceManagementSettings implements AdditionalDataHolder, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    private _additionalData: Record<string, unknown>;
    /** The number of days a device is allowed to go without checking in to remain compliant. */
    private _deviceComplianceCheckinThresholdDays?: number | undefined;
    /** Is feature enabled or not for scheduled action for rule. */
    private _isScheduledActionEnabled?: boolean | undefined;
    /** The OdataType property */
    private _odataType?: string | undefined;
    /** Device should be noncompliant when there is no compliance policy targeted when this is true */
    private _secureByDefault?: boolean | undefined;
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
     * Instantiates a new deviceManagementSettings and sets the default values.
     */
    public constructor() {
        this._additionalData = {};
        this.odataType = "#microsoft.graph.deviceManagementSettings";
    };
    /**
     * Gets the deviceComplianceCheckinThresholdDays property value. The number of days a device is allowed to go without checking in to remain compliant.
     * @returns a integer
     */
    public get deviceComplianceCheckinThresholdDays() {
        return this._deviceComplianceCheckinThresholdDays;
    };
    /**
     * Sets the deviceComplianceCheckinThresholdDays property value. The number of days a device is allowed to go without checking in to remain compliant.
     * @param value Value to set for the deviceComplianceCheckinThresholdDays property.
     */
    public set deviceComplianceCheckinThresholdDays(value: number | undefined) {
        this._deviceComplianceCheckinThresholdDays = value;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "deviceComplianceCheckinThresholdDays": n => { this.deviceComplianceCheckinThresholdDays = n.getNumberValue(); },
            "isScheduledActionEnabled": n => { this.isScheduledActionEnabled = n.getBooleanValue(); },
            "@odata.type": n => { this.odataType = n.getStringValue(); },
            "secureByDefault": n => { this.secureByDefault = n.getBooleanValue(); },
        };
    };
    /**
     * Gets the isScheduledActionEnabled property value. Is feature enabled or not for scheduled action for rule.
     * @returns a boolean
     */
    public get isScheduledActionEnabled() {
        return this._isScheduledActionEnabled;
    };
    /**
     * Sets the isScheduledActionEnabled property value. Is feature enabled or not for scheduled action for rule.
     * @param value Value to set for the isScheduledActionEnabled property.
     */
    public set isScheduledActionEnabled(value: boolean | undefined) {
        this._isScheduledActionEnabled = value;
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
     * Gets the secureByDefault property value. Device should be noncompliant when there is no compliance policy targeted when this is true
     * @returns a boolean
     */
    public get secureByDefault() {
        return this._secureByDefault;
    };
    /**
     * Sets the secureByDefault property value. Device should be noncompliant when there is no compliance policy targeted when this is true
     * @param value Value to set for the secureByDefault property.
     */
    public set secureByDefault(value: boolean | undefined) {
        this._secureByDefault = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        writer.writeNumberValue("deviceComplianceCheckinThresholdDays", this.deviceComplianceCheckinThresholdDays);
        writer.writeBooleanValue("isScheduledActionEnabled", this.isScheduledActionEnabled);
        writer.writeStringValue("@odata.type", this.odataType);
        writer.writeBooleanValue("secureByDefault", this.secureByDefault);
        writer.writeAdditionalData(this.additionalData);
    };
}
