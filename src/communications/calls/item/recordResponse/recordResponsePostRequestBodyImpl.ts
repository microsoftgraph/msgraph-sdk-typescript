import {PromptImpl} from '../../../../models/';
import {createPromptFromDiscriminatorValue} from '../../../../models/createPromptFromDiscriminatorValue';
import {Prompt} from '../../../../models/prompt';
import {RecordResponsePostRequestBody} from './recordResponsePostRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** Provides operations to call the recordResponse method. */
export class RecordResponsePostRequestBodyImpl implements AdditionalDataHolder, Parsable, RecordResponsePostRequestBody {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    public additionalData: Record<string, unknown>;
    /** The bargeInAllowed property */
    public bargeInAllowed?: boolean | undefined;
    /** The clientContext property */
    public clientContext?: string | undefined;
    /** The initialSilenceTimeoutInSeconds property */
    public initialSilenceTimeoutInSeconds?: number | undefined;
    /** The maxRecordDurationInSeconds property */
    public maxRecordDurationInSeconds?: number | undefined;
    /** The maxSilenceTimeoutInSeconds property */
    public maxSilenceTimeoutInSeconds?: number | undefined;
    /** The playBeep property */
    public playBeep?: boolean | undefined;
    /** The prompts property */
    public prompts?: Prompt[] | undefined;
    /** The stopTones property */
    public stopTones?: string[] | undefined;
    /**
     * Instantiates a new recordResponsePostRequestBody and sets the default values.
     * @param recordResponsePostRequestBodyParameterValue 
     */
    public constructor(recordResponsePostRequestBodyParameterValue?: RecordResponsePostRequestBody | undefined) {
        this.additionalData = recordResponsePostRequestBodyParameterValue?.additionalData ? recordResponsePostRequestBodyParameterValue?.additionalData! : {}
        this.bargeInAllowed = recordResponsePostRequestBodyParameterValue?.bargeInAllowed ;
        this.clientContext = recordResponsePostRequestBodyParameterValue?.clientContext ;
        this.initialSilenceTimeoutInSeconds = recordResponsePostRequestBodyParameterValue?.initialSilenceTimeoutInSeconds ;
        this.maxRecordDurationInSeconds = recordResponsePostRequestBodyParameterValue?.maxRecordDurationInSeconds ;
        this.maxSilenceTimeoutInSeconds = recordResponsePostRequestBodyParameterValue?.maxSilenceTimeoutInSeconds ;
        this.playBeep = recordResponsePostRequestBodyParameterValue?.playBeep ;
        this.prompts = recordResponsePostRequestBodyParameterValue?.prompts ;
        this.stopTones = recordResponsePostRequestBodyParameterValue?.stopTones ;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "bargeInAllowed": n => { this.bargeInAllowed = n.getBooleanValue(); },
            "clientContext": n => { this.clientContext = n.getStringValue(); },
            "initialSilenceTimeoutInSeconds": n => { this.initialSilenceTimeoutInSeconds = n.getNumberValue(); },
            "maxRecordDurationInSeconds": n => { this.maxRecordDurationInSeconds = n.getNumberValue(); },
            "maxSilenceTimeoutInSeconds": n => { this.maxSilenceTimeoutInSeconds = n.getNumberValue(); },
            "playBeep": n => { this.playBeep = n.getBooleanValue(); },
            "prompts": n => { this.prompts = n.getCollectionOfObjectValues<PromptImpl>(createPromptFromDiscriminatorValue); },
            "stopTones": n => { this.stopTones = n.getCollectionOfPrimitiveValues<string>(); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        if(this.bargeInAllowed){
        writer.writeBooleanValue("bargeInAllowed", this.bargeInAllowed);
        }
        if(this.clientContext){
        writer.writeStringValue("clientContext", this.clientContext);
        }
        if(this.initialSilenceTimeoutInSeconds){
        writer.writeNumberValue("initialSilenceTimeoutInSeconds", this.initialSilenceTimeoutInSeconds);
        }
        if(this.maxRecordDurationInSeconds){
        writer.writeNumberValue("maxRecordDurationInSeconds", this.maxRecordDurationInSeconds);
        }
        if(this.maxSilenceTimeoutInSeconds){
        writer.writeNumberValue("maxSilenceTimeoutInSeconds", this.maxSilenceTimeoutInSeconds);
        }
        if(this.playBeep){
        writer.writeBooleanValue("playBeep", this.playBeep);
        }
        if(this.prompts && this.prompts.length != 0){        const promptsArrValue: PromptImpl[] = []; this.prompts?.forEach(element => {promptsArrValue.push(new PromptImpl(element));});
        writer.writeCollectionOfObjectValues<PromptImpl>("prompts", promptsArrValue);
        }
        if(this.stopTones){
        writer.writeCollectionOfPrimitiveValues<string>("stopTones", this.stopTones);
        }
        writer.writeAdditionalData(this.additionalData);
    };
}
