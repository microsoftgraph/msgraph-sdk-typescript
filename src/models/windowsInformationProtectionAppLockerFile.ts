import {Entity} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/**
 * Windows Information Protection AppLocker File
 */
export class WindowsInformationProtectionAppLockerFile extends Entity implements Parsable {
    /** The friendly name */
    private _displayName?: string | undefined;
    /** File as a byte array */
    private _file?: string | undefined;
    /** SHA256 hash of the file */
    private _fileHash?: string | undefined;
    /** Version of the entity. */
    private _version?: string | undefined;
    /**
     * Instantiates a new windowsInformationProtectionAppLockerFile and sets the default values.
     */
    public constructor() {
        super();
    };
    /**
     * Gets the displayName property value. The friendly name
     * @returns a string
     */
    public get displayName() {
        return this._displayName;
    };
    /**
     * Sets the displayName property value. The friendly name
     * @param value Value to set for the displayName property.
     */
    public set displayName(value: string | undefined) {
        this._displayName = value;
    };
    /**
     * Gets the file property value. File as a byte array
     * @returns a base64url
     */
    public get file() {
        return this._file;
    };
    /**
     * Sets the file property value. File as a byte array
     * @param value Value to set for the file property.
     */
    public set file(value: string | undefined) {
        this._file = value;
    };
    /**
     * Gets the fileHash property value. SHA256 hash of the file
     * @returns a string
     */
    public get fileHash() {
        return this._fileHash;
    };
    /**
     * Sets the fileHash property value. SHA256 hash of the file
     * @param value Value to set for the fileHash property.
     */
    public set fileHash(value: string | undefined) {
        this._fileHash = value;
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
        writer.writeStringValue("displayName", this.displayName);
        writer.writeStringValue("file", this.file);
        writer.writeStringValue("fileHash", this.fileHash);
        writer.writeStringValue("version", this.version);
    };
    /**
     * Gets the version property value. Version of the entity.
     * @returns a string
     */
    public get version() {
        return this._version;
    };
    /**
     * Sets the version property value. Version of the entity.
     * @param value Value to set for the version property.
     */
    public set version(value: string | undefined) {
        this._version = value;
    };
}
