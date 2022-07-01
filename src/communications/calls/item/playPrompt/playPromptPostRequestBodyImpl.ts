import {PromptImpl} from '../../../../models/';
import {createPromptFromDiscriminatorValue} from '../../../../models/createPromptFromDiscriminatorValue';
import {Prompt} from '../../../../models/prompt';
import {PlayPromptPostRequestBody} from './playPromptPostRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** Provides operations to call the playPrompt method. */
export class PlayPromptPostRequestBodyImpl implements PlayPromptPostRequestBody {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    private _additionalData?: Record<string, unknown> | undefined;
    /** The clientContext property */
    private _clientContext?: string | undefined;
    /** The prompts property */
    private _prompts?: Prompt[] | undefined;
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
     * Instantiates a new playPromptPostRequestBody and sets the default values.
     * @param playPromptPostRequestBodyParameterValue 
     */
    public constructor(playPromptPostRequestBodyParameterValue?: PlayPromptPostRequestBody | undefined) {
        this._additionalData = playPromptPostRequestBodyParameterValue?.additionalData ? playPromptPostRequestBodyParameterValue?.additionalData! : {};
        this._clientContext = playPromptPostRequestBodyParameterValue?.clientContext;
        this._prompts = playPromptPostRequestBodyParameterValue?.prompts;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "clientContext": n => { this.clientContext = n.getStringValue(); },
            "prompts": n => { this.prompts = n.getCollectionOfObjectValues<PromptImpl>(createPromptFromDiscriminatorValue); },
        };
    };
    /**
     * Gets the prompts property value. The prompts property
     * @returns a PromptInterface
     */
    public get prompts() {
        return this._prompts;
    };
    /**
     * Sets the prompts property value. The prompts property
     * @param value Value to set for the prompts property.
     */
    public set prompts(value: Prompt[] | undefined) {
        if(value) {
            const promptsArrValue: PromptImpl[] = [];
            this.prompts?.forEach(element => {
                promptsArrValue.push((element instanceof PromptImpl? element:new PromptImpl(element)));
            });
            this._prompts = promptsArrValue;
        }
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
        if(this.prompts && this.prompts.length != 0){        const promptsArrValue: PromptImpl[] = [];
        this.prompts?.forEach(element => {
            promptsArrValue.push((element instanceof PromptImpl? element:new PromptImpl(element)));
        });
            writer.writeCollectionOfObjectValues<PromptImpl>("prompts", promptsArrValue);
        }
        writer.writeAdditionalData(this.additionalData);
    };
}
