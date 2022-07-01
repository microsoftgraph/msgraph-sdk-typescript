import {PromptImpl} from '../../../../../../models/';
import {createPromptFromDiscriminatorValue} from '../../../../../../models/createPromptFromDiscriminatorValue';
import {Prompt} from '../../../../../../models/prompt';
import {StartHoldMusicPostRequestBody} from './startHoldMusicPostRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** Provides operations to call the startHoldMusic method. */
export class StartHoldMusicPostRequestBodyImpl implements StartHoldMusicPostRequestBody {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    private _additionalData?: Record<string, unknown> | undefined;
    /** The clientContext property */
    private _clientContext?: string | undefined;
    /** The customPrompt property */
    private _customPrompt?: Prompt | undefined;
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
     * Instantiates a new startHoldMusicPostRequestBody and sets the default values.
     * @param startHoldMusicPostRequestBodyParameterValue 
     */
    public constructor(startHoldMusicPostRequestBodyParameterValue?: StartHoldMusicPostRequestBody | undefined) {
        this._additionalData = startHoldMusicPostRequestBodyParameterValue?.additionalData ? startHoldMusicPostRequestBodyParameterValue?.additionalData! : {};
        this._clientContext = startHoldMusicPostRequestBodyParameterValue?.clientContext;
        this._customPrompt = startHoldMusicPostRequestBodyParameterValue?.customPrompt;
    };
    /**
     * Gets the customPrompt property value. The customPrompt property
     * @returns a PromptInterface
     */
    public get customPrompt() {
        return this._customPrompt;
    };
    /**
     * Sets the customPrompt property value. The customPrompt property
     * @param value Value to set for the customPrompt property.
     */
    public set customPrompt(value: Prompt | undefined) {
        if(value) {
            this._customPrompt = value instanceof PromptImpl? value as PromptImpl: new PromptImpl(value);
        }
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "clientContext": n => { this.clientContext = n.getStringValue(); },
            "customPrompt": n => { this.customPrompt = n.getObjectValue<PromptImpl>(createPromptFromDiscriminatorValue); },
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
        if(this.customPrompt){
            writer.writeObjectValue<PromptImpl>("customPrompt", (this.customPrompt instanceof PromptImpl? this.customPrompt as PromptImpl: new PromptImpl(this.customPrompt)));
        }
        writer.writeAdditionalData(this.additionalData);
    };
}
