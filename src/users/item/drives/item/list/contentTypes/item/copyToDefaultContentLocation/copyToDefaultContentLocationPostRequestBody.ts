import {ItemReference} from '../../../../../../../../models/';
import {createItemReferenceFromDiscriminatorValue} from '../../../../../../../../models/createItemReferenceFromDiscriminatorValue';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class CopyToDefaultContentLocationPostRequestBody implements AdditionalDataHolder, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    private _additionalData: Record<string, unknown>;
    /** The destinationFileName property */
    private _destinationFileName?: string | undefined;
    /** The sourceFile property */
    private _sourceFile?: ItemReference | undefined;
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
     * Instantiates a new copyToDefaultContentLocationPostRequestBody and sets the default values.
     */
    public constructor() {
        this._additionalData = {};
    };
    /**
     * Gets the destinationFileName property value. The destinationFileName property
     * @returns a string
     */
    public get destinationFileName() {
        return this._destinationFileName;
    };
    /**
     * Sets the destinationFileName property value. The destinationFileName property
     * @param value Value to set for the destinationFileName property.
     */
    public set destinationFileName(value: string | undefined) {
        this._destinationFileName = value;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "destinationFileName": n => { this.destinationFileName = n.getStringValue(); },
            "sourceFile": n => { this.sourceFile = n.getObjectValue<ItemReference>(createItemReferenceFromDiscriminatorValue); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        writer.writeStringValue("destinationFileName", this.destinationFileName);
        writer.writeObjectValue<ItemReference>("sourceFile", this.sourceFile);
        writer.writeAdditionalData(this.additionalData);
    };
    /**
     * Gets the sourceFile property value. The sourceFile property
     * @returns a itemReference
     */
    public get sourceFile() {
        return this._sourceFile;
    };
    /**
     * Sets the sourceFile property value. The sourceFile property
     * @param value Value to set for the sourceFile property.
     */
    public set sourceFile(value: ItemReference | undefined) {
        this._sourceFile = value;
    };
}
