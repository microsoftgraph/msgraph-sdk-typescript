import {SubscribeToTonePostRequestBody} from './subscribeToTonePostRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** Provides operations to call the subscribeToTone method. */
export class SubscribeToTonePostRequestBodyImpl implements SubscribeToTonePostRequestBody {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    private _additionalData: Record<string, unknown>;
    /** The clientContext property */
    private _clientContext?: string | undefined;
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
     * Gets the clientContext property value. The clientContext property
     * @returns a string
     */
    public get clientContext() {
        return this._clientContext;
    };
    /**
     * Sets the clientContext property value. The clientContext property
     * @param value Value to set for the clientContext property.
     */
    public set clientContext(value: string | undefined) {
        if(value) {
            this._clientContext = value;
        }
    };
    /**
     * Instantiates a new subscribeToTonePostRequestBody and sets the default values.
     * @param subscribeToTonePostRequestBodyParameterValue 
     */
    public constructor(subscribeToTonePostRequestBodyParameterValue?: SubscribeToTonePostRequestBody | undefined) {
        this._additionalData = subscribeToTonePostRequestBodyParameterValue?.additionalData ? subscribeToTonePostRequestBodyParameterValue?.additionalData! : {};
        this._clientContext = subscribeToTonePostRequestBodyParameterValue?.clientContext;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "clientContext": n => { this.clientContext = n.getStringValue(); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        if(this.clientContext){
            writer.writeStringValue("clientContext", this.clientContext);
        }
        writer.writeAdditionalData(this.additionalData);
    };
}
