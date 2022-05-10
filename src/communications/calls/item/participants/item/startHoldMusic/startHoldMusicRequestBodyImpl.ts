import {PromptImpl} from '../../../../../../models/';
import {createPromptFromDiscriminatorValue} from '../../../../../../models/createPromptFromDiscriminatorValue';
import {Prompt} from '../../../../../../models/prompt';
import {StartHoldMusicRequestBody} from './startHoldMusicRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** Provides operations to call the startHoldMusic method.  */
export class StartHoldMusicRequestBodyImpl implements AdditionalDataHolder, Parsable, StartHoldMusicRequestBody {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.  */
    additionalData: Record<string, unknown>;
    /** The clientContext property  */
    clientContext?: string | undefined;
    /** The customPrompt property  */
    customPrompt?: Prompt | undefined;
    /**
     * Instantiates a new startHoldMusicRequestBody and sets the default values.
     * @param startHoldMusicRequestBodyParameterValue 
     */
    public constructor(startHoldMusicRequestBodyParameterValue?: StartHoldMusicRequestBody | undefined) {
        this.additionalData = {};
        this.additionalData = startHoldMusicRequestBodyParameterValue?.additionalData ? {} : startHoldMusicRequestBodyParameterValue?.additionalData!
        this.clientContext = startHoldMusicRequestBodyParameterValue?.clientContext ;
        this.customPrompt = startHoldMusicRequestBodyParameterValue?.customPrompt ;
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
        if(this.clientContext)
        writer.writeStringValue("clientContext", this.clientContext);
        }
        if(this.customPrompt){
        if(this.customPrompt)
        writer.writeObjectValue<PromptImpl>("customPrompt", new PromptImpl(this.customPrompt));
        }
        writer.writeAdditionalData(this.additionalData);
    };
}
