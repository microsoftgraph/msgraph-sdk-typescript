import {ItemReferenceImpl} from '../../../../models/';
import {createItemReferenceFromDiscriminatorValue} from '../../../../models/createItemReferenceFromDiscriminatorValue';
import {ItemReference} from '../../../../models/itemReference';
import {CopyPostRequestBody} from './copyPostRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** Provides operations to call the copy method. */
export class CopyPostRequestBodyImpl implements CopyPostRequestBody {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    private _additionalData: Record<string, unknown>;
    /** The name property */
    private _name?: string | undefined;
    /** The parentReference property */
    private _parentReference?: ItemReference | undefined;
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
     * Instantiates a new copyPostRequestBody and sets the default values.
     * @param copyPostRequestBodyParameterValue 
     */
    public constructor(copyPostRequestBodyParameterValue?: CopyPostRequestBody | undefined) {
        this._additionalData = copyPostRequestBodyParameterValue?.additionalData ? copyPostRequestBodyParameterValue?.additionalData! : {};
        this._name = copyPostRequestBodyParameterValue?.name;
        this._parentReference = copyPostRequestBodyParameterValue?.parentReference;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "name": n => { this.name = n.getStringValue(); },
            "parentReference": n => { this.parentReference = n.getObjectValue<ItemReferenceImpl>(createItemReferenceFromDiscriminatorValue); },
        };
    };
    /**
     * Gets the name property value. The name property
     * @returns a string
     */
    public get name() {
        return this._name;
    };
    /**
     * Sets the name property value. The name property
     * @param value Value to set for the name property.
     */
    public set name(value: string | undefined) {
        if(value) {
            this._name = value;
        }
    };
    /**
     * Gets the parentReference property value. The parentReference property
     * @returns a ItemReferenceInterface
     */
    public get parentReference() {
        return this._parentReference;
    };
    /**
     * Sets the parentReference property value. The parentReference property
     * @param value Value to set for the parentReference property.
     */
    public set parentReference(value: ItemReference | undefined) {
        if(value) {
            this._parentReference = value instanceof ItemReferenceImpl? value : new ItemReferenceImpl(value);
        }
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        if(this.name){
            writer.writeStringValue("name", this.name);
        }
        if(this.parentReference){
            writer.writeObjectValue<ItemReferenceImpl>("parentReference", (!this.parentReference || this.parentReference instanceof ItemReferenceImpl? this.parentReference : new ItemReferenceImpl(this.parentReference)));
        }
        writer.writeAdditionalData(this.additionalData);
    };
}
