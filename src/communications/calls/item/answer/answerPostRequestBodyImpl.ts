import {IncomingCallOptionsImpl, MediaConfigImpl} from '../../../../models/';
import {createIncomingCallOptionsFromDiscriminatorValue} from '../../../../models/createIncomingCallOptionsFromDiscriminatorValue';
import {createMediaConfigFromDiscriminatorValue} from '../../../../models/createMediaConfigFromDiscriminatorValue';
import {IncomingCallOptions} from '../../../../models/incomingCallOptions';
import {MediaConfig} from '../../../../models/mediaConfig';
import {AnswerPostRequestBody} from './answerPostRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** Provides operations to call the answer method. */
export class AnswerPostRequestBodyImpl implements AdditionalDataHolder, AnswerPostRequestBody, Parsable {
    /** The acceptedModalities property */
    public acceptedModalities?: string[] | undefined;
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    public additionalData: Record<string, unknown>;
    /** The callbackUri property */
    public callbackUri?: string | undefined;
    /** The callOptions property */
    public callOptions?: IncomingCallOptions | undefined;
    /** The mediaConfig property */
    public mediaConfig?: MediaConfig | undefined;
    /** The participantCapacity property */
    public participantCapacity?: number | undefined;
    /**
     * Instantiates a new answerPostRequestBody and sets the default values.
     * @param answerPostRequestBodyParameterValue 
     */
    public constructor(answerPostRequestBodyParameterValue?: AnswerPostRequestBody | undefined) {
        this.acceptedModalities = answerPostRequestBodyParameterValue?.acceptedModalities ;
        this.additionalData = answerPostRequestBodyParameterValue?.additionalData ? answerPostRequestBodyParameterValue?.additionalData! : {}
        this.callbackUri = answerPostRequestBodyParameterValue?.callbackUri ;
        this.callOptions = answerPostRequestBodyParameterValue?.callOptions ;
        this.mediaConfig = answerPostRequestBodyParameterValue?.mediaConfig ;
        this.participantCapacity = answerPostRequestBodyParameterValue?.participantCapacity ;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "acceptedModalities": n => { this.acceptedModalities = n.getCollectionOfPrimitiveValues<string>(); },
            "callbackUri": n => { this.callbackUri = n.getStringValue(); },
            "callOptions": n => { this.callOptions = n.getObjectValue<IncomingCallOptionsImpl>(createIncomingCallOptionsFromDiscriminatorValue); },
            "mediaConfig": n => { this.mediaConfig = n.getObjectValue<MediaConfigImpl>(createMediaConfigFromDiscriminatorValue); },
            "participantCapacity": n => { this.participantCapacity = n.getNumberValue(); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        if(this.acceptedModalities){
        writer.writeCollectionOfPrimitiveValues<string>("acceptedModalities", this.acceptedModalities);
        }
        if(this.callbackUri){
        writer.writeStringValue("callbackUri", this.callbackUri);
        }
        if(this.callOptions){
        writer.writeObjectValue<IncomingCallOptionsImpl>("callOptions", new IncomingCallOptionsImpl(this.callOptions));
        }
        if(this.mediaConfig){
        writer.writeObjectValue<MediaConfigImpl>("mediaConfig", new MediaConfigImpl(this.mediaConfig));
        }
        if(this.participantCapacity){
        writer.writeNumberValue("participantCapacity", this.participantCapacity);
        }
        writer.writeAdditionalData(this.additionalData);
    };
}
