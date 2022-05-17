import {createMediaStreamFromDiscriminatorValue} from './createMediaStreamFromDiscriminatorValue';
import {createParticipantInfoFromDiscriminatorValue} from './createParticipantInfoFromDiscriminatorValue';
import {createRecordingInfoFromDiscriminatorValue} from './createRecordingInfoFromDiscriminatorValue';
import {EntityImpl, MediaStreamImpl, ParticipantInfoImpl, RecordingInfoImpl} from './index';
import {MediaStream} from './mediaStream';
import {Participant} from './participant';
import {ParticipantInfo} from './participantInfo';
import {RecordingInfo} from './recordingInfo';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class ParticipantImpl extends EntityImpl implements Parsable, Participant {
    /** The info property */
    info?: ParticipantInfo | undefined;
    /** true if the participant is in lobby. */
    isInLobby?: boolean | undefined;
    /** true if the participant is muted (client or server muted). */
    isMuted?: boolean | undefined;
    /** The list of media streams. */
    mediaStreams?: MediaStream[] | undefined;
    /** A blob of data provided by the participant in the roster. */
    metadata?: string | undefined;
    /** Information on whether the participant has recording capability. */
    recordingInfo?: RecordingInfo | undefined;
    /**
     * Instantiates a new participant and sets the default values.
     * @param participantParameterValue 
     */
    public constructor(participantParameterValue?: Participant | undefined) {
        super();
        this.info = participantParameterValue?.info ;
        this.isInLobby = participantParameterValue?.isInLobby ;
        this.isMuted = participantParameterValue?.isMuted ;
        this.mediaStreams = participantParameterValue?.mediaStreams ;
        this.metadata = participantParameterValue?.metadata ;
        this.recordingInfo = participantParameterValue?.recordingInfo ;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {...super.getFieldDeserializers(),
            "info": n => { this.info = n.getObjectValue<ParticipantInfoImpl>(createParticipantInfoFromDiscriminatorValue); },
            "isInLobby": n => { this.isInLobby = n.getBooleanValue(); },
            "isMuted": n => { this.isMuted = n.getBooleanValue(); },
            "mediaStreams": n => { this.mediaStreams = n.getCollectionOfObjectValues<MediaStreamImpl>(createMediaStreamFromDiscriminatorValue); },
            "metadata": n => { this.metadata = n.getStringValue(); },
            "recordingInfo": n => { this.recordingInfo = n.getObjectValue<RecordingInfoImpl>(createRecordingInfoFromDiscriminatorValue); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        if(this.info){
        if(this.info)
        writer.writeObjectValue<ParticipantInfoImpl>("info", new ParticipantInfoImpl(this.info));
        }
        if(this.isInLobby){
        if(this.isInLobby)
        writer.writeBooleanValue("isInLobby", this.isInLobby);
        }
        if(this.isMuted){
        if(this.isMuted)
        writer.writeBooleanValue("isMuted", this.isMuted);
        }
        if(this.mediaStreams){
        const mediaStreamsArrValue: MediaStreamImpl[] = []; this.mediaStreams?.forEach(element => {mediaStreamsArrValue.push(new MediaStreamImpl(element));});
        writer.writeCollectionOfObjectValues<MediaStreamImpl>("mediaStreams", mediaStreamsArrValue);
        }
        if(this.metadata){
        if(this.metadata)
        writer.writeStringValue("metadata", this.metadata);
        }
        if(this.recordingInfo){
        if(this.recordingInfo)
        writer.writeObjectValue<RecordingInfoImpl>("recordingInfo", new RecordingInfoImpl(this.recordingInfo));
        }
    };
}
