import {ItemReferenceImpl} from '../../../../models/';
import {createItemReferenceFromDiscriminatorValue} from '../../../../models/createItemReferenceFromDiscriminatorValue';
import {ItemReference} from '../../../../models/itemReference';
import {RestorePostRequestBody} from './restorePostRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** Provides operations to call the restore method. */
export class RestorePostRequestBodyImpl implements RestorePostRequestBody {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    private _additionalData?: Record<string, unknown> | undefined;
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
    public set additionalData(value: Record<string, unknown> | undefined) {
        if(value) {
            this._additionalData = value;
        }
    };
    /**
     * Instantiates a new restorePostRequestBody and sets the default values.
     * @param restorePostRequestBodyParameterValue 
     */
    public constructor(restorePostRequestBodyParameterValue?: RestorePostRequestBody | undefined) {
        this._additionalData = restorePostRequestBodyParameterValue?.additionalData ? restorePostRequestBodyParameterValue?.additionalData! : {};
        this._name = restorePostRequestBodyParameterValue?.name;
        this._parentReference = restorePostRequestBodyParameterValue?.parentReference;
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
            this._parentReference = value instanceof ItemReferenceImpl? value as ItemReferenceImpl: new ItemReferenceImpl(value);
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
            writer.writeObjectValue<ItemReferenceImpl>("parentReference", (this.parentReference instanceof ItemReferenceImpl? this.parentReference as ItemReferenceImpl: new ItemReferenceImpl(this.parentReference)));
        }
        writer.writeAdditionalData(this.additionalData);
    };
}
