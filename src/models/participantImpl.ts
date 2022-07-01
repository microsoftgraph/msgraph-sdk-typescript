import {createMediaStreamFromDiscriminatorValue} from './createMediaStreamFromDiscriminatorValue';
import {createParticipantInfoFromDiscriminatorValue} from './createParticipantInfoFromDiscriminatorValue';
import {createRecordingInfoFromDiscriminatorValue} from './createRecordingInfoFromDiscriminatorValue';
import {EntityImpl, MediaStreamImpl, ParticipantInfoImpl, RecordingInfoImpl} from './index';
import {MediaStream} from './mediaStream';
import {Participant} from './participant';
import {ParticipantInfo} from './participantInfo';
import {RecordingInfo} from './recordingInfo';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** Provides operations to manage the cloudCommunications singleton. */
export class ParticipantImpl extends EntityImpl implements Participant {
    /** The info property */
    private _info?: ParticipantInfo | undefined;
    /** true if the participant is in lobby. */
    private _isInLobby?: boolean | undefined;
    /** true if the participant is muted (client or server muted). */
    private _isMuted?: boolean | undefined;
    /** The list of media streams. */
    private _mediaStreams?: MediaStream[] | undefined;
    /** A blob of data provided by the participant in the roster. */
    private _metadata?: string | undefined;
    /** Information on whether the participant has recording capability. */
    private _recordingInfo?: RecordingInfo | undefined;
    /**
     * Instantiates a new participant and sets the default values.
     * @param participantParameterValue 
     */
    public constructor(participantParameterValue?: Participant | undefined) {
        super(participantParameterValue);
        this._info = participantParameterValue?.info;
        this._isInLobby = participantParameterValue?.isInLobby;
        this._isMuted = participantParameterValue?.isMuted;
        this._mediaStreams = participantParameterValue?.mediaStreams;
        this._metadata = participantParameterValue?.metadata;
        this._recordingInfo = participantParameterValue?.recordingInfo;
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
     * Gets the info property value. The info property
     * @returns a ParticipantInfoInterface
     */
    public get info() {
        return this._info;
    };
    /**
     * Sets the info property value. The info property
     * @param value Value to set for the info property.
     */
    public set info(value: ParticipantInfo | undefined) {
        if(value) {
            this._info = value instanceof ParticipantInfoImpl? value as ParticipantInfoImpl: new ParticipantInfoImpl(value);
        }
    };
    /**
     * Gets the isInLobby property value. true if the participant is in lobby.
     * @returns a boolean
     */
    public get isInLobby() {
        return this._isInLobby;
    };
    /**
     * Sets the isInLobby property value. true if the participant is in lobby.
     * @param value Value to set for the isInLobby property.
     */
    public set isInLobby(value: boolean | undefined) {
        if(value) {
            this._isInLobby = value;
        }
    };
    /**
     * Gets the isMuted property value. true if the participant is muted (client or server muted).
     * @returns a boolean
     */
    public get isMuted() {
        return this._isMuted;
    };
    /**
     * Sets the isMuted property value. true if the participant is muted (client or server muted).
     * @param value Value to set for the isMuted property.
     */
    public set isMuted(value: boolean | undefined) {
        if(value) {
            this._isMuted = value;
        }
    };
    /**
     * Gets the mediaStreams property value. The list of media streams.
     * @returns a MediaStreamInterface
     */
    public get mediaStreams() {
        return this._mediaStreams;
    };
    /**
     * Sets the mediaStreams property value. The list of media streams.
     * @param value Value to set for the mediaStreams property.
     */
    public set mediaStreams(value: MediaStream[] | undefined) {
        if(value) {
            const mediaStreamsArrValue: MediaStreamImpl[] = [];
            this.mediaStreams?.forEach(element => {
                mediaStreamsArrValue.push((element instanceof MediaStreamImpl? element as MediaStreamImpl:new MediaStreamImpl(element)));
            });
            this._mediaStreams = mediaStreamsArrValue;
        }
    };
    /**
     * Gets the metadata property value. A blob of data provided by the participant in the roster.
     * @returns a string
     */
    public get metadata() {
        return this._metadata;
    };
    /**
     * Sets the metadata property value. A blob of data provided by the participant in the roster.
     * @param value Value to set for the metadata property.
     */
    public set metadata(value: string | undefined) {
        if(value) {
            this._metadata = value;
        }
    };
    /**
     * Gets the recordingInfo property value. Information on whether the participant has recording capability.
     * @returns a RecordingInfoInterface
     */
    public get recordingInfo() {
        return this._recordingInfo;
    };
    /**
     * Sets the recordingInfo property value. Information on whether the participant has recording capability.
     * @param value Value to set for the recordingInfo property.
     */
    public set recordingInfo(value: RecordingInfo | undefined) {
        if(value) {
            this._recordingInfo = value instanceof RecordingInfoImpl? value as RecordingInfoImpl: new RecordingInfoImpl(value);
        }
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        if(this.info){
            writer.writeObjectValue<ParticipantInfoImpl>("info", (this.info instanceof ParticipantInfoImpl? this.info as ParticipantInfoImpl: new ParticipantInfoImpl(this.info)));
        }
        if(this.isInLobby){
            writer.writeBooleanValue("isInLobby", this.isInLobby);
        }
        if(this.isMuted){
            writer.writeBooleanValue("isMuted", this.isMuted);
        }
        if(this.mediaStreams && this.mediaStreams.length != 0){        const mediaStreamsArrValue: MediaStreamImpl[] = [];
        this.mediaStreams?.forEach(element => {
            mediaStreamsArrValue.push((element instanceof MediaStreamImpl? element as MediaStreamImpl:new MediaStreamImpl(element)));
        });
            writer.writeCollectionOfObjectValues<MediaStreamImpl>("mediaStreams", mediaStreamsArrValue);
        }
        if(this.metadata){
            writer.writeStringValue("metadata", this.metadata);
        }
        if(this.recordingInfo){
            writer.writeObjectValue<RecordingInfoImpl>("recordingInfo", (this.recordingInfo instanceof RecordingInfoImpl? this.recordingInfo as RecordingInfoImpl: new RecordingInfoImpl(this.recordingInfo)));
        }
    };
}
