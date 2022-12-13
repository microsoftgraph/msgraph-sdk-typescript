import {createFileDetailsFromDiscriminatorValue} from './createFileDetailsFromDiscriminatorValue';
import {createUserAccountFromDiscriminatorValue} from './createUserAccountFromDiscriminatorValue';
import {DetectionStatus} from './detectionStatus';
import {AlertEvidence, FileDetails, UserAccount} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class ProcessEvidence extends AlertEvidence implements Parsable {
    /** The detectionStatus property */
    private _detectionStatus?: DetectionStatus | undefined;
    /** The imageFile property */
    private _imageFile?: FileDetails | undefined;
    /** The mdeDeviceId property */
    private _mdeDeviceId?: string | undefined;
    /** The parentProcessCreationDateTime property */
    private _parentProcessCreationDateTime?: Date | undefined;
    /** The parentProcessId property */
    private _parentProcessId?: number | undefined;
    /** The parentProcessImageFile property */
    private _parentProcessImageFile?: FileDetails | undefined;
    /** The processCommandLine property */
    private _processCommandLine?: string | undefined;
    /** The processCreationDateTime property */
    private _processCreationDateTime?: Date | undefined;
    /** The processId property */
    private _processId?: number | undefined;
    /** The userAccount property */
    private _userAccount?: UserAccount | undefined;
    /**
     * Instantiates a new ProcessEvidence and sets the default values.
     */
    public constructor() {
        super();
    };
    /**
     * Gets the detectionStatus property value. The detectionStatus property
     * @returns a detectionStatus
     */
    public get detectionStatus() {
        return this._detectionStatus;
    };
    /**
     * Sets the detectionStatus property value. The detectionStatus property
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
     * Gets the imageFile property value. The imageFile property
     * @returns a fileDetails
     */
    public get imageFile() {
        return this._imageFile;
    };
    /**
     * Sets the imageFile property value. The imageFile property
     * @param value Value to set for the imageFile property.
     */
    public set imageFile(value: FileDetails | undefined) {
        this._imageFile = value;
    };
    /**
     * Gets the mdeDeviceId property value. The mdeDeviceId property
     * @returns a string
     */
    public get mdeDeviceId() {
        return this._mdeDeviceId;
    };
    /**
     * Sets the mdeDeviceId property value. The mdeDeviceId property
     * @param value Value to set for the mdeDeviceId property.
     */
    public set mdeDeviceId(value: string | undefined) {
        this._mdeDeviceId = value;
    };
    /**
     * Gets the parentProcessCreationDateTime property value. The parentProcessCreationDateTime property
     * @returns a Date
     */
    public get parentProcessCreationDateTime() {
        return this._parentProcessCreationDateTime;
    };
    /**
     * Sets the parentProcessCreationDateTime property value. The parentProcessCreationDateTime property
     * @param value Value to set for the parentProcessCreationDateTime property.
     */
    public set parentProcessCreationDateTime(value: Date | undefined) {
        this._parentProcessCreationDateTime = value;
    };
    /**
     * Gets the parentProcessId property value. The parentProcessId property
     * @returns a int64
     */
    public get parentProcessId() {
        return this._parentProcessId;
    };
    /**
     * Sets the parentProcessId property value. The parentProcessId property
     * @param value Value to set for the parentProcessId property.
     */
    public set parentProcessId(value: number | undefined) {
        this._parentProcessId = value;
    };
    /**
     * Gets the parentProcessImageFile property value. The parentProcessImageFile property
     * @returns a fileDetails
     */
    public get parentProcessImageFile() {
        return this._parentProcessImageFile;
    };
    /**
     * Sets the parentProcessImageFile property value. The parentProcessImageFile property
     * @param value Value to set for the parentProcessImageFile property.
     */
    public set parentProcessImageFile(value: FileDetails | undefined) {
        this._parentProcessImageFile = value;
    };
    /**
     * Gets the processCommandLine property value. The processCommandLine property
     * @returns a string
     */
    public get processCommandLine() {
        return this._processCommandLine;
    };
    /**
     * Sets the processCommandLine property value. The processCommandLine property
     * @param value Value to set for the processCommandLine property.
     */
    public set processCommandLine(value: string | undefined) {
        this._processCommandLine = value;
    };
    /**
     * Gets the processCreationDateTime property value. The processCreationDateTime property
     * @returns a Date
     */
    public get processCreationDateTime() {
        return this._processCreationDateTime;
    };
    /**
     * Sets the processCreationDateTime property value. The processCreationDateTime property
     * @param value Value to set for the processCreationDateTime property.
     */
    public set processCreationDateTime(value: Date | undefined) {
        this._processCreationDateTime = value;
    };
    /**
     * Gets the processId property value. The processId property
     * @returns a int64
     */
    public get processId() {
        return this._processId;
    };
    /**
     * Sets the processId property value. The processId property
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
     * Gets the userAccount property value. The userAccount property
     * @returns a userAccount
     */
    public get userAccount() {
        return this._userAccount;
    };
    /**
     * Sets the userAccount property value. The userAccount property
     * @param value Value to set for the userAccount property.
     */
    public set userAccount(value: UserAccount | undefined) {
        this._userAccount = value;
    };
}
