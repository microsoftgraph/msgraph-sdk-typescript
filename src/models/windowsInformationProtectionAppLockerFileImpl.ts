import {EntityImpl} from './index';
import {WindowsInformationProtectionAppLockerFile} from './windowsInformationProtectionAppLockerFile';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** Windows Information Protection AppLocker File */
export class WindowsInformationProtectionAppLockerFileImpl extends EntityImpl implements Parsable, WindowsInformationProtectionAppLockerFile {
    /** The friendly name */
    public displayName?: string | undefined;
    /** File as a byte array */
    public file?: string | undefined;
    /** SHA256 hash of the file */
    public fileHash?: string | undefined;
    /** Version of the entity. */
    public version?: string | undefined;
    /**
     * Instantiates a new windowsInformationProtectionAppLockerFile and sets the default values.
     * @param windowsInformationProtectionAppLockerFileParameterValue 
     */
    public constructor(windowsInformationProtectionAppLockerFileParameterValue?: WindowsInformationProtectionAppLockerFile | undefined) {
        super();
        this.displayName = windowsInformationProtectionAppLockerFileParameterValue?.displayName ;
        this.file = windowsInformationProtectionAppLockerFileParameterValue?.file ;
        this.fileHash = windowsInformationProtectionAppLockerFileParameterValue?.fileHash ;
        this.version = windowsInformationProtectionAppLockerFileParameterValue?.version ;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {...super.getFieldDeserializers(),
            "displayName": n => { this.displayName = n.getStringValue(); },
            "file": n => { this.file = n.getStringValue(); },
            "fileHash": n => { this.fileHash = n.getStringValue(); },
            "version": n => { this.version = n.getStringValue(); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        if(this.displayName){
        writer.writeStringValue("displayName", this.displayName);
        }
        if(this.file){
        writer.writeStringValue("file", this.file);
        }
        if(this.fileHash){
        writer.writeStringValue("fileHash", this.fileHash);
        }
        if(this.version){
        writer.writeStringValue("version", this.version);
        }
    };
}
