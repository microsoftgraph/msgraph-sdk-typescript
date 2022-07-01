import {GetByIdsPostRequestBody} from './getByIdsPostRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** Provides operations to call the getByIds method. */
export class GetByIdsPostRequestBodyImpl implements GetByIdsPostRequestBody {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    private _additionalData?: Record<string, unknown> | undefined;
    /** The ids property */
    private _ids?: string[] | undefined;
    /** The types property */
    private _types?: string[] | undefined;
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
     * Instantiates a new getByIdsPostRequestBody and sets the default values.
     * @param getByIdsPostRequestBodyParameterValue 
     */
    public constructor(getByIdsPostRequestBodyParameterValue?: GetByIdsPostRequestBody | undefined) {
        this._additionalData = getByIdsPostRequestBodyParameterValue?.additionalData ? getByIdsPostRequestBodyParameterValue?.additionalData! : {};
        this._ids = getByIdsPostRequestBodyParameterValue?.ids;
        this._types = getByIdsPostRequestBodyParameterValue?.types;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "ids": n => { this.ids = n.getCollectionOfPrimitiveValues<string>(); },
            "types": n => { this.types = n.getCollectionOfPrimitiveValues<string>(); },
        };
    };
    /**
     * Gets the ids property value. The ids property
     * @returns a string
     */
    public get ids() {
        return this._ids;
    };
    /**
     * Sets the ids property value. The ids property
     * @param value Value to set for the ids property.
     */
    public set ids(value: string[] | undefined) {
        if(value) {
            this._ids = value;
        }
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        if(this.ids){
            writer.writeCollectionOfPrimitiveValues<string>("ids", this.ids);
        }
        if(this.types){
            writer.writeCollectionOfPrimitiveValues<string>("types", this.types);
        }
        writer.writeAdditionalData(this.additionalData);
    };
    /**
     * Gets the types property value. The types property
     * @returns a string
     */
    public get types() {
        return this._types;
    };
    /**
     * Sets the types property value. The types property
     * @param value Value to set for the types property.
     */
    public set types(value: string[] | undefined) {
        if(value) {
            this._types = value;
        }
    };
}
