import {CallEndedEventMessageDetail} from './callEndedEventMessageDetail';
import {CallParticipantInfo} from './callParticipantInfo';
import {createCallParticipantInfoFromDiscriminatorValue} from './createCallParticipantInfoFromDiscriminatorValue';
import {createIdentitySetFromDiscriminatorValue} from './createIdentitySetFromDiscriminatorValue';
import {IdentitySet} from './identitySet';
import {CallParticipantInfoImpl, EventMessageDetailImpl, IdentitySetImpl} from './index';
import {TeamworkCallEventType} from './teamworkCallEventType';
import {AdditionalDataHolder, Duration, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class CallEndedEventMessageDetailImpl extends EventMessageDetailImpl implements CallEndedEventMessageDetail {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    public additionalData: Record<string, unknown>;
    /** Duration of the call. */
    public callDuration?: Duration | undefined;
    /** Represents the call event type. Possible values are: call, meeting, screenShare, unknownFutureValue. */
    public callEventType?: TeamworkCallEventType | undefined;
    /** Unique identifier of the call. */
    public callId?: string | undefined;
    /** List of call participants. */
    public callParticipants?: CallParticipantInfo[] | undefined;
    /** Initiator of the event. */
    public initiator?: IdentitySet | undefined;
    /**
     * Instantiates a new CallEndedEventMessageDetail and sets the default values.
     * @param callEndedEventMessageDetailParameterValue 
     */
    public constructor(callEndedEventMessageDetailParameterValue?: CallEndedEventMessageDetail | undefined) {
        super(callEndedEventMessageDetailParameterValue);
        this.additionalData = callEndedEventMessageDetailParameterValue?.additionalData ? callEndedEventMessageDetailParameterValue?.additionalData! : {};
        this.callDuration = callEndedEventMessageDetailParameterValue?.callDuration;
        this.callEventType = callEndedEventMessageDetailParameterValue?.callEventType;
        this.callId = callEndedEventMessageDetailParameterValue?.callId;
        const callParticipantsArrValue: CallParticipantInfoImpl[] = []; callEndedEventMessageDetailParameterValue.callParticipants?.forEach(element => {callParticipantsArrValue.push(element instanceof CallParticipantInfoImpl? element : new CallParticipantInfoImpl(element));});
        this.callParticipants = callParticipantsArrValue;
        this.initiator = callEndedEventMessageDetailParameterValue?.initiator instanceof IdentitySetImpl? callEndedEventMessageDetailParameterValue?.initiator:new IdentitySetImpl(callEndedEventMessageDetailParameterValue?.initiator);
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {...super.getFieldDeserializers(),
            "callDuration": n => { this.callDuration = n.getDurationValue(); },
            "callEventType": n => { this.callEventType = n.getEnumValue<TeamworkCallEventType>(TeamworkCallEventType); },
            "callId": n => { this.callId = n.getStringValue(); },
            "callParticipants": n => { this.callParticipants = n.getCollectionOfObjectValues<CallParticipantInfoImpl>(createCallParticipantInfoFromDiscriminatorValue); },
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
        if(this.callDuration){
            writer.writeDurationValue("callDuration", this.callDuration);
        }
        if(this.callEventType){
            writer.writeEnumValue<TeamworkCallEventType>("callEventType", this.callEventType);
        }
        if(this.callId){
            writer.writeStringValue("callId", this.callId);
        }
        if(this.callParticipants && this.callParticipants.length != 0){        const callParticipantsArrValue: CallParticipantInfoImpl[] = []; this.callParticipants?.forEach(element => {callParticipantsArrValue.push(element instanceof CallParticipantInfoImpl? element : new CallParticipantInfoImpl(element));});
            writer.writeCollectionOfObjectValues<CallParticipantInfoImpl>("callParticipants", callParticipantsArrValue);
        }
        if(this.initiator){
            writer.writeObjectValue<IdentitySetImpl>("initiator", new IdentitySetImpl(this.initiator));
        }
        writer.writeAdditionalData(this.additionalData);
    };
}
