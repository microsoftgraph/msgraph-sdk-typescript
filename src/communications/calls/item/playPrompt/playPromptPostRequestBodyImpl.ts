import {PromptImpl} from '../../../../models/';
import {createPromptFromDiscriminatorValue} from '../../../../models/createPromptFromDiscriminatorValue';
import {Prompt} from '../../../../models/prompt';
import {PlayPromptPostRequestBody} from './playPromptPostRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** Provides operations to call the playPrompt method. */
export class PlayPromptPostRequestBodyImpl implements AdditionalDataHolder, Parsable, PlayPromptPostRequestBody {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    public additionalData: Record<string, unknown>;
    /** The clientContext property */
    public clientContext?: string | undefined;
    /** The prompts property */
    public prompts?: Prompt[] | undefined;
    /**
     * Instantiates a new playPromptPostRequestBody and sets the default values.
     * @param playPromptPostRequestBodyParameterValue 
     */
    public constructor(playPromptPostRequestBodyParameterValue?: PlayPromptPostRequestBody | undefined) {
        this.additionalData = playPromptPostRequestBodyParameterValue?.additionalData ? playPromptPostRequestBodyParameterValue?.additionalData! : {}
        this.clientContext = playPromptPostRequestBodyParameterValue?.clientContext ;
        this.prompts = playPromptPostRequestBodyParameterValue?.prompts ;
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
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        if(this.clientContext){
        writer.writeStringValue("clientContext", this.clientContext);
        }
        if(this.prompts && this.prompts.length != 0){        const promptsArrValue: PromptImpl[] = []; this.prompts?.forEach(element => {promptsArrValue.push(new PromptImpl(element));});
        writer.writeCollectionOfObjectValues<PromptImpl>("prompts", promptsArrValue);
        }
        writer.writeAdditionalData(this.additionalData);
    };
}
