import {createFileDetailsFromDiscriminatorValue} from './createFileDetailsFromDiscriminatorValue';
import {createUserAccountFromDiscriminatorValue} from './createUserAccountFromDiscriminatorValue';
import {DetectionStatus} from './detectionStatus';
import {AlertEvidence, FileDetails, UserAccount} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class ProcessEvidence extends AlertEvidence implements Parsable {
    /** The status of the detection.The possible values are: detected, blocked, prevented, unknownFutureValue. */
    private _detectionStatus?: DetectionStatus | undefined;
    /** Image file details. */
    private _imageFile?: FileDetails | undefined;
    /** A unique identifier assigned to a device by Microsoft Defender for Endpoint. */
    private _mdeDeviceId?: string | undefined;
    /** Date and time when the parent of the process was created. */
    private _parentProcessCreationDateTime?: Date | undefined;
    /** Process ID (PID) of the parent process that spawned the process. */
    private _parentProcessId?: number | undefined;
    /** Parent process image file details. */
    private _parentProcessImageFile?: FileDetails | undefined;
    /** Command line used to create the new process. */
    private _processCommandLine?: string | undefined;
    /** Date and time the process was created. */
    private _processCreationDateTime?: Date | undefined;
    /** Process ID (PID) of the newly created process. */
    private _processId?: number | undefined;
    /** User details of the user that ran the process. */
    private _userAccount?: UserAccount | undefined;
    /**
     * Instantiates a new ProcessEvidence and sets the default values.
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
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {...super.getFieldDeserializers(),
            "detectionStatus": n => { this.detectionStatus = n.getEnumValue<DetectionStatus>(DetectionStatus); },
            "imageFile": n => { this.imageFile = n.getObjectValue<FileDetails>(createFileDetailsFromDiscriminatorValue); },
            "mdeDeviceId": n => { this.mdeDeviceId = n.getStringValue(); },
            "parentProcessCreationDateTime": n => { this.parentProcessCreationDateTime = n.getDateValue(); },
            "parentProcessId": n => { this.parentProcessId = n.getNumberValue(); },
            "parentProcessImageFile": n => { this.parentProcessImageFile = n.getObjectValue<FileDetails>(createFileDetailsFromDiscriminatorValue); },
            "processCommandLine": n => { this.processCommandLine = n.getStringValue(); },
            "processCreationDateTime": n => { this.processCreationDateTime = n.getDateValue(); },
            "processId": n => { this.processId = n.getNumberValue(); },
            "userAccount": n => { this.userAccount = n.getObjectValue<UserAccount>(createUserAccountFromDiscriminatorValue); },
        };
    };
    /**
     * Gets the imageFile property value. Image file details.
     * @returns a fileDetails
     */
    public get imageFile() {
        return this._imageFile;
    };
    /**
     * Sets the imageFile property value. Image file details.
     * @param value Value to set for the imageFile property.
     */
    public set imageFile(value: FileDetails | undefined) {
        this._imageFile = value;
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
     * Gets the parentProcessCreationDateTime property value. Date and time when the parent of the process was created.
     * @returns a Date
     */
    public get parentProcessCreationDateTime() {
        return this._parentProcessCreationDateTime;
    };
    /**
     * Sets the parentProcessCreationDateTime property value. Date and time when the parent of the process was created.
     * @param value Value to set for the parentProcessCreationDateTime property.
     */
    public set parentProcessCreationDateTime(value: Date | undefined) {
        this._parentProcessCreationDateTime = value;
    };
    /**
     * Gets the parentProcessId property value. Process ID (PID) of the parent process that spawned the process.
     * @returns a int64
     */
    public get parentProcessId() {
        return this._parentProcessId;
    };
    /**
     * Sets the parentProcessId property value. Process ID (PID) of the parent process that spawned the process.
     * @param value Value to set for the parentProcessId property.
     */
    public set parentProcessId(value: number | undefined) {
        this._parentProcessId = value;
    };
    /**
     * Gets the parentProcessImageFile property value. Parent process image file details.
     * @returns a fileDetails
     */
    public get parentProcessImageFile() {
        return this._parentProcessImageFile;
    };
    /**
     * Sets the parentProcessImageFile property value. Parent process image file details.
     * @param value Value to set for the parentProcessImageFile property.
     */
    public set parentProcessImageFile(value: FileDetails | undefined) {
        this._parentProcessImageFile = value;
    };
    /**
     * Gets the processCommandLine property value. Command line used to create the new process.
     * @returns a string
     */
    public get processCommandLine() {
        return this._processCommandLine;
    };
    /**
     * Sets the processCommandLine property value. Command line used to create the new process.
     * @param value Value to set for the processCommandLine property.
     */
    public set processCommandLine(value: string | undefined) {
        this._processCommandLine = value;
    };
    /**
     * Gets the processCreationDateTime property value. Date and time the process was created.
     * @returns a Date
     */
    public get processCreationDateTime() {
        return this._processCreationDateTime;
    };
    /**
     * Sets the processCreationDateTime property value. Date and time the process was created.
     * @param value Value to set for the processCreationDateTime property.
     */
    public set processCreationDateTime(value: Date | undefined) {
        this._processCreationDateTime = value;
    };
    /**
     * Gets the processId property value. Process ID (PID) of the newly created process.
     * @returns a int64
     */
    public get processId() {
        return this._processId;
    };
    /**
     * Sets the processId property value. Process ID (PID) of the newly created process.
     * @param value Value to set for the processId property.
     */
    public set processId(value: number | undefined) {
        this._processId = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        writer.writeEnumValue<DetectionStatus>("detectionStatus", this.detectionStatus);
        writer.writeObjectValue<FileDetails>("imageFile", this.imageFile);
        writer.writeStringValue("mdeDeviceId", this.mdeDeviceId);
        writer.writeDateValue("parentProcessCreationDateTime", this.parentProcessCreationDateTime);
        writer.writeNumberValue("parentProcessId", this.parentProcessId);
        writer.writeObjectValue<FileDetails>("parentProcessImageFile", this.parentProcessImageFile);
        writer.writeStringValue("processCommandLine", this.processCommandLine);
        writer.writeDateValue("processCreationDateTime", this.processCreationDateTime);
        writer.writeNumberValue("processId", this.processId);
        writer.writeObjectValue<UserAccount>("userAccount", this.userAccount);
    };
    /**
     * Gets the userAccount property value. User details of the user that ran the process.
     * @returns a userAccount
     */
    public get userAccount() {
        return this._userAccount;
    };
    /**
     * Sets the userAccount property value. User details of the user that ran the process.
     * @param value Value to set for the userAccount property.
     */
    public set userAccount(value: UserAccount | undefined) {
        this._userAccount = value;
    };
}
