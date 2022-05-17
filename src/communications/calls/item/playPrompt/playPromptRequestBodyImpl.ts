import {PromptImpl} from '../../../../models/';
import {createPromptFromDiscriminatorValue} from '../../../../models/createPromptFromDiscriminatorValue';
import {Prompt} from '../../../../models/prompt';
import {PlayPromptRequestBody} from './playPromptRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** Provides operations to call the playPrompt method. */
export class PlayPromptRequestBodyImpl implements AdditionalDataHolder, Parsable, PlayPromptRequestBody {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData: Record<string, unknown>;
    /** The clientContext property */
    clientContext?: string | undefined;
    /** The prompts property */
    prompts?: Prompt[] | undefined;
    /**
     * Instantiates a new playPromptRequestBody and sets the default values.
     * @param playPromptRequestBodyParameterValue 
     */
    public constructor(playPromptRequestBodyParameterValue?: PlayPromptRequestBody | undefined) {
        this.additionalData = {};
        this.additionalData = playPromptRequestBodyParameterValue?.additionalData ? {} : playPromptRequestBodyParameterValue?.additionalData!
        this.clientContext = playPromptRequestBodyParameterValue?.clientContext ;
        this.prompts = playPromptRequestBodyParameterValue?.prompts ;
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
        if(this.clientContext)
        writer.writeStringValue("clientContext", this.clientContext);
        }
        if(this.prompts){
        const promptsArrValue: PromptImpl[] = []; this.prompts?.forEach(element => {promptsArrValue.push(new PromptImpl(element));});
        writer.writeCollectionOfObjectValues<PromptImpl>("prompts", promptsArrValue);
        }
        writer.writeAdditionalData(this.additionalData);
    };
}
