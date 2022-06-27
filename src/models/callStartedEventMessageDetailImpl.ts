import {CallStartedEventMessageDetail} from './callStartedEventMessageDetail';
import {createIdentitySetFromDiscriminatorValue} from './createIdentitySetFromDiscriminatorValue';
import {IdentitySet} from './identitySet';
import {EventMessageDetailImpl, IdentitySetImpl} from './index';
import {TeamworkCallEventType} from './teamworkCallEventType';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class CallStartedEventMessageDetailImpl extends EventMessageDetailImpl implements CallStartedEventMessageDetail {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    public additionalData: Record<string, unknown>;
    /** Represents the call event type. Possible values are: call, meeting, screenShare, unknownFutureValue. */
    public callEventType?: TeamworkCallEventType | undefined;
    /** Unique identifier of the call. */
    public callId?: string | undefined;
    /** Initiator of the event. */
    public initiator?: IdentitySet | undefined;
    /**
     * Instantiates a new CallStartedEventMessageDetail and sets the default values.
     * @param callStartedEventMessageDetailParameterValue 
     */
    public constructor(callStartedEventMessageDetailParameterValue?: CallStartedEventMessageDetail | undefined) {
        super(callStartedEventMessageDetailParameterValue);
        this.additionalData = callStartedEventMessageDetailParameterValue?.additionalData ? callStartedEventMessageDetailParameterValue?.additionalData! : {};
        this.callEventType = callStartedEventMessageDetailParameterValue?.callEventType;
        this.callId = callStartedEventMessageDetailParameterValue?.callId;
        this.initiator = callStartedEventMessageDetailParameterValue?.initiator instanceof IdentitySetImpl? callStartedEventMessageDetailParameterValue?.initiator:new IdentitySetImpl(callStartedEventMessageDetailParameterValue?.initiator);
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {...super.getFieldDeserializers(),
            "callEventType": n => { this.callEventType = n.getEnumValue<TeamworkCallEventType>(TeamworkCallEventType); },
            "callId": n => { this.callId = n.getStringValue(); },
            "initiator": n => { this.initiator = n.getObjectValue<IdentitySetImpl>(createIdentitySetFromDiscriminatorValue); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        if(this.callEventType){
            writer.writeEnumValue<TeamworkCallEventType>("callEventType", this.callEventType);
        }
        if(this.callId){
            writer.writeStringValue("callId", this.callId);
        }
        if(this.initiator){
            writer.writeObjectValue<IdentitySetImpl>("initiator", new IdentitySetImpl(this.initiator));
        }
        writer.writeAdditionalData(this.additionalData);
    };
}
