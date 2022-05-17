import {EntityImpl, IdentitySetImpl} from '../';
import {createIdentitySetFromDiscriminatorValue} from '../createIdentitySetFromDiscriminatorValue';
import {IdentitySet} from '../identitySet';
import {CallRecord} from './callRecord';
import {CallType} from './callType';
import {createSessionFromDiscriminatorValue} from './createSessionFromDiscriminatorValue';
import {SessionImpl} from './index';
import {Modality} from './modality';
import {Session} from './session';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class CallRecordImpl extends EntityImpl implements CallRecord, Parsable {
    /** UTC time when the last user left the call. The DateTimeOffset type represents date and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z */
    endDateTime?: Date | undefined;
    /** Meeting URL associated to the call. May not be available for a peerToPeer call record type. */
    joinWebUrl?: string | undefined;
    /** UTC time when the call record was created. The DatetimeOffset type represents date and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z */
    lastModifiedDateTime?: Date | undefined;
    /** List of all the modalities used in the call. Possible values are: unknown, audio, video, videoBasedScreenSharing, data, screenSharing, unknownFutureValue. */
    modalities?: Modality[] | undefined;
    /** The organizing party's identity. */
    organizer?: IdentitySet | undefined;
    /** List of distinct identities involved in the call. */
    participants?: IdentitySet[] | undefined;
    /** List of sessions involved in the call. Peer-to-peer calls typically only have one session, whereas group calls typically have at least one session per participant. Read-only. Nullable. */
    sessions?: Session[] | undefined;
    /** UTC time when the first user joined the call. The DatetimeOffset type represents date and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z */
    startDateTime?: Date | undefined;
    /** Indicates the type of the call. Possible values are: unknown, groupCall, peerToPeer, unknownFutureValue. */
    type?: CallType | undefined;
    /** Monotonically increasing version of the call record. Higher version call records with the same ID includes additional data compared to the lower version. */
    version?: number | undefined;
    /**
     * Instantiates a new callRecord and sets the default values.
     * @param callRecordParameterValue 
     */
    public constructor(callRecordParameterValue?: CallRecord | undefined) {
        super();
        this.endDateTime = callRecordParameterValue?.endDateTime ;
        this.joinWebUrl = callRecordParameterValue?.joinWebUrl ;
        this.lastModifiedDateTime = callRecordParameterValue?.lastModifiedDateTime ;
        this.modalities = callRecordParameterValue?.modalities ;
        this.organizer = callRecordParameterValue?.organizer ;
        this.participants = callRecordParameterValue?.participants ;
        this.sessions = callRecordParameterValue?.sessions ;
        this.startDateTime = callRecordParameterValue?.startDateTime ;
        this.type = callRecordParameterValue?.type ;
        this.version = callRecordParameterValue?.version ;
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
            "modalities": n => { this.modalities = n.getEnumValues<Modality>(Modality); },
            "organizer": n => { this.organizer = n.getObjectValue<IdentitySetImpl>(createIdentitySetFromDiscriminatorValue); },
            "participants": n => { this.participants = n.getCollectionOfObjectValues<IdentitySetImpl>(createIdentitySetFromDiscriminatorValue); },
            "sessions": n => { this.sessions = n.getCollectionOfObjectValues<SessionImpl>(createSessionFromDiscriminatorValue); },
            "startDateTime": n => { this.startDateTime = n.getDateValue(); },
            "type": n => { this.type = n.getEnumValue<CallType>(CallType); },
            "version": n => { this.version = n.getNumberValue(); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        if(this.endDateTime){
        if(this.endDateTime)
        writer.writeDateValue("endDateTime", this.endDateTime);
        }
        if(this.joinWebUrl){
        if(this.joinWebUrl)
        writer.writeStringValue("joinWebUrl", this.joinWebUrl);
        }
        if(this.lastModifiedDateTime){
        if(this.lastModifiedDateTime)
        writer.writeDateValue("lastModifiedDateTime", this.lastModifiedDateTime);
        }
        if(this.modalities){
        if(this.modalities)
        this.modalities && writer.writeEnumValue<Modality>("modalities", ...this.modalities);
        }
        if(this.organizer){
        if(this.organizer)
        writer.writeObjectValue<IdentitySetImpl>("organizer", new IdentitySetImpl(this.organizer));
        }
        if(this.participants){
        const participantsArrValue: IdentitySetImpl[] = []; this.participants?.forEach(element => {participantsArrValue.push(new IdentitySetImpl(element));});
        writer.writeCollectionOfObjectValues<IdentitySetImpl>("participants", participantsArrValue);
        }
        if(this.sessions){
        const sessionsArrValue: SessionImpl[] = []; this.sessions?.forEach(element => {sessionsArrValue.push(new SessionImpl(element));});
        writer.writeCollectionOfObjectValues<SessionImpl>("sessions", sessionsArrValue);
        }
        if(this.startDateTime){
        if(this.startDateTime)
        writer.writeDateValue("startDateTime", this.startDateTime);
        }
        if(this.type){
        if(this.type)
        writer.writeEnumValue<CallType>("type", this.type);
        }
        if(this.version){
        if(this.version)
        writer.writeNumberValue("version", this.version);
        }
    };
}
