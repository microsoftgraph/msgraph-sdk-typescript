import {EntityImpl} from '../';
import {createEndpointFromDiscriminatorValue} from './createEndpointFromDiscriminatorValue';
import {createFailureInfoFromDiscriminatorValue} from './createFailureInfoFromDiscriminatorValue';
import {createSegmentFromDiscriminatorValue} from './createSegmentFromDiscriminatorValue';
import {Endpoint} from './endpoint';
import {FailureInfo} from './failureInfo';
import {EndpointImpl, FailureInfoImpl, SegmentImpl} from './index';
import {Segment} from './segment';
import {Session} from './session';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** Provides operations to manage the cloudCommunications singleton. */
export class SessionImpl extends EntityImpl implements Session {
    /** Endpoint that answered the session. */
    private _callee?: Endpoint | undefined;
    /** Endpoint that initiated the session. */
    private _caller?: Endpoint | undefined;
    /** UTC time when the last user left the session. The DateTimeOffset type represents date and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z */
    private _endDateTime?: Date | undefined;
    /** Failure information associated with the session if the session failed. */
    private _failureInfo?: FailureInfo | undefined;
    /** List of modalities present in the session. Possible values are: unknown, audio, video, videoBasedScreenSharing, data, screenSharing, unknownFutureValue. */
    private _modalities?: string[] | undefined;
    /** The list of segments involved in the session. Read-only. Nullable. */
    private _segments?: Segment[] | undefined;
    /** UTC fime when the first user joined the session. The DateTimeOffset type represents date and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z */
    private _startDateTime?: Date | undefined;
    /**
     * Gets the callee property value. Endpoint that answered the session.
     * @returns a EndpointInterface
     */
    public get callee() {
        return this._callee;
    };
    /**
     * Sets the callee property value. Endpoint that answered the session.
     * @param value Value to set for the callee property.
     */
    public set callee(value: Endpoint | undefined) {
        if(value) {
            this._callee = value instanceof EndpointImpl? value as EndpointImpl: new EndpointImpl(value);
        }
    };
    /**
     * Gets the caller property value. Endpoint that initiated the session.
     * @returns a EndpointInterface
     */
    public get caller() {
        return this._caller;
    };
    /**
     * Sets the caller property value. Endpoint that initiated the session.
     * @param value Value to set for the caller property.
     */
    public set caller(value: Endpoint | undefined) {
        if(value) {
            this._caller = value instanceof EndpointImpl? value as EndpointImpl: new EndpointImpl(value);
        }
    };
    /**
     * Instantiates a new session and sets the default values.
     * @param sessionParameterValue 
     */
    public constructor(sessionParameterValue?: Session | undefined) {
        super(sessionParameterValue);
        this._callee = sessionParameterValue?.callee;
        this._caller = sessionParameterValue?.caller;
        this._endDateTime = sessionParameterValue?.endDateTime;
        this._failureInfo = sessionParameterValue?.failureInfo;
        this._modalities = sessionParameterValue?.modalities;
        this._segments = sessionParameterValue?.segments;
        this._startDateTime = sessionParameterValue?.startDateTime;
    };
    /**
     * Gets the endDateTime property value. UTC time when the last user left the session. The DateTimeOffset type represents date and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z
     * @returns a Date
     */
    public get endDateTime() {
        return this._endDateTime;
    };
    /**
     * Sets the endDateTime property value. UTC time when the last user left the session. The DateTimeOffset type represents date and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z
     * @param value Value to set for the endDateTime property.
     */
    public set endDateTime(value: Date | undefined) {
        if(value) {
            this._endDateTime = value;
        }
    };
    /**
     * Gets the failureInfo property value. Failure information associated with the session if the session failed.
     * @returns a FailureInfoInterface
     */
    public get failureInfo() {
        return this._failureInfo;
    };
    /**
     * Sets the failureInfo property value. Failure information associated with the session if the session failed.
     * @param value Value to set for the failureInfo property.
     */
    public set failureInfo(value: FailureInfo | undefined) {
        if(value) {
            this._failureInfo = value instanceof FailureInfoImpl? value as FailureInfoImpl: new FailureInfoImpl(value);
        }
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {...super.getFieldDeserializers(),
            "callee": n => { this.callee = n.getObjectValue<EndpointImpl>(createEndpointFromDiscriminatorValue); },
            "caller": n => { this.caller = n.getObjectValue<EndpointImpl>(createEndpointFromDiscriminatorValue); },
            "endDateTime": n => { this.endDateTime = n.getDateValue(); },
            "failureInfo": n => { this.failureInfo = n.getObjectValue<FailureInfoImpl>(createFailureInfoFromDiscriminatorValue); },
            "modalities": n => { this.modalities = n.getCollectionOfPrimitiveValues<string>(); },
            "segments": n => { this.segments = n.getCollectionOfObjectValues<SegmentImpl>(createSegmentFromDiscriminatorValue); },
            "startDateTime": n => { this.startDateTime = n.getDateValue(); },
        };
    };
    /**
     * Gets the modalities property value. List of modalities present in the session. Possible values are: unknown, audio, video, videoBasedScreenSharing, data, screenSharing, unknownFutureValue.
     * @returns a string
     */
    public get modalities() {
        return this._modalities;
    };
    /**
     * Sets the modalities property value. List of modalities present in the session. Possible values are: unknown, audio, video, videoBasedScreenSharing, data, screenSharing, unknownFutureValue.
     * @param value Value to set for the modalities property.
     */
    public set modalities(value: string[] | undefined) {
        if(value) {
            this._modalities = value;
        }
    };
    /**
     * Gets the segments property value. The list of segments involved in the session. Read-only. Nullable.
     * @returns a SegmentInterface
     */
    public get segments() {
        return this._segments;
    };
    /**
     * Sets the segments property value. The list of segments involved in the session. Read-only. Nullable.
     * @param value Value to set for the segments property.
     */
    public set segments(value: Segment[] | undefined) {
        if(value) {
            const segmentsArrValue: SegmentImpl[] = [];
            this.segments?.forEach(element => {
                segmentsArrValue.push((element instanceof SegmentImpl? element as SegmentImpl:new SegmentImpl(element)));
            });
            this._segments = segmentsArrValue;
        }
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        if(this.callee){
            writer.writeObjectValue<EndpointImpl>("callee", (this.callee instanceof EndpointImpl? this.callee as EndpointImpl: new EndpointImpl(this.callee)));
        }
        if(this.caller){
            writer.writeObjectValue<EndpointImpl>("caller", (this.caller instanceof EndpointImpl? this.caller as EndpointImpl: new EndpointImpl(this.caller)));
        }
        if(this.endDateTime){
            writer.writeDateValue("endDateTime", this.endDateTime);
        }
        if(this.failureInfo){
            writer.writeObjectValue<FailureInfoImpl>("failureInfo", (this.failureInfo instanceof FailureInfoImpl? this.failureInfo as FailureInfoImpl: new FailureInfoImpl(this.failureInfo)));
        }
        if(this.modalities){
            writer.writeCollectionOfPrimitiveValues<string>("modalities", this.modalities);
        }
        if(this.segments && this.segments.length != 0){        const segmentsArrValue: SegmentImpl[] = [];
        this.segments?.forEach(element => {
            segmentsArrValue.push((element instanceof SegmentImpl? element as SegmentImpl:new SegmentImpl(element)));
        });
            writer.writeCollectionOfObjectValues<SegmentImpl>("segments", segmentsArrValue);
        }
        if(this.startDateTime){
            writer.writeDateValue("startDateTime", this.startDateTime);
        }
    };
    /**
     * Gets the startDateTime property value. UTC fime when the first user joined the session. The DateTimeOffset type represents date and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z
     * @returns a Date
     */
    public get startDateTime() {
        return this._startDateTime;
    };
    /**
     * Sets the startDateTime property value. UTC fime when the first user joined the session. The DateTimeOffset type represents date and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z
     * @param value Value to set for the startDateTime property.
     */
    public set startDateTime(value: Date | undefined) {
        if(value) {
            this._startDateTime = value;
        }
    };
}
