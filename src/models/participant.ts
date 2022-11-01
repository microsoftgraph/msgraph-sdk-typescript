import {createMediaStreamFromDiscriminatorValue} from './createMediaStreamFromDiscriminatorValue';
import {createParticipantInfoFromDiscriminatorValue} from './createParticipantInfoFromDiscriminatorValue';
import {createRecordingInfoFromDiscriminatorValue} from './createRecordingInfoFromDiscriminatorValue';
import {Entity, MediaStream, ParticipantInfo, RecordingInfo} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** Provides operations to manage the collection of agreement entities. */
export class Participant extends Entity implements Parsable {
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
    /** Information about whether the participant has recording capability. */
    private _recordingInfo?: RecordingInfo | undefined;
    /**
     * Instantiates a new participant and sets the default values.
     */
    public constructor() {
        super();
        this.odataType = "#microsoft.graph.participant";
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {...super.getFieldDeserializers(),
            "info": n => { this.info = n.getObjectValue<ParticipantInfo>(createParticipantInfoFromDiscriminatorValue); },
            "isInLobby": n => { this.isInLobby = n.getBooleanValue(); },
            "isMuted": n => { this.isMuted = n.getBooleanValue(); },
            "mediaStreams": n => { this.mediaStreams = n.getCollectionOfObjectValues<MediaStream>(createMediaStreamFromDiscriminatorValue); },
            "metadata": n => { this.metadata = n.getStringValue(); },
            "recordingInfo": n => { this.recordingInfo = n.getObjectValue<RecordingInfo>(createRecordingInfoFromDiscriminatorValue); },
        };
    };
    /**
     * Gets the info property value. The info property
     * @returns a participantInfo
     */
    public get info() {
        return this._info;
    };
    /**
     * Sets the info property value. The info property
     * @param value Value to set for the info property.
     */
    public set info(value: ParticipantInfo | undefined) {
        this._info = value;
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
        this._isInLobby = value;
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
        this._isMuted = value;
    };
    /**
     * Gets the mediaStreams property value. The list of media streams.
     * @returns a mediaStream
     */
    public get mediaStreams() {
        return this._mediaStreams;
    };
    /**
     * Sets the mediaStreams property value. The list of media streams.
     * @param value Value to set for the mediaStreams property.
     */
    public set mediaStreams(value: MediaStream[] | undefined) {
        this._mediaStreams = value;
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
        this._metadata = value;
    };
    /**
     * Gets the recordingInfo property value. Information about whether the participant has recording capability.
     * @returns a recordingInfo
     */
    public get recordingInfo() {
        return this._recordingInfo;
    };
    /**
     * Sets the recordingInfo property value. Information about whether the participant has recording capability.
     * @param value Value to set for the recordingInfo property.
     */
    public set recordingInfo(value: RecordingInfo | undefined) {
        this._recordingInfo = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        writer.writeObjectValue<ParticipantInfo>("info", this.info);
        writer.writeBooleanValue("isInLobby", this.isInLobby);
        writer.writeBooleanValue("isMuted", this.isMuted);
        writer.writeCollectionOfObjectValues<MediaStream>("mediaStreams", this.mediaStreams);
        writer.writeStringValue("metadata", this.metadata);
        writer.writeObjectValue<RecordingInfo>("recordingInfo", this.recordingInfo);
    };
}
