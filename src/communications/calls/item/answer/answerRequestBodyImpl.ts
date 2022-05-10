import {IncomingCallOptionsImpl, MediaConfigImpl} from '../../../../models/';
import {createIncomingCallOptionsFromDiscriminatorValue} from '../../../../models/createIncomingCallOptionsFromDiscriminatorValue';
import {createMediaConfigFromDiscriminatorValue} from '../../../../models/createMediaConfigFromDiscriminatorValue';
import {IncomingCallOptions} from '../../../../models/incomingCallOptions';
import {MediaConfig} from '../../../../models/mediaConfig';
import {Modality} from '../../../../models/modality';
import {AnswerRequestBody} from './answerRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** Provides operations to call the answer method.  */
export class AnswerRequestBodyImpl implements AdditionalDataHolder, AnswerRequestBody, Parsable {
    /** The acceptedModalities property  */
    acceptedModalities?: Modality[] | undefined;
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.  */
    additionalData: Record<string, unknown>;
    /** The callbackUri property  */
    callbackUri?: string | undefined;
    /** The callOptions property  */
    callOptions?: IncomingCallOptions | undefined;
    /** The mediaConfig property  */
    mediaConfig?: MediaConfig | undefined;
    /** The participantCapacity property  */
    participantCapacity?: number | undefined;
    /**
     * Instantiates a new answerRequestBody and sets the default values.
     * @param answerRequestBodyParameterValue 
     */
    public constructor(answerRequestBodyParameterValue?: AnswerRequestBody | undefined) {
        this.additionalData = {};
        this.acceptedModalities = answerRequestBodyParameterValue?.acceptedModalities ;
        this.additionalData = answerRequestBodyParameterValue?.additionalData ? {} : answerRequestBodyParameterValue?.additionalData!
        this.callbackUri = answerRequestBodyParameterValue?.callbackUri ;
        this.callOptions = answerRequestBodyParameterValue?.callOptions ;
        this.mediaConfig = answerRequestBodyParameterValue?.mediaConfig ;
        this.participantCapacity = answerRequestBodyParameterValue?.participantCapacity ;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "acceptedModalities": n => { this.acceptedModalities = n.getEnumValues<Modality>(Modality); },
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
        if(this.acceptedModalities)
        this.acceptedModalities && writer.writeEnumValue<Modality>("acceptedModalities", ...this.acceptedModalities);
        }
        if(this.callbackUri){
        if(this.callbackUri)
        writer.writeStringValue("callbackUri", this.callbackUri);
        }
        if(this.callOptions){
        if(this.callOptions)
        writer.writeObjectValue<IncomingCallOptionsImpl>("callOptions", new IncomingCallOptionsImpl(this.callOptions));
        }
        if(this.mediaConfig){
        if(this.mediaConfig)
        writer.writeObjectValue<MediaConfigImpl>("mediaConfig", new MediaConfigImpl(this.mediaConfig));
        }
        if(this.participantCapacity){
        if(this.participantCapacity)
        writer.writeNumberValue("participantCapacity", this.participantCapacity);
        }
        writer.writeAdditionalData(this.additionalData);
    };
}
