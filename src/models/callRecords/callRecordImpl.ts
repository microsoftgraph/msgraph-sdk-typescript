import {EntityImpl, IdentitySetImpl} from '../';
import {createIdentitySetFromDiscriminatorValue} from '../createIdentitySetFromDiscriminatorValue';
import {IdentitySet} from '../identitySet';
import {CallRecord} from './callRecord';
import {CallType} from './callType';
import {createSessionFromDiscriminatorValue} from './createSessionFromDiscriminatorValue';
import {SessionImpl} from './index';
import {Session} from './session';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** Provides operations to manage the cloudCommunications singleton. */
export class CallRecordImpl extends EntityImpl implements CallRecord {
    /** UTC time when the last user left the call. The DateTimeOffset type represents date and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z */
    private _endDateTime?: Date | undefined;
    /** Meeting URL associated to the call. May not be available for a peerToPeer call record type. */
    private _joinWebUrl?: string | undefined;
    /** UTC time when the call record was created. The DatetimeOffset type represents date and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z */
    private _lastModifiedDateTime?: Date | undefined;
    /** List of all the modalities used in the call. Possible values are: unknown, audio, video, videoBasedScreenSharing, data, screenSharing, unknownFutureValue. */
    private _modalities?: string[] | undefined;
    /** The organizing party's identity. */
    private _organizer?: IdentitySet | undefined;
    /** List of distinct identities involved in the call. */
    private _participants?: IdentitySet[] | undefined;
    /** List of sessions involved in the call. Peer-to-peer calls typically only have one session, whereas group calls typically have at least one session per participant. Read-only. Nullable. */
    private _sessions?: Session[] | undefined;
    /** UTC time when the first user joined the call. The DatetimeOffset type represents date and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z */
    private _startDateTime?: Date | undefined;
    /** Indicates the type of the call. Possible values are: unknown, groupCall, peerToPeer, unknownFutureValue. */
    private _type?: CallType | undefined;
    /** Monotonically increasing version of the call record. Higher version call records with the same ID includes additional data compared to the lower version. */
    private _version?: number | undefined;
    /**
     * Instantiates a new callRecord and sets the default values.
     * @param callRecordParameterValue 
     */
    public constructor(callRecordParameterValue?: CallRecord | undefined) {
        super(callRecordParameterValue);
        this._endDateTime = callRecordParameterValue?.endDateTime;
        this._joinWebUrl = callRecordParameterValue?.joinWebUrl;
        this._lastModifiedDateTime = callRecordParameterValue?.lastModifiedDateTime;
        this._modalities = callRecordParameterValue?.modalities;
        this._organizer = callRecordParameterValue?.organizer;
        this._participants = callRecordParameterValue?.participants;
        this._sessions = callRecordParameterValue?.sessions;
        this._startDateTime = callRecordParameterValue?.startDateTime;
        this._type = callRecordParameterValue?.type;
        this._version = callRecordParameterValue?.version;
    };
    /**
     * Gets the endDateTime property value. UTC time when the last user left the call. The DateTimeOffset type represents date and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z
     * @returns a Date
     */
    public get endDateTime() {
        return this._endDateTime;
    };
    /**
     * Sets the endDateTime property value. UTC time when the last user left the call. The DateTimeOffset type represents date and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z
     * @param value Value to set for the endDateTime property.
     */
    public set endDateTime(value: Date | undefined) {
        if(value) {
            this._endDateTime = value;
        }
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {...super.getFieldDeserializers(),
            "endDateTime": n => { this.endDateTime = n.getDateValue(); },
            "joinWebUrl": n => { this.joinWebUrl = n.getStringValue(); },
            "lastModifiedDateTime": n => { this.lastModifiedDateTime = n.getDateValue(); },
            "modalities": n => { this.modalities = n.getCollectionOfPrimitiveValues<string>(); },
            "organizer": n => { this.organizer = n.getObjectValue<IdentitySetImpl>(createIdentitySetFromDiscriminatorValue); },
            "participants": n => { this.participants = n.getCollectionOfObjectValues<IdentitySetImpl>(createIdentitySetFromDiscriminatorValue); },
            "sessions": n => { this.sessions = n.getCollectionOfObjectValues<SessionImpl>(createSessionFromDiscriminatorValue); },
            "startDateTime": n => { this.startDateTime = n.getDateValue(); },
            "type": n => { this.type = n.getEnumValue<CallType>(CallType); },
            "version": n => { this.version = n.getNumberValue(); },
        };
    };
    /**
     * Gets the joinWebUrl property value. Meeting URL associated to the call. May not be available for a peerToPeer call record type.
     * @returns a string
     */
    public get joinWebUrl() {
        return this._joinWebUrl;
    };
    /**
     * Sets the joinWebUrl property value. Meeting URL associated to the call. May not be available for a peerToPeer call record type.
     * @param value Value to set for the joinWebUrl property.
     */
    public set joinWebUrl(value: string | undefined) {
        if(value) {
            this._joinWebUrl = value;
        }
    };
    /**
     * Gets the lastModifiedDateTime property value. UTC time when the call record was created. The DatetimeOffset type represents date and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z
     * @returns a Date
     */
    public get lastModifiedDateTime() {
        return this._lastModifiedDateTime;
    };
    /**
     * Sets the lastModifiedDateTime property value. UTC time when the call record was created. The DatetimeOffset type represents date and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z
     * @param value Value to set for the lastModifiedDateTime property.
     */
    public set lastModifiedDateTime(value: Date | undefined) {
        if(value) {
            this._lastModifiedDateTime = value;
        }
    };
    /**
     * Gets the modalities property value. List of all the modalities used in the call. Possible values are: unknown, audio, video, videoBasedScreenSharing, data, screenSharing, unknownFutureValue.
     * @returns a string
     */
    public get modalities() {
        return this._modalities;
    };
    /**
     * Sets the modalities property value. List of all the modalities used in the call. Possible values are: unknown, audio, video, videoBasedScreenSharing, data, screenSharing, unknownFutureValue.
     * @param value Value to set for the modalities property.
     */
    public set modalities(value: string[] | undefined) {
        if(value) {
            this._modalities = value;
        }
    };
    /**
     * Gets the organizer property value. The organizing party's identity.
     * @returns a IdentitySetInterface
     */
    public get organizer() {
        return this._organizer;
    };
    /**
     * Sets the organizer property value. The organizing party's identity.
     * @param value Value to set for the organizer property.
     */
    public set organizer(value: IdentitySet | undefined) {
        if(value) {
            this._organizer = value instanceof IdentitySetImpl? value : new IdentitySetImpl(value);
        }
    };
    /**
     * Gets the participants property value. List of distinct identities involved in the call.
     * @returns a IdentitySetInterface
     */
    public get participants() {
        return this._participants;
    };
    /**
     * Sets the participants property value. List of distinct identities involved in the call.
     * @param value Value to set for the participants property.
     */
    public set participants(value: IdentitySet[] | undefined) {
        if(value) {
            const participantsArrValue: IdentitySetImpl[] = [];
            this.participants?.forEach(element => {
                participantsArrValue.push((element instanceof IdentitySetImpl? element:new IdentitySetImpl(element)));
            });
            this._participants = participantsArrValue;
        }
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        if(this.endDateTime){
            writer.writeDateValue("endDateTime", this.endDateTime);
        }
        if(this.joinWebUrl){
            writer.writeStringValue("joinWebUrl", this.joinWebUrl);
        }
        if(this.lastModifiedDateTime){
            writer.writeDateValue("lastModifiedDateTime", this.lastModifiedDateTime);
        }
        if(this.modalities){
            writer.writeCollectionOfPrimitiveValues<string>("modalities", this.modalities);
        }
        if(this.organizer){
            writer.writeObjectValue<IdentitySetImpl>("organizer", (!this.organizer || this.organizer instanceof IdentitySetImpl? this.organizer : new IdentitySetImpl(this.organizer)));
        }
        if(this.participants && this.participants.length != 0){        const participantsArrValue: IdentitySetImpl[] = [];
        this.participants?.forEach(element => {
            participantsArrValue.push((element instanceof IdentitySetImpl? element:new IdentitySetImpl(element)));
        });
            writer.writeCollectionOfObjectValues<IdentitySetImpl>("participants", participantsArrValue);
        }
        if(this.sessions && this.sessions.length != 0){        const sessionsArrValue: SessionImpl[] = [];
        this.sessions?.forEach(element => {
            sessionsArrValue.push((element instanceof SessionImpl? element:new SessionImpl(element)));
        });
            writer.writeCollectionOfObjectValues<SessionImpl>("sessions", sessionsArrValue);
        }
        if(this.startDateTime){
            writer.writeDateValue("startDateTime", this.startDateTime);
        }
        if(this.type){
            writer.writeEnumValue<CallType>("type", this.type);
        }
        if(this.version){
            writer.writeNumberValue("version", this.version);
        }
    };
    /**
     * Gets the sessions property value. List of sessions involved in the call. Peer-to-peer calls typically only have one session, whereas group calls typically have at least one session per participant. Read-only. Nullable.
     * @returns a SessionInterface
     */
    public get sessions() {
        return this._sessions;
    };
    /**
     * Sets the sessions property value. List of sessions involved in the call. Peer-to-peer calls typically only have one session, whereas group calls typically have at least one session per participant. Read-only. Nullable.
     * @param value Value to set for the sessions property.
     */
    public set sessions(value: Session[] | undefined) {
        if(value) {
            const sessionsArrValue: SessionImpl[] = [];
            this.sessions?.forEach(element => {
                sessionsArrValue.push((element instanceof SessionImpl? element:new SessionImpl(element)));
            });
            this._sessions = sessionsArrValue;
        }
    };
    /**
     * Gets the startDateTime property value. UTC time when the first user joined the call. The DatetimeOffset type represents date and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z
     * @returns a Date
     */
    public get startDateTime() {
        return this._startDateTime;
    };
    /**
     * Sets the startDateTime property value. UTC time when the first user joined the call. The DatetimeOffset type represents date and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z
     * @param value Value to set for the startDateTime property.
     */
    public set startDateTime(value: Date | undefined) {
        if(value) {
            this._startDateTime = value;
        }
    };
    /**
     * Gets the type property value. Indicates the type of the call. Possible values are: unknown, groupCall, peerToPeer, unknownFutureValue.
     * @returns a callType
     */
    public get type() {
        return this._type;
    };
    /**
     * Sets the type property value. Indicates the type of the call. Possible values are: unknown, groupCall, peerToPeer, unknownFutureValue.
     * @param value Value to set for the type property.
     */
    public set type(value: CallType | undefined) {
        if(value) {
            this._type = value;
        }
    };
    /**
     * Gets the version property value. Monotonically increasing version of the call record. Higher version call records with the same ID includes additional data compared to the lower version.
     * @returns a int64
     */
    public get version() {
        return this._version;
    };
    /**
     * Sets the version property value. Monotonically increasing version of the call record. Higher version call records with the same ID includes additional data compared to the lower version.
     * @param value Value to set for the version property.
     */
    public set version(value: number | undefined) {
        if(value) {
            this._version = value;
        }
    };
}
