import {FileEncryptionInfo} from '../../../../../../../models/microsoft/graph/fileEncryptionInfo';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class CommitRequestBody implements Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.  */
    private _additionalData: Map<string, unknown>;
    private _fileEncryptionInfo?: FileEncryptionInfo | undefined;
    /**
     * Instantiates a new commitRequestBody and sets the default values.
     */
    public constructor() {
        this._additionalData = new Map<string, unknown>();
    };
    /**
     * Gets the additionalData property value. Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     * @returns a Map<string, unknown>
     */
    public get additionalData() {
        return this._additionalData;
    };
    /**
     * Gets the fileEncryptionInfo property value. 
     * @returns a fileEncryptionInfo
     */
    public get fileEncryptionInfo() {
        return this._fileEncryptionInfo;
    };
    /**
     * The deserialization information for the current model
     * @returns a Map<string, (item: T, node: ParseNode) => void>
     */
    public getFieldDeserializers<T>() : Map<string, (item: T, node: ParseNode) => void> {
        return new Map<string, (item: T, node: ParseNode) => void>([
            ["fileEncryptionInfo", (o, n) => { (o as unknown as CommitRequestBody).fileEncryptionInfo = n.getObjectValue<FileEncryptionInfo>(FileEncryptionInfo); }],
        ]);
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        writer.writeObjectValue<FileEncryptionInfo>("fileEncryptionInfo", this.fileEncryptionInfo);
        writer.writeAdditionalData(this.additionalData);
    };
    /**
     * Sets the additionalData property value. Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     * @param value Value to set for the AdditionalData property.
     */
    public set additionalData(value: Map<string, unknown>) {
        this._additionalData = value;
    };
    /**
     * Sets the fileEncryptionInfo property value. 
     * @param value Value to set for the fileEncryptionInfo property.
     */
    public set fileEncryptionInfo(value: FileEncryptionInfo | undefined) {
        this._fileEncryptionInfo = value;
    };
}
