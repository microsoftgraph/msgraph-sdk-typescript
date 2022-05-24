import {Call} from './call';
import {CallRecordImpl} from './callRecords/';
import {CallRecord} from './callRecords/callRecord';
import {createCallRecordFromDiscriminatorValue} from './callRecords/createCallRecordFromDiscriminatorValue';
import {CloudCommunications} from './cloudCommunications';
import {createCallFromDiscriminatorValue} from './createCallFromDiscriminatorValue';
import {createOnlineMeetingFromDiscriminatorValue} from './createOnlineMeetingFromDiscriminatorValue';
import {createPresenceFromDiscriminatorValue} from './createPresenceFromDiscriminatorValue';
import {CallImpl, EntityImpl, OnlineMeetingImpl, PresenceImpl} from './index';
import {OnlineMeeting} from './onlineMeeting';
import {Presence} from './presence';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** Provides operations to manage the cloudCommunications singleton. */
export class CloudCommunicationsImpl extends EntityImpl implements CloudCommunications, Parsable {
    /** The callRecords property */
    public callRecords?: CallRecord[] | undefined;
    /** The calls property */
    public calls?: Call[] | undefined;
    /** The onlineMeetings property */
    public onlineMeetings?: OnlineMeeting[] | undefined;
    /** The presences property */
    public presences?: Presence[] | undefined;
    /**
     * Instantiates a new cloudCommunications and sets the default values.
     * @param cloudCommunicationsParameterValue 
     */
    public constructor(cloudCommunicationsParameterValue?: CloudCommunications | undefined) {
        super();
        this.callRecords = cloudCommunicationsParameterValue?.callRecords ;
        this.calls = cloudCommunicationsParameterValue?.calls ;
        this.onlineMeetings = cloudCommunicationsParameterValue?.onlineMeetings ;
        this.presences = cloudCommunicationsParameterValue?.presences ;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {...super.getFieldDeserializers(),
            "callRecords": n => { this.callRecords = n.getCollectionOfObjectValues<CallRecordImpl>(createCallRecordFromDiscriminatorValue); },
            "calls": n => { this.calls = n.getCollectionOfObjectValues<CallImpl>(createCallFromDiscriminatorValue); },
            "onlineMeetings": n => { this.onlineMeetings = n.getCollectionOfObjectValues<OnlineMeetingImpl>(createOnlineMeetingFromDiscriminatorValue); },
            "presences": n => { this.presences = n.getCollectionOfObjectValues<PresenceImpl>(createPresenceFromDiscriminatorValue); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        if(this.callRecords && this.callRecords.length != 0){        const callRecordsArrValue: CallRecordImpl[] = []; this.callRecords?.forEach(element => {callRecordsArrValue.push(new CallRecordImpl(element));});
        writer.writeCollectionOfObjectValues<CallRecordImpl>("callRecords", callRecordsArrValue);
        }
        if(this.calls && this.calls.length != 0){        const callsArrValue: CallImpl[] = []; this.calls?.forEach(element => {callsArrValue.push(new CallImpl(element));});
        writer.writeCollectionOfObjectValues<CallImpl>("calls", callsArrValue);
        }
        if(this.onlineMeetings && this.onlineMeetings.length != 0){        const onlineMeetingsArrValue: OnlineMeetingImpl[] = []; this.onlineMeetings?.forEach(element => {onlineMeetingsArrValue.push(new OnlineMeetingImpl(element));});
        writer.writeCollectionOfObjectValues<OnlineMeetingImpl>("onlineMeetings", onlineMeetingsArrValue);
        }
        if(this.presences && this.presences.length != 0){        const presencesArrValue: PresenceImpl[] = []; this.presences?.forEach(element => {presencesArrValue.push(new PresenceImpl(element));});
        writer.writeCollectionOfObjectValues<PresenceImpl>("presences", presencesArrValue);
        }
    };
}
