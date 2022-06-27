import {CallTranscriptEventMessageDetail} from './callTranscriptEventMessageDetail';
import {createIdentitySetFromDiscriminatorValue} from './createIdentitySetFromDiscriminatorValue';
import {IdentitySet} from './identitySet';
import {EventMessageDetailImpl, IdentitySetImpl} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class CallTranscriptEventMessageDetailImpl extends EventMessageDetailImpl implements CallTranscriptEventMessageDetail {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    public additionalData: Record<string, unknown>;
    /** Unique identifier of the call. */
    public callId?: string | undefined;
    /** Unique identifier for a call transcript. */
    public callTranscriptICalUid?: string | undefined;
    /** The organizer of the meeting. */
    public meetingOrganizer?: IdentitySet | undefined;
    /**
     * Instantiates a new CallTranscriptEventMessageDetail and sets the default values.
     * @param callTranscriptEventMessageDetailParameterValue 
     */
    public constructor(callTranscriptEventMessageDetailParameterValue?: CallTranscriptEventMessageDetail | undefined) {
        super(callTranscriptEventMessageDetailParameterValue);
        this.additionalData = callTranscriptEventMessageDetailParameterValue?.additionalData ? callTranscriptEventMessageDetailParameterValue?.additionalData! : {};
        this.callId = callTranscriptEventMessageDetailParameterValue?.callId;
        this.callTranscriptICalUid = callTranscriptEventMessageDetailParameterValue?.callTranscriptICalUid;
        this.meetingOrganizer = callTranscriptEventMessageDetailParameterValue?.meetingOrganizer instanceof IdentitySetImpl? callTranscriptEventMessageDetailParameterValue?.meetingOrganizer:new IdentitySetImpl(callTranscriptEventMessageDetailParameterValue?.meetingOrganizer);
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {...super.getFieldDeserializers(),
            "callId": n => { this.callId = n.getStringValue(); },
            "callTranscriptICalUid": n => { this.callTranscriptICalUid = n.getStringValue(); },
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
        if(this.callTranscriptICalUid){
            writer.writeStringValue("callTranscriptICalUid", this.callTranscriptICalUid);
        }
        if(this.meetingOrganizer){
            writer.writeObjectValue<IdentitySetImpl>("meetingOrganizer", new IdentitySetImpl(this.meetingOrganizer));
        }
        writer.writeAdditionalData(this.additionalData);
    };
}
