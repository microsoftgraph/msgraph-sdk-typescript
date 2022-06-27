import {CallRecordingEventMessageDetail} from './callRecordingEventMessageDetail';
import {CallRecordingStatus} from './callRecordingStatus';
import {createIdentitySetFromDiscriminatorValue} from './createIdentitySetFromDiscriminatorValue';
import {IdentitySet} from './identitySet';
import {EventMessageDetailImpl, IdentitySetImpl} from './index';
import {AdditionalDataHolder, Duration, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class CallRecordingEventMessageDetailImpl extends EventMessageDetailImpl implements CallRecordingEventMessageDetail {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    public additionalData: Record<string, unknown>;
    /** Unique identifier of the call. */
    public callId?: string | undefined;
    /** Display name for the call recording. */
    public callRecordingDisplayName?: string | undefined;
    /** Duration of the call recording. */
    public callRecordingDuration?: Duration | undefined;
    /** Status of the call recording. Possible values are: success, failure, initial, chunkFinished, unknownFutureValue. */
    public callRecordingStatus?: CallRecordingStatus | undefined;
    /** Call recording URL. */
    public callRecordingUrl?: string | undefined;
    /** Initiator of the event. */
    public initiator?: IdentitySet | undefined;
    /** Organizer of the meeting. */
    public meetingOrganizer?: IdentitySet | undefined;
    /**
     * Instantiates a new CallRecordingEventMessageDetail and sets the default values.
     * @param callRecordingEventMessageDetailParameterValue 
     */
    public constructor(callRecordingEventMessageDetailParameterValue?: CallRecordingEventMessageDetail | undefined) {
        super(callRecordingEventMessageDetailParameterValue);
        this.additionalData = callRecordingEventMessageDetailParameterValue?.additionalData ? callRecordingEventMessageDetailParameterValue?.additionalData! : {};
        this.callId = callRecordingEventMessageDetailParameterValue?.callId;
        this.callRecordingDisplayName = callRecordingEventMessageDetailParameterValue?.callRecordingDisplayName;
        this.callRecordingDuration = callRecordingEventMessageDetailParameterValue?.callRecordingDuration;
        this.callRecordingStatus = callRecordingEventMessageDetailParameterValue?.callRecordingStatus;
        this.callRecordingUrl = callRecordingEventMessageDetailParameterValue?.callRecordingUrl;
        this.initiator = callRecordingEventMessageDetailParameterValue?.initiator instanceof IdentitySetImpl? callRecordingEventMessageDetailParameterValue?.initiator:new IdentitySetImpl(callRecordingEventMessageDetailParameterValue?.initiator);
        this.meetingOrganizer = callRecordingEventMessageDetailParameterValue?.meetingOrganizer instanceof IdentitySetImpl? callRecordingEventMessageDetailParameterValue?.meetingOrganizer:new IdentitySetImpl(callRecordingEventMessageDetailParameterValue?.meetingOrganizer);
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {...super.getFieldDeserializers(),
            "callId": n => { this.callId = n.getStringValue(); },
            "callRecordingDisplayName": n => { this.callRecordingDisplayName = n.getStringValue(); },
            "callRecordingDuration": n => { this.callRecordingDuration = n.getDurationValue(); },
            "callRecordingStatus": n => { this.callRecordingStatus = n.getEnumValue<CallRecordingStatus>(CallRecordingStatus); },
            "callRecordingUrl": n => { this.callRecordingUrl = n.getStringValue(); },
            "initiator": n => { this.initiator = n.getObjectValue<IdentitySetImpl>(createIdentitySetFromDiscriminatorValue); },
            "meetingOrganizer": n => { this.meetingOrganizer = n.getObjectValue<IdentitySetImpl>(createIdentitySetFromDiscriminatorValue); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        if(this.callId){
            writer.writeStringValue("callId", this.callId);
        }
        if(this.callRecordingDisplayName){
            writer.writeStringValue("callRecordingDisplayName", this.callRecordingDisplayName);
        }
        if(this.callRecordingDuration){
            writer.writeDurationValue("callRecordingDuration", this.callRecordingDuration);
        }
        if(this.callRecordingStatus){
            writer.writeEnumValue<CallRecordingStatus>("callRecordingStatus", this.callRecordingStatus);
        }
        if(this.callRecordingUrl){
            writer.writeStringValue("callRecordingUrl", this.callRecordingUrl);
        }
        if(this.initiator){
            writer.writeObjectValue<IdentitySetImpl>("initiator", new IdentitySetImpl(this.initiator));
        }
        if(this.meetingOrganizer){
            writer.writeObjectValue<IdentitySetImpl>("meetingOrganizer", new IdentitySetImpl(this.meetingOrganizer));
        }
        writer.writeAdditionalData(this.additionalData);
    };
}
