import {createHashesFromDiscriminatorValue} from './createHashesFromDiscriminatorValue';
import {File} from './file';
import {Hashes} from './hashes';
import {HashesImpl} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class FileImpl implements File {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    private _additionalData?: Record<string, unknown> | undefined;
    /** Hashes of the file's binary content, if available. Read-only. */
    private _hashes?: Hashes | undefined;
    /** The MIME type for the file. This is determined by logic on the server and might not be the value provided when the file was uploaded. Read-only. */
    private _mimeType?: string | undefined;
    /** The processingMetadata property */
    private _processingMetadata?: boolean | undefined;
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
     * Instantiates a new file and sets the default values.
     * @param fileParameterValue 
     */
    public constructor(fileParameterValue?: File | undefined) {
        this._additionalData = fileParameterValue?.additionalData ? fileParameterValue?.additionalData! : {};
        this._hashes = fileParameterValue?.hashes;
        this._mimeType = fileParameterValue?.mimeType;
        this._processingMetadata = fileParameterValue?.processingMetadata;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "hashes": n => { this.hashes = n.getObjectValue<HashesImpl>(createHashesFromDiscriminatorValue); },
            "mimeType": n => { this.mimeType = n.getStringValue(); },
            "processingMetadata": n => { this.processingMetadata = n.getBooleanValue(); },
        };
    };
    /**
     * Gets the hashes property value. Hashes of the file's binary content, if available. Read-only.
     * @returns a HashesInterface
     */
    public get hashes() {
        return this._hashes;
    };
    /**
     * Sets the hashes property value. Hashes of the file's binary content, if available. Read-only.
     * @param value Value to set for the hashes property.
     */
    public set hashes(value: Hashes | undefined) {
        if(value) {
            this._hashes = value instanceof HashesImpl? value as HashesImpl: new HashesImpl(value);
        }
    };
    /**
     * Gets the mimeType property value. The MIME type for the file. This is determined by logic on the server and might not be the value provided when the file was uploaded. Read-only.
     * @returns a string
     */
    public get mimeType() {
        return this._mimeType;
    };
    /**
     * Sets the mimeType property value. The MIME type for the file. This is determined by logic on the server and might not be the value provided when the file was uploaded. Read-only.
     * @param value Value to set for the mimeType property.
     */
    public set mimeType(value: string | undefined) {
        if(value) {
            this._mimeType = value;
        }
    };
    /**
     * Gets the processingMetadata property value. The processingMetadata property
     * @returns a boolean
     */
    public get processingMetadata() {
        return this._processingMetadata;
    };
    /**
     * Sets the processingMetadata property value. The processingMetadata property
     * @param value Value to set for the processingMetadata property.
     */
    public set processingMetadata(value: boolean | undefined) {
        if(value) {
            this._processingMetadata = value;
        }
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        if(this.hashes){
            writer.writeObjectValue<HashesImpl>("hashes", (this.hashes instanceof HashesImpl? this.hashes as HashesImpl: new HashesImpl(this.hashes)));
        }
        if(this.mimeType){
            writer.writeStringValue("mimeType", this.mimeType);
        }
        if(this.processingMetadata){
            writer.writeBooleanValue("processingMetadata", this.processingMetadata);
        }
        writer.writeAdditionalData(this.additionalData);
    };
}
