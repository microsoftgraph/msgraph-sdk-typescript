import {createFileHashFromDiscriminatorValue} from './createFileHashFromDiscriminatorValue';
import {FileHash} from './fileHash';
import {FileHashImpl} from './index';
import {Process} from './process';
import {ProcessIntegrityLevel} from './processIntegrityLevel';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class ProcessImpl implements Process {
    /** User account identifier (user account context the process ran under) for example, AccountName, SID, and so on. */
    private _accountName?: string | undefined;
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    private _additionalData?: Record<string, unknown> | undefined;
    /** The full process invocation commandline including all parameters. */
    private _commandLine?: string | undefined;
    /** Time at which the process was started. The Timestamp type represents date and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z. */
    private _createdDateTime?: Date | undefined;
    /** Complex type containing file hashes (cryptographic and location-sensitive). */
    private _fileHash?: FileHash | undefined;
    /** The integrity level of the process. Possible values are: unknown, untrusted, low, medium, high, system. */
    private _integrityLevel?: ProcessIntegrityLevel | undefined;
    /** True if the process is elevated. */
    private _isElevated?: boolean | undefined;
    /** The name of the process' Image file. */
    private _name?: string | undefined;
    /** DateTime at which the parent process was started. The Timestamp type represents date and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z. */
    private _parentProcessCreatedDateTime?: Date | undefined;
    /** The Process ID (PID) of the parent process. */
    private _parentProcessId?: number | undefined;
    /** The name of the image file of the parent process. */
    private _parentProcessName?: string | undefined;
    /** Full path, including filename. */
    private _path?: string | undefined;
    /** The Process ID (PID) of the process. */
    private _processId?: number | undefined;
    /**
     * Gets the accountName property value. User account identifier (user account context the process ran under) for example, AccountName, SID, and so on.
     * @returns a string
     */
    public get accountName() {
        return this._accountName;
    };
    /**
     * Sets the accountName property value. User account identifier (user account context the process ran under) for example, AccountName, SID, and so on.
     * @param value Value to set for the accountName property.
     */
    public set accountName(value: string | undefined) {
        if(value) {
            this._accountName = value;
        }
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
    public set additionalData(value: Record<string, unknown> | undefined) {
        if(value) {
            this._additionalData = value;
        }
    };
    /**
     * Gets the commandLine property value. The full process invocation commandline including all parameters.
     * @returns a string
     */
    public get commandLine() {
        return this._commandLine;
    };
    /**
     * Sets the commandLine property value. The full process invocation commandline including all parameters.
     * @param value Value to set for the commandLine property.
     */
    public set commandLine(value: string | undefined) {
        if(value) {
            this._commandLine = value;
        }
    };
    /**
     * Instantiates a new process and sets the default values.
     * @param processParameterValue 
     */
    public constructor(processParameterValue?: Process | undefined) {
        this._accountName = processParameterValue?.accountName;
        this._additionalData = processParameterValue?.additionalData ? processParameterValue?.additionalData! : {};
        this._commandLine = processParameterValue?.commandLine;
        this._createdDateTime = processParameterValue?.createdDateTime;
        this._fileHash = processParameterValue?.fileHash;
        this._integrityLevel = processParameterValue?.integrityLevel;
        this._isElevated = processParameterValue?.isElevated;
        this._name = processParameterValue?.name;
        this._parentProcessCreatedDateTime = processParameterValue?.parentProcessCreatedDateTime;
        this._parentProcessId = processParameterValue?.parentProcessId;
        this._parentProcessName = processParameterValue?.parentProcessName;
        this._path = processParameterValue?.path;
        this._processId = processParameterValue?.processId;
    };
    /**
     * Gets the createdDateTime property value. Time at which the process was started. The Timestamp type represents date and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z.
     * @returns a Date
     */
    public get createdDateTime() {
        return this._createdDateTime;
    };
    /**
     * Sets the createdDateTime property value. Time at which the process was started. The Timestamp type represents date and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z.
     * @param value Value to set for the createdDateTime property.
     */
    public set createdDateTime(value: Date | undefined) {
        if(value) {
            this._createdDateTime = value;
        }
    };
    /**
     * Gets the fileHash property value. Complex type containing file hashes (cryptographic and location-sensitive).
     * @returns a FileHashInterface
     */
    public get fileHash() {
        return this._fileHash;
    };
    /**
     * Sets the fileHash property value. Complex type containing file hashes (cryptographic and location-sensitive).
     * @param value Value to set for the fileHash property.
     */
    public set fileHash(value: FileHash | undefined) {
        if(value) {
            this._fileHash = value instanceof FileHashImpl? value : new FileHashImpl(value);
        }
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "accountName": n => { this.accountName = n.getStringValue(); },
            "commandLine": n => { this.commandLine = n.getStringValue(); },
            "createdDateTime": n => { this.createdDateTime = n.getDateValue(); },
            "fileHash": n => { this.fileHash = n.getObjectValue<FileHashImpl>(createFileHashFromDiscriminatorValue); },
            "integrityLevel": n => { this.integrityLevel = n.getEnumValue<ProcessIntegrityLevel>(ProcessIntegrityLevel); },
            "isElevated": n => { this.isElevated = n.getBooleanValue(); },
            "name": n => { this.name = n.getStringValue(); },
            "parentProcessCreatedDateTime": n => { this.parentProcessCreatedDateTime = n.getDateValue(); },
            "parentProcessId": n => { this.parentProcessId = n.getNumberValue(); },
            "parentProcessName": n => { this.parentProcessName = n.getStringValue(); },
            "path": n => { this.path = n.getStringValue(); },
            "processId": n => { this.processId = n.getNumberValue(); },
        };
    };
    /**
     * Gets the integrityLevel property value. The integrity level of the process. Possible values are: unknown, untrusted, low, medium, high, system.
     * @returns a processIntegrityLevel
     */
    public get integrityLevel() {
        return this._integrityLevel;
    };
    /**
     * Sets the integrityLevel property value. The integrity level of the process. Possible values are: unknown, untrusted, low, medium, high, system.
     * @param value Value to set for the integrityLevel property.
     */
    public set integrityLevel(value: ProcessIntegrityLevel | undefined) {
        if(value) {
            this._integrityLevel = value;
        }
    };
    /**
     * Gets the isElevated property value. True if the process is elevated.
     * @returns a boolean
     */
    public get isElevated() {
        return this._isElevated;
    };
    /**
     * Sets the isElevated property value. True if the process is elevated.
     * @param value Value to set for the isElevated property.
     */
    public set isElevated(value: boolean | undefined) {
        if(value) {
            this._isElevated = value;
        }
    };
    /**
     * Gets the name property value. The name of the process' Image file.
     * @returns a string
     */
    public get name() {
        return this._name;
    };
    /**
     * Sets the name property value. The name of the process' Image file.
     * @param value Value to set for the name property.
     */
    public set name(value: string | undefined) {
        if(value) {
            this._name = value;
        }
    };
    /**
     * Gets the parentProcessCreatedDateTime property value. DateTime at which the parent process was started. The Timestamp type represents date and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z.
     * @returns a Date
     */
    public get parentProcessCreatedDateTime() {
        return this._parentProcessCreatedDateTime;
    };
    /**
     * Sets the parentProcessCreatedDateTime property value. DateTime at which the parent process was started. The Timestamp type represents date and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z.
     * @param value Value to set for the parentProcessCreatedDateTime property.
     */
    public set parentProcessCreatedDateTime(value: Date | undefined) {
        if(value) {
            this._parentProcessCreatedDateTime = value;
        }
    };
    /**
     * Gets the parentProcessId property value. The Process ID (PID) of the parent process.
     * @returns a integer
     */
    public get parentProcessId() {
        return this._parentProcessId;
    };
    /**
     * Sets the parentProcessId property value. The Process ID (PID) of the parent process.
     * @param value Value to set for the parentProcessId property.
     */
    public set parentProcessId(value: number | undefined) {
        if(value) {
            this._parentProcessId = value;
        }
    };
    /**
     * Gets the parentProcessName property value. The name of the image file of the parent process.
     * @returns a string
     */
    public get parentProcessName() {
        return this._parentProcessName;
    };
    /**
     * Sets the parentProcessName property value. The name of the image file of the parent process.
     * @param value Value to set for the parentProcessName property.
     */
    public set parentProcessName(value: string | undefined) {
        if(value) {
            this._parentProcessName = value;
        }
    };
    /**
     * Gets the path property value. Full path, including filename.
     * @returns a string
     */
    public get path() {
        return this._path;
    };
    /**
     * Sets the path property value. Full path, including filename.
     * @param value Value to set for the path property.
     */
    public set path(value: string | undefined) {
        if(value) {
            this._path = value;
        }
    };
    /**
     * Gets the processId property value. The Process ID (PID) of the process.
     * @returns a integer
     */
    public get processId() {
        return this._processId;
    };
    /**
     * Sets the processId property value. The Process ID (PID) of the process.
     * @param value Value to set for the processId property.
     */
    public set processId(value: number | undefined) {
        if(value) {
            this._processId = value;
        }
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        if(this.accountName){
            writer.writeStringValue("accountName", this.accountName);
        }
        if(this.commandLine){
            writer.writeStringValue("commandLine", this.commandLine);
        }
        if(this.createdDateTime){
            writer.writeDateValue("createdDateTime", this.createdDateTime);
        }
        if(this.fileHash){
            writer.writeObjectValue<FileHashImpl>("fileHash", (!this.fileHash || this.fileHash instanceof FileHashImpl? this.fileHash : new FileHashImpl(this.fileHash)));
        }
        if(this.integrityLevel){
            writer.writeEnumValue<ProcessIntegrityLevel>("integrityLevel", this.integrityLevel);
        }
        if(this.isElevated){
            writer.writeBooleanValue("isElevated", this.isElevated);
        }
        if(this.name){
            writer.writeStringValue("name", this.name);
        }
        if(this.parentProcessCreatedDateTime){
            writer.writeDateValue("parentProcessCreatedDateTime", this.parentProcessCreatedDateTime);
        }
        if(this.parentProcessId){
            writer.writeNumberValue("parentProcessId", this.parentProcessId);
        }
        if(this.parentProcessName){
            writer.writeStringValue("parentProcessName", this.parentProcessName);
        }
        if(this.path){
            writer.writeStringValue("path", this.path);
        }
        if(this.processId){
            writer.writeNumberValue("processId", this.processId);
        }
        writer.writeAdditionalData(this.additionalData);
    };
}
