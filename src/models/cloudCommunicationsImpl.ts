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
export class CloudCommunicationsImpl extends EntityImpl implements CloudCommunications {
    /** The callRecords property */
    private _callRecords?: CallRecord[] | undefined;
    /** The calls property */
    private _calls?: Call[] | undefined;
    /** The onlineMeetings property */
    private _onlineMeetings?: OnlineMeeting[] | undefined;
    /** The presences property */
    private _presences?: Presence[] | undefined;
    /**
     * Gets the callRecords property value. The callRecords property
     * @returns a CallRecordInterface
     */
    public get callRecords() {
        return this._callRecords;
    };
    /**
     * Sets the callRecords property value. The callRecords property
     * @param value Value to set for the callRecords property.
     */
    public set callRecords(value: CallRecord[] | undefined) {
        if(value) {
            const callRecordsArrValue: CallRecordImpl[] = [];
            this.callRecords?.forEach(element => {
                callRecordsArrValue.push((element instanceof CallRecordImpl? element as CallRecordImpl:new CallRecordImpl(element)));
            });
            this._callRecords = callRecordsArrValue;
        }
    };
    /**
     * Gets the calls property value. The calls property
     * @returns a CallInterface
     */
    public get calls() {
        return this._calls;
    };
    /**
     * Sets the calls property value. The calls property
     * @param value Value to set for the calls property.
     */
    public set calls(value: Call[] | undefined) {
        if(value) {
            const callsArrValue: CallImpl[] = [];
            this.calls?.forEach(element => {
                callsArrValue.push((element instanceof CallImpl? element as CallImpl:new CallImpl(element)));
            });
            this._calls = callsArrValue;
        }
    };
    /**
     * Instantiates a new cloudCommunications and sets the default values.
     * @param cloudCommunicationsParameterValue 
     */
    public constructor(cloudCommunicationsParameterValue?: CloudCommunications | undefined) {
        super(cloudCommunicationsParameterValue);
        this._callRecords = cloudCommunicationsParameterValue?.callRecords;
        this._calls = cloudCommunicationsParameterValue?.calls;
        this._onlineMeetings = cloudCommunicationsParameterValue?.onlineMeetings;
        this._presences = cloudCommunicationsParameterValue?.presences;
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
     * Gets the onlineMeetings property value. The onlineMeetings property
     * @returns a OnlineMeetingInterface
     */
    public get onlineMeetings() {
        return this._onlineMeetings;
    };
    /**
     * Sets the onlineMeetings property value. The onlineMeetings property
     * @param value Value to set for the onlineMeetings property.
     */
    public set onlineMeetings(value: OnlineMeeting[] | undefined) {
        if(value) {
            const onlineMeetingsArrValue: OnlineMeetingImpl[] = [];
            this.onlineMeetings?.forEach(element => {
                onlineMeetingsArrValue.push((element instanceof OnlineMeetingImpl? element as OnlineMeetingImpl:new OnlineMeetingImpl(element)));
            });
            this._onlineMeetings = onlineMeetingsArrValue;
        }
    };
    /**
     * Gets the presences property value. The presences property
     * @returns a PresenceInterface
     */
    public get presences() {
        return this._presences;
    };
    /**
     * Sets the presences property value. The presences property
     * @param value Value to set for the presences property.
     */
    public set presences(value: Presence[] | undefined) {
        if(value) {
            const presencesArrValue: PresenceImpl[] = [];
            this.presences?.forEach(element => {
                presencesArrValue.push((element instanceof PresenceImpl? element as PresenceImpl:new PresenceImpl(element)));
            });
            this._presences = presencesArrValue;
        }
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        if(this.callRecords && this.callRecords.length != 0){        const callRecordsArrValue: CallRecordImpl[] = [];
        this.callRecords?.forEach(element => {
            callRecordsArrValue.push((element instanceof CallRecordImpl? element as CallRecordImpl:new CallRecordImpl(element)));
        });
            writer.writeCollectionOfObjectValues<CallRecordImpl>("callRecords", callRecordsArrValue);
        }
        if(this.calls && this.calls.length != 0){        const callsArrValue: CallImpl[] = [];
        this.calls?.forEach(element => {
            callsArrValue.push((element instanceof CallImpl? element as CallImpl:new CallImpl(element)));
        });
            writer.writeCollectionOfObjectValues<CallImpl>("calls", callsArrValue);
        }
        if(this.onlineMeetings && this.onlineMeetings.length != 0){        const onlineMeetingsArrValue: OnlineMeetingImpl[] = [];
        this.onlineMeetings?.forEach(element => {
            onlineMeetingsArrValue.push((element instanceof OnlineMeetingImpl? element as OnlineMeetingImpl:new OnlineMeetingImpl(element)));
        });
            writer.writeCollectionOfObjectValues<OnlineMeetingImpl>("onlineMeetings", onlineMeetingsArrValue);
        }
        if(this.presences && this.presences.length != 0){        const presencesArrValue: PresenceImpl[] = [];
        this.presences?.forEach(element => {
            presencesArrValue.push((element instanceof PresenceImpl? element as PresenceImpl:new PresenceImpl(element)));
        });
            writer.writeCollectionOfObjectValues<PresenceImpl>("presences", presencesArrValue);
        }
    };
}
