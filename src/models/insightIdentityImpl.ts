import {InsightIdentity} from './insightIdentity';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class InsightIdentityImpl implements InsightIdentity {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    private _additionalData: Record<string, unknown>;
    /** The email address of the user who shared the item. */
    private _address?: string | undefined;
    /** The display name of the user who shared the item. */
    private _displayName?: string | undefined;
    /** The id of the user who shared the item. */
    private _id?: string | undefined;
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
     * Gets the address property value. The email address of the user who shared the item.
     * @returns a string
     */
    public get address() {
        return this._address;
    };
    /**
     * Sets the address property value. The email address of the user who shared the item.
     * @param value Value to set for the address property.
     */
    public set address(value: string | undefined) {
        if(value) {
            this._address = value;
        }
    };
    /**
     * Instantiates a new insightIdentity and sets the default values.
     * @param insightIdentityParameterValue 
     */
    public constructor(insightIdentityParameterValue?: InsightIdentity | undefined) {
        this._additionalData = insightIdentityParameterValue?.additionalData ? insightIdentityParameterValue?.additionalData! : {};
        this._address = insightIdentityParameterValue?.address;
        this._displayName = insightIdentityParameterValue?.displayName;
        this._id = insightIdentityParameterValue?.id;
    };
    /**
     * Gets the displayName property value. The display name of the user who shared the item.
     * @returns a string
     */
    public get displayName() {
        return this._displayName;
    };
    /**
     * Sets the displayName property value. The display name of the user who shared the item.
     * @param value Value to set for the displayName property.
     */
    public set displayName(value: string | undefined) {
        if(value) {
            this._displayName = value;
        }
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "address": n => { this.address = n.getStringValue(); },
            "displayName": n => { this.displayName = n.getStringValue(); },
            "id": n => { this.id = n.getStringValue(); },
        };
    };
    /**
     * Gets the id property value. The id of the user who shared the item.
     * @returns a string
     */
    public get id() {
        return this._id;
    };
    /**
     * Sets the id property value. The id of the user who shared the item.
     * @param value Value to set for the id property.
     */
    public set id(value: string | undefined) {
        if(value) {
            this._id = value;
        }
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        if(this.address){
            writer.writeStringValue("address", this.address);
        }
        if(this.displayName){
            writer.writeStringValue("displayName", this.displayName);
        }
        if(this.id){
            writer.writeStringValue("id", this.id);
        }
        writer.writeAdditionalData(this.additionalData);
    };
}
