import {ReferenceUpdateSchema} from './referenceUpdateSchema';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class ReferenceUpdateSchemaImpl implements ReferenceUpdateSchema {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    private _additionalData: Record<string, unknown>;
    /** The id property */
    private _id?: string | undefined;
    /** The type property */
    private _type?: string | undefined;
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
     * Instantiates a new ReferenceUpdateSchema and sets the default values.
     * @param referenceUpdateSchemaParameterValue 
     */
    public constructor(referenceUpdateSchemaParameterValue?: ReferenceUpdateSchema | undefined) {
        this._additionalData = referenceUpdateSchemaParameterValue?.additionalData ? referenceUpdateSchemaParameterValue?.additionalData! : {};
        this._id = referenceUpdateSchemaParameterValue?.id;
        this._type = referenceUpdateSchemaParameterValue?.type;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "@odata.id": n => { this.id = n.getStringValue(); },
            "@odata.type": n => { this.type = n.getStringValue(); },
        };
    };
    /**
     * Gets the @odata.id property value. The id property
     * @returns a string
     */
    public get id() {
        return this._id;
    };
    /**
     * Sets the @odata.id property value. The id property
     * @param value Value to set for the id property.
     */
    public set id(value: string | undefined) {
        if(value) {
            this._id = value;
        }
    };
    /**
     * Gets the @odata.type property value. The type property
     * @returns a string
     */
    public get type() {
        return this._type;
    };
    /**
     * Sets the @odata.type property value. The type property
     * @param value Value to set for the type property.
     */
    public set type(value: string | undefined) {
        if(value) {
            this._type = value;
        }
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        if(this.id){
            writer.writeStringValue("@odata.id", this.id);
        }
        if(this.type){
            writer.writeStringValue("@odata.type", this.type);
        }
        writer.writeAdditionalData(this.additionalData);
    };
}
