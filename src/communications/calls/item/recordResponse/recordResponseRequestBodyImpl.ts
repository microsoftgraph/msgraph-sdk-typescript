import {PromptImpl} from '../../../../models/';
import {createPromptFromDiscriminatorValue} from '../../../../models/createPromptFromDiscriminatorValue';
import {Prompt} from '../../../../models/prompt';
import {RecordResponseRequestBody} from './recordResponseRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** Provides operations to call the recordResponse method.  */
export class RecordResponseRequestBodyImpl implements AdditionalDataHolder, Parsable, RecordResponseRequestBody {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.  */
    additionalData: Record<string, unknown>;
    /** The bargeInAllowed property  */
    bargeInAllowed?: boolean | undefined;
    /** The clientContext property  */
    clientContext?: string | undefined;
    /** The initialSilenceTimeoutInSeconds property  */
    initialSilenceTimeoutInSeconds?: number | undefined;
    /** The maxRecordDurationInSeconds property  */
    maxRecordDurationInSeconds?: number | undefined;
    /** The maxSilenceTimeoutInSeconds property  */
    maxSilenceTimeoutInSeconds?: number | undefined;
    /** The playBeep property  */
    playBeep?: boolean | undefined;
    /** The prompts property  */
    prompts?: Prompt[] | undefined;
    /** The stopTones property  */
    stopTones?: string[] | undefined;
    /**
     * Instantiates a new recordResponseRequestBody and sets the default values.
     * @param recordResponseRequestBodyParameterValue 
     */
    public constructor(recordResponseRequestBodyParameterValue?: RecordResponseRequestBody | undefined) {
        this.additionalData = {};
        this.additionalData = recordResponseRequestBodyParameterValue?.additionalData ? {} : recordResponseRequestBodyParameterValue?.additionalData!
        this.bargeInAllowed = recordResponseRequestBodyParameterValue?.bargeInAllowed ;
        this.clientContext = recordResponseRequestBodyParameterValue?.clientContext ;
        this.initialSilenceTimeoutInSeconds = recordResponseRequestBodyParameterValue?.initialSilenceTimeoutInSeconds ;
        this.maxRecordDurationInSeconds = recordResponseRequestBodyParameterValue?.maxRecordDurationInSeconds ;
        this.maxSilenceTimeoutInSeconds = recordResponseRequestBodyParameterValue?.maxSilenceTimeoutInSeconds ;
        this.playBeep = recordResponseRequestBodyParameterValue?.playBeep ;
        this.prompts = recordResponseRequestBodyParameterValue?.prompts ;
        this.stopTones = recordResponseRequestBodyParameterValue?.stopTones ;
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
        if(this.bargeInAllowed)
        writer.writeBooleanValue("bargeInAllowed", this.bargeInAllowed);
        }
        if(this.clientContext){
        if(this.clientContext)
        writer.writeStringValue("clientContext", this.clientContext);
        }
        if(this.initialSilenceTimeoutInSeconds){
        if(this.initialSilenceTimeoutInSeconds)
        writer.writeNumberValue("initialSilenceTimeoutInSeconds", this.initialSilenceTimeoutInSeconds);
        }
        if(this.maxRecordDurationInSeconds){
        if(this.maxRecordDurationInSeconds)
        writer.writeNumberValue("maxRecordDurationInSeconds", this.maxRecordDurationInSeconds);
        }
        if(this.maxSilenceTimeoutInSeconds){
        if(this.maxSilenceTimeoutInSeconds)
        writer.writeNumberValue("maxSilenceTimeoutInSeconds", this.maxSilenceTimeoutInSeconds);
        }
        if(this.playBeep){
        if(this.playBeep)
        writer.writeBooleanValue("playBeep", this.playBeep);
        }
        if(this.prompts){
        const promptsArrValue: PromptImpl[] = []; this.prompts?.forEach(element => {promptsArrValue.push(new PromptImpl(element));});
        writer.writeCollectionOfObjectValues<PromptImpl>("prompts", promptsArrValue);
        }
        if(this.stopTones){
        if(this.stopTones)
        writer.writeCollectionOfPrimitiveValues<string>("stopTones", this.stopTones);
        }
        writer.writeAdditionalData(this.additionalData);
    };
}
