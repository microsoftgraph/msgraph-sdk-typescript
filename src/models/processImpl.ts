import {createFileHashFromDiscriminatorValue} from './createFileHashFromDiscriminatorValue';
import {FileHash} from './fileHash';
import {FileHashImpl} from './index';
import {Process} from './process';
import {ProcessIntegrityLevel} from './processIntegrityLevel';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class ProcessImpl implements AdditionalDataHolder, Parsable, Process {
    /** User account identifier (user account context the process ran under) for example, AccountName, SID, and so on. */
    public accountName?: string | undefined;
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    public additionalData: Record<string, unknown>;
    /** The full process invocation commandline including all parameters. */
    public commandLine?: string | undefined;
    /** Time at which the process was started. The Timestamp type represents date and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z. */
    public createdDateTime?: Date | undefined;
    /** Complex type containing file hashes (cryptographic and location-sensitive). */
    public fileHash?: FileHash | undefined;
    /** The integrity level of the process. Possible values are: unknown, untrusted, low, medium, high, system. */
    public integrityLevel?: ProcessIntegrityLevel | undefined;
    /** True if the process is elevated. */
    public isElevated?: boolean | undefined;
    /** The name of the process' Image file. */
    public name?: string | undefined;
    /** DateTime at which the parent process was started. The Timestamp type represents date and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z. */
    public parentProcessCreatedDateTime?: Date | undefined;
    /** The Process ID (PID) of the parent process. */
    public parentProcessId?: number | undefined;
    /** The name of the image file of the parent process. */
    public parentProcessName?: string | undefined;
    /** Full path, including filename. */
    public path?: string | undefined;
    /** The Process ID (PID) of the process. */
    public processId?: number | undefined;
    /**
     * Instantiates a new process and sets the default values.
     * @param processParameterValue 
     */
    public constructor(processParameterValue?: Process | undefined) {
        this.accountName = processParameterValue?.accountName ;
        this.additionalData = processParameterValue?.additionalData ? processParameterValue?.additionalData! : {}
        this.commandLine = processParameterValue?.commandLine ;
        this.createdDateTime = processParameterValue?.createdDateTime ;
        this.fileHash = processParameterValue?.fileHash ;
        this.integrityLevel = processParameterValue?.integrityLevel ;
        this.isElevated = processParameterValue?.isElevated ;
        this.name = processParameterValue?.name ;
        this.parentProcessCreatedDateTime = processParameterValue?.parentProcessCreatedDateTime ;
        this.parentProcessId = processParameterValue?.parentProcessId ;
        this.parentProcessName = processParameterValue?.parentProcessName ;
        this.path = processParameterValue?.path ;
        this.processId = processParameterValue?.processId ;
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
        writer.writeObjectValue<FileHashImpl>("fileHash", new FileHashImpl(this.fileHash));
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
