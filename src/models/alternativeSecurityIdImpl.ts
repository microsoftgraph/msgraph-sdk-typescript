import {AlternativeSecurityId} from './alternativeSecurityId';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class AlternativeSecurityIdImpl implements AlternativeSecurityId {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    private _additionalData?: Record<string, unknown> | undefined;
    /** For internal use only */
    private _identityProvider?: string | undefined;
    /** For internal use only */
    private _key?: string | undefined;
    /** For internal use only */
    private _type?: number | undefined;
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
     * Instantiates a new alternativeSecurityId and sets the default values.
     * @param alternativeSecurityIdParameterValue 
     */
    public constructor(alternativeSecurityIdParameterValue?: AlternativeSecurityId | undefined) {
        this._additionalData = alternativeSecurityIdParameterValue?.additionalData ? alternativeSecurityIdParameterValue?.additionalData! : {};
        this._identityProvider = alternativeSecurityIdParameterValue?.identityProvider;
        this._key = alternativeSecurityIdParameterValue?.key;
        this._type = alternativeSecurityIdParameterValue?.type;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "identityProvider": n => { this.identityProvider = n.getStringValue(); },
            "key": n => { this.key = n.getStringValue(); },
            "type": n => { this.type = n.getNumberValue(); },
        };
    };
    /**
     * Gets the identityProvider property value. For internal use only
     * @returns a string
     */
    public get identityProvider() {
        return this._identityProvider;
    };
    /**
     * Sets the identityProvider property value. For internal use only
     * @param value Value to set for the identityProvider property.
     */
    public set identityProvider(value: string | undefined) {
        if(value) {
            this._identityProvider = value;
        }
    };
    /**
     * Gets the key property value. For internal use only
     * @returns a binary
     */
    public get key() {
        return this._key;
    };
    /**
     * Sets the key property value. For internal use only
     * @param value Value to set for the key property.
     */
    public set key(value: string | undefined) {
        if(value) {
            this._key = value;
        }
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        if(this.identityProvider){
            writer.writeStringValue("identityProvider", this.identityProvider);
        }
        if(this.key){
            writer.writeStringValue("key", this.key);
        }
        if(this.type){
            writer.writeNumberValue("type", this.type);
        }
        writer.writeAdditionalData(this.additionalData);
    };
    /**
     * Gets the type property value. For internal use only
     * @returns a integer
     */
    public get type() {
        return this._type;
    };
    /**
     * Sets the type property value. For internal use only
     * @param value Value to set for the type property.
     */
    public set type(value: number | undefined) {
        if(value) {
            this._type = value;
        }
    };
}
