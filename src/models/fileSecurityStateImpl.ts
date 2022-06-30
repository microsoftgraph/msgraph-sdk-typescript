import {createFileHashFromDiscriminatorValue} from './createFileHashFromDiscriminatorValue';
import {FileHash} from './fileHash';
import {FileSecurityState} from './fileSecurityState';
import {FileHashImpl} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class FileSecurityStateImpl implements FileSecurityState {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    private _additionalData: Record<string, unknown>;
    /** Complex type containing file hashes (cryptographic and location-sensitive). */
    private _fileHash?: FileHash | undefined;
    /** File name (without path). */
    private _name?: string | undefined;
    /** Full file path of the file/imageFile. */
    private _path?: string | undefined;
    /** Provider generated/calculated risk score of the alert file. Recommended value range of 0-1, which equates to a percentage. */
    private _riskScore?: string | undefined;
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
        if(value) {
            this._additionalData = value;
        }
    };
    /**
     * Instantiates a new fileSecurityState and sets the default values.
     * @param fileSecurityStateParameterValue 
     */
    public constructor(fileSecurityStateParameterValue?: FileSecurityState | undefined) {
        this._additionalData = fileSecurityStateParameterValue?.additionalData ? fileSecurityStateParameterValue?.additionalData! : {};
        this._fileHash = fileSecurityStateParameterValue?.fileHash;
        this._name = fileSecurityStateParameterValue?.name;
        this._path = fileSecurityStateParameterValue?.path;
        this._riskScore = fileSecurityStateParameterValue?.riskScore;
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
            "fileHash": n => { this.fileHash = n.getObjectValue<FileHashImpl>(createFileHashFromDiscriminatorValue); },
            "name": n => { this.name = n.getStringValue(); },
            "path": n => { this.path = n.getStringValue(); },
            "riskScore": n => { this.riskScore = n.getStringValue(); },
        };
    };
    /**
     * Gets the name property value. File name (without path).
     * @returns a string
     */
    public get name() {
        return this._name;
    };
    /**
     * Sets the name property value. File name (without path).
     * @param value Value to set for the name property.
     */
    public set name(value: string | undefined) {
        if(value) {
            this._name = value;
        }
    };
    /**
     * Gets the path property value. Full file path of the file/imageFile.
     * @returns a string
     */
    public get path() {
        return this._path;
    };
    /**
     * Sets the path property value. Full file path of the file/imageFile.
     * @param value Value to set for the path property.
     */
    public set path(value: string | undefined) {
        if(value) {
            this._path = value;
        }
    };
    /**
     * Gets the riskScore property value. Provider generated/calculated risk score of the alert file. Recommended value range of 0-1, which equates to a percentage.
     * @returns a string
     */
    public get riskScore() {
        return this._riskScore;
    };
    /**
     * Sets the riskScore property value. Provider generated/calculated risk score of the alert file. Recommended value range of 0-1, which equates to a percentage.
     * @param value Value to set for the riskScore property.
     */
    public set riskScore(value: string | undefined) {
        if(value) {
            this._riskScore = value;
        }
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        if(this.fileHash){
            writer.writeObjectValue<FileHashImpl>("fileHash", (!this.fileHash || this.fileHash instanceof FileHashImpl? this.fileHash : new FileHashImpl(this.fileHash)));
        }
        if(this.name){
            writer.writeStringValue("name", this.name);
        }
        if(this.path){
            writer.writeStringValue("path", this.path);
        }
        if(this.riskScore){
            writer.writeStringValue("riskScore", this.riskScore);
        }
        writer.writeAdditionalData(this.additionalData);
    };
}
