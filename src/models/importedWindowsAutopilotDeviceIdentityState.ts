import {ImportedWindowsAutopilotDeviceIdentityImportStatus} from './importedWindowsAutopilotDeviceIdentityImportStatus';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class ImportedWindowsAutopilotDeviceIdentityState implements AdditionalDataHolder, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    private _additionalData: Record<string, unknown>;
    /** Device error code reported by Device Directory Service(DDS). */
    private _deviceErrorCode?: number | undefined;
    /** Device error name reported by Device Directory Service(DDS). */
    private _deviceErrorName?: string | undefined;
    /** The deviceImportStatus property */
    private _deviceImportStatus?: ImportedWindowsAutopilotDeviceIdentityImportStatus | undefined;
    /** Device Registration ID for successfully added device reported by Device Directory Service(DDS). */
    private _deviceRegistrationId?: string | undefined;
    /** The OdataType property */
    private _odataType?: string | undefined;
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
     * Instantiates a new importedWindowsAutopilotDeviceIdentityState and sets the default values.
     */
    public constructor() {
        this._additionalData = {};
    };
    /**
     * Gets the deviceErrorCode property value. Device error code reported by Device Directory Service(DDS).
     * @returns a integer
     */
    public get deviceErrorCode() {
        return this._deviceErrorCode;
    };
    /**
     * Sets the deviceErrorCode property value. Device error code reported by Device Directory Service(DDS).
     * @param value Value to set for the deviceErrorCode property.
     */
    public set deviceErrorCode(value: number | undefined) {
        this._deviceErrorCode = value;
    };
    /**
     * Gets the deviceErrorName property value. Device error name reported by Device Directory Service(DDS).
     * @returns a string
     */
    public get deviceErrorName() {
        return this._deviceErrorName;
    };
    /**
     * Sets the deviceErrorName property value. Device error name reported by Device Directory Service(DDS).
     * @param value Value to set for the deviceErrorName property.
     */
    public set deviceErrorName(value: string | undefined) {
        this._deviceErrorName = value;
    };
    /**
     * Gets the deviceImportStatus property value. The deviceImportStatus property
     * @returns a importedWindowsAutopilotDeviceIdentityImportStatus
     */
    public get deviceImportStatus() {
        return this._deviceImportStatus;
    };
    /**
     * Sets the deviceImportStatus property value. The deviceImportStatus property
     * @param value Value to set for the deviceImportStatus property.
     */
    public set deviceImportStatus(value: ImportedWindowsAutopilotDeviceIdentityImportStatus | undefined) {
        this._deviceImportStatus = value;
    };
    /**
     * Gets the deviceRegistrationId property value. Device Registration ID for successfully added device reported by Device Directory Service(DDS).
     * @returns a string
     */
    public get deviceRegistrationId() {
        return this._deviceRegistrationId;
    };
    /**
     * Sets the deviceRegistrationId property value. Device Registration ID for successfully added device reported by Device Directory Service(DDS).
     * @param value Value to set for the deviceRegistrationId property.
     */
    public set deviceRegistrationId(value: string | undefined) {
        this._deviceRegistrationId = value;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "deviceErrorCode": n => { this.deviceErrorCode = n.getNumberValue(); },
            "deviceErrorName": n => { this.deviceErrorName = n.getStringValue(); },
            "deviceImportStatus": n => { this.deviceImportStatus = n.getEnumValue<ImportedWindowsAutopilotDeviceIdentityImportStatus>(ImportedWindowsAutopilotDeviceIdentityImportStatus); },
            "deviceRegistrationId": n => { this.deviceRegistrationId = n.getStringValue(); },
            "@odata.type": n => { this.odataType = n.getStringValue(); },
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
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        writer.writeNumberValue("deviceErrorCode", this.deviceErrorCode);
        writer.writeStringValue("deviceErrorName", this.deviceErrorName);
        writer.writeEnumValue<ImportedWindowsAutopilotDeviceIdentityImportStatus>("deviceImportStatus", this.deviceImportStatus);
        writer.writeStringValue("deviceRegistrationId", this.deviceRegistrationId);
        writer.writeStringValue("@odata.type", this.odataType);
        writer.writeAdditionalData(this.additionalData);
    };
}
