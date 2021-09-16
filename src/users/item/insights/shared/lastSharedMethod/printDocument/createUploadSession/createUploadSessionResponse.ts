import {PrintDocumentUploadProperties} from '../../../../../../../../me/insights/printDocumentUploadProperties';
import {SerializationWriter, ParseNode, Parsable} from '@microsoft/kiota-abstractions';

export class CreateUploadSessionResponse implements Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.  */
    private _additionalData: Map<string, unknown>;
    private _properties?: PrintDocumentUploadProperties | undefined;
    /**
     * Instantiates a new createUploadSessionResponse and sets the default values.
     */
    public constructor() {
        this._additionalData = new Map<string, unknown>();
    };
    /**
     * Gets the AdditionalData property value. Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     * @returns a Map<string, unknown>
     */
    public get additionalData() {
        return this._additionalData;
    };
    /**
     * Gets the properties property value. 
     * @returns a printDocumentUploadProperties
     */
    public get properties() {
        return this._properties;
    };
    /**
     * The deserialization information for the current model
     * @returns a Map<string, (item: T, node: ParseNode) => void>
     */
    public getFieldDeserializers<T>() : Map<string, (item: T, node: ParseNode) => void> {
        return new Map<string, (item: T, node: ParseNode) => void>([
            ["properties", (o, n) => { (o as unknown as CreateUploadSessionResponse).properties = n.getObjectValue<PrintDocumentUploadProperties>(PrintDocumentUploadProperties); }],
        ]);
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        writer.writeObjectValue<PrintDocumentUploadProperties>("properties", this.properties);
        writer.writeAdditionalData(this.additionalData);
    };
    /**
     * Sets the AdditionalData property value. Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     * @param value Value to set for the AdditionalData property.
     */
    public set additionalData(value: Map<string, unknown>) {
        this._additionalData = value;
    };
    /**
     * Sets the properties property value. 
     * @param value Value to set for the properties property.
     */
    public set properties(value: PrintDocumentUploadProperties | undefined) {
        this._properties = value;
    };
}
