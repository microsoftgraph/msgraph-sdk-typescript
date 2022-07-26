import {createImportedWindowsAutopilotDeviceIdentityFromDiscriminatorValue} from './createImportedWindowsAutopilotDeviceIdentityFromDiscriminatorValue';
import {ImportedWindowsAutopilotDeviceIdentityUploadStatus} from './importedWindowsAutopilotDeviceIdentityUploadStatus';
import {Entity, ImportedWindowsAutopilotDeviceIdentity} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class ImportedWindowsAutopilotDeviceIdentityUpload extends Entity implements Parsable {
    /** DateTime when the entity is created. */
    private _createdDateTimeUtc?: Date | undefined;
    /** Collection of all Autopilot devices as a part of this upload. */
    private _deviceIdentities?: ImportedWindowsAutopilotDeviceIdentity[] | undefined;
    /** The status property */
    private _status?: ImportedWindowsAutopilotDeviceIdentityUploadStatus | undefined;
    /**
     * Instantiates a new ImportedWindowsAutopilotDeviceIdentityUpload and sets the default values.
     */
    public constructor() {
        super();
        this.odataType = "#microsoft.graph.importedWindowsAutopilotDeviceIdentityUpload";
    };
    /**
     * Gets the createdDateTimeUtc property value. DateTime when the entity is created.
     * @returns a Date
     */
    public get createdDateTimeUtc() {
        return this._createdDateTimeUtc;
    };
    /**
     * Sets the createdDateTimeUtc property value. DateTime when the entity is created.
     * @param value Value to set for the createdDateTimeUtc property.
     */
    public set createdDateTimeUtc(value: Date | undefined) {
        this._createdDateTimeUtc = value;
    };
    /**
     * Gets the deviceIdentities property value. Collection of all Autopilot devices as a part of this upload.
     * @returns a importedWindowsAutopilotDeviceIdentity
     */
    public get deviceIdentities() {
        return this._deviceIdentities;
    };
    /**
     * Sets the deviceIdentities property value. Collection of all Autopilot devices as a part of this upload.
     * @param value Value to set for the deviceIdentities property.
     */
    public set deviceIdentities(value: ImportedWindowsAutopilotDeviceIdentity[] | undefined) {
        this._deviceIdentities = value;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {...super.getFieldDeserializers(),
            "createdDateTimeUtc": n => { this.createdDateTimeUtc = n.getDateValue(); },
            "deviceIdentities": n => { this.deviceIdentities = n.getCollectionOfObjectValues<ImportedWindowsAutopilotDeviceIdentity>(createImportedWindowsAutopilotDeviceIdentityFromDiscriminatorValue); },
            "status": n => { this.status = n.getEnumValue<ImportedWindowsAutopilotDeviceIdentityUploadStatus>(ImportedWindowsAutopilotDeviceIdentityUploadStatus); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        writer.writeDateValue("createdDateTimeUtc", this.createdDateTimeUtc);
        writer.writeCollectionOfObjectValues<ImportedWindowsAutopilotDeviceIdentity>("deviceIdentities", this.deviceIdentities);
        writer.writeEnumValue<ImportedWindowsAutopilotDeviceIdentityUploadStatus>("status", this.status);
    };
    /**
     * Gets the status property value. The status property
     * @returns a importedWindowsAutopilotDeviceIdentityUploadStatus
     */
    public get status() {
        return this._status;
    };
    /**
     * Sets the status property value. The status property
     * @param value Value to set for the status property.
     */
    public set status(value: ImportedWindowsAutopilotDeviceIdentityUploadStatus | undefined) {
        this._status = value;
    };
}
