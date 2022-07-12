import {FileHashType} from './fileHashType';
import {AdminMember1} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class FileHash implements AdditionalDataHolder, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    private _additionalData: Record<string, unknown>;
    /** File hash type. Possible values are: unknown, sha1, sha256, md5, authenticodeHash256, lsHash, ctph, peSha1, peSha256. */
    private _hashType?: FileHashType | AdminMember1 | undefined;
    /** Value of the file hash. */
    private _hashValue?: string | undefined;
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
     * Instantiates a new fileHash and sets the default values.
     */
    public constructor() {
        this._additionalData = {};
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "hashType": n => { this.hashType = n.getObjectValue<FileHashType>(createFileHashTypeFromDiscriminatorValue); },
            "hashValue": n => { this.hashValue = n.getStringValue(); },
        };
    };
    /**
     * Gets the hashType property value. File hash type. Possible values are: unknown, sha1, sha256, md5, authenticodeHash256, lsHash, ctph, peSha1, peSha256.
     * @returns a admin
     */
    public get hashType() {
        return this._hashType;
    };
    /**
     * Sets the hashType property value. File hash type. Possible values are: unknown, sha1, sha256, md5, authenticodeHash256, lsHash, ctph, peSha1, peSha256.
     * @param value Value to set for the hashType property.
     */
    public set hashType(value: FileHashType | AdminMember1 | undefined) {
        this._hashType = value;
    };
    /**
     * Gets the hashValue property value. Value of the file hash.
     * @returns a string
     */
    public get hashValue() {
        return this._hashValue;
    };
    /**
     * Sets the hashValue property value. Value of the file hash.
     * @param value Value to set for the hashValue property.
     */
    public set hashValue(value: string | undefined) {
        this._hashValue = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        writer.writeObjectValue<FileHashType>("hashType", this.hashType);
        writer.writeStringValue("hashValue", this.hashValue);
        writer.writeAdditionalData(this.additionalData);
    };
}
