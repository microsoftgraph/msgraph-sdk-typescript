import {createFileDetailsFromDiscriminatorValue} from './createFileDetailsFromDiscriminatorValue';
import {DetectionStatus} from './detectionStatus';
import {AlertEvidence, FileDetails} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class FileEvidence extends AlertEvidence implements Parsable {
    /** The status of the detection.The possible values are: detected, blocked, prevented, unknownFutureValue. */
    private _detectionStatus?: DetectionStatus | undefined;
    /** The file details. */
    private _fileDetails?: FileDetails | undefined;
    /** A unique identifier assigned to a device by Microsoft Defender for Endpoint. */
    private _mdeDeviceId?: string | undefined;
    /**
     * Instantiates a new FileEvidence and sets the default values.
     */
    public constructor() {
        super();
    };
    /**
     * Gets the detectionStatus property value. The status of the detection.The possible values are: detected, blocked, prevented, unknownFutureValue.
     * @returns a detectionStatus
     */
    public get detectionStatus() {
        return this._detectionStatus;
    };
    /**
     * Sets the detectionStatus property value. The status of the detection.The possible values are: detected, blocked, prevented, unknownFutureValue.
     * @param value Value to set for the detectionStatus property.
     */
    public set detectionStatus(value: DetectionStatus | undefined) {
        this._detectionStatus = value;
    };
    /**
     * Gets the fileDetails property value. The file details.
     * @returns a fileDetails
     */
    public get fileDetails() {
        return this._fileDetails;
    };
    /**
     * Sets the fileDetails property value. The file details.
     * @param value Value to set for the fileDetails property.
     */
    public set fileDetails(value: FileDetails | undefined) {
        this._fileDetails = value;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {...super.getFieldDeserializers(),
            "detectionStatus": n => { this.detectionStatus = n.getEnumValue<DetectionStatus>(DetectionStatus); },
            "fileDetails": n => { this.fileDetails = n.getObjectValue<FileDetails>(createFileDetailsFromDiscriminatorValue); },
            "mdeDeviceId": n => { this.mdeDeviceId = n.getStringValue(); },
        };
    };
    /**
     * Gets the mdeDeviceId property value. A unique identifier assigned to a device by Microsoft Defender for Endpoint.
     * @returns a string
     */
    public get mdeDeviceId() {
        return this._mdeDeviceId;
    };
    /**
     * Sets the mdeDeviceId property value. A unique identifier assigned to a device by Microsoft Defender for Endpoint.
     * @param value Value to set for the mdeDeviceId property.
     */
    public set mdeDeviceId(value: string | undefined) {
        this._mdeDeviceId = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        writer.writeEnumValue<DetectionStatus>("detectionStatus", this.detectionStatus);
        writer.writeObjectValue<FileDetails>("fileDetails", this.fileDetails);
        writer.writeStringValue("mdeDeviceId", this.mdeDeviceId);
    };
}
