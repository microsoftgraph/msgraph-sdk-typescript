import {EntityImpl} from '../';
import {createEndpointFromDiscriminatorValue} from './createEndpointFromDiscriminatorValue';
import {createFailureInfoFromDiscriminatorValue} from './createFailureInfoFromDiscriminatorValue';
import {createMediaFromDiscriminatorValue} from './createMediaFromDiscriminatorValue';
import {Endpoint} from './endpoint';
import {FailureInfo} from './failureInfo';
import {EndpointImpl, FailureInfoImpl, MediaImpl} from './index';
import {Media} from './media';
import {Segment} from './segment';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** Provides operations to manage the cloudCommunications singleton. */
export class SegmentImpl extends EntityImpl implements Segment {
    /** Endpoint that answered this segment. */
    private _callee?: Endpoint | undefined;
    /** Endpoint that initiated this segment. */
    private _caller?: Endpoint | undefined;
    /** UTC time when the segment ended. The DateTimeOffset type represents date and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z */
    private _endDateTime?: Date | undefined;
    /** Failure information associated with the segment if it failed. */
    private _failureInfo?: FailureInfo | undefined;
    /** Media associated with this segment. */
    private _media?: Media[] | undefined;
    /** UTC time when the segment started. The DateTimeOffset type represents date and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z */
    private _startDateTime?: Date | undefined;
    /**
     * Gets the callee property value. Endpoint that answered this segment.
     * @returns a EndpointInterface
     */
    public get callee() {
        return this._callee;
    };
    /**
     * Sets the callee property value. Endpoint that answered this segment.
     * @param value Value to set for the callee property.
     */
    public set callee(value: Endpoint | undefined) {
        if(value) {
            this._callee = value instanceof EndpointImpl? value : new EndpointImpl(value);
        }
    };
    /**
     * Gets the caller property value. Endpoint that initiated this segment.
     * @returns a EndpointInterface
     */
    public get caller() {
        return this._caller;
    };
    /**
     * Sets the caller property value. Endpoint that initiated this segment.
     * @param value Value to set for the caller property.
     */
    public set caller(value: Endpoint | undefined) {
        if(value) {
            this._caller = value instanceof EndpointImpl? value : new EndpointImpl(value);
        }
    };
    /**
     * Instantiates a new segment and sets the default values.
     * @param segmentParameterValue 
     */
    public constructor(segmentParameterValue?: Segment | undefined) {
        super(segmentParameterValue);
        this._callee = segmentParameterValue?.callee;
        this._caller = segmentParameterValue?.caller;
        this._endDateTime = segmentParameterValue?.endDateTime;
        this._failureInfo = segmentParameterValue?.failureInfo;
        this._media = segmentParameterValue?.media;
        this._startDateTime = segmentParameterValue?.startDateTime;
    };
    /**
     * Gets the endDateTime property value. UTC time when the segment ended. The DateTimeOffset type represents date and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z
     * @returns a Date
     */
    public get endDateTime() {
        return this._endDateTime;
    };
    /**
     * Sets the endDateTime property value. UTC time when the segment ended. The DateTimeOffset type represents date and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z
     * @param value Value to set for the endDateTime property.
     */
    public set endDateTime(value: Date | undefined) {
        if(value) {
            this._endDateTime = value;
        }
    };
    /**
     * Gets the failureInfo property value. Failure information associated with the segment if it failed.
     * @returns a FailureInfoInterface
     */
    public get failureInfo() {
        return this._failureInfo;
    };
    /**
     * Sets the failureInfo property value. Failure information associated with the segment if it failed.
     * @param value Value to set for the failureInfo property.
     */
    public set failureInfo(value: FailureInfo | undefined) {
        if(value) {
            this._failureInfo = value instanceof FailureInfoImpl? value : new FailureInfoImpl(value);
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
            "media": n => { this.media = n.getCollectionOfObjectValues<MediaImpl>(createMediaFromDiscriminatorValue); },
            "startDateTime": n => { this.startDateTime = n.getDateValue(); },
        };
    };
    /**
     * Gets the media property value. Media associated with this segment.
     * @returns a MediaInterface
     */
    public get media() {
        return this._media;
    };
    /**
     * Sets the media property value. Media associated with this segment.
     * @param value Value to set for the media property.
     */
    public set media(value: Media[] | undefined) {
        if(value) {
            const mediaArrValue: MediaImpl[] = [];
            this.media?.forEach(element => {
                mediaArrValue.push((element instanceof MediaImpl? element:new MediaImpl(element)));
            });
            this._media = mediaArrValue;
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
            writer.writeObjectValue<EndpointImpl>("callee", (!this.callee || this.callee instanceof EndpointImpl? this.callee : new EndpointImpl(this.callee)));
        }
        if(this.caller){
            writer.writeObjectValue<EndpointImpl>("caller", (!this.caller || this.caller instanceof EndpointImpl? this.caller : new EndpointImpl(this.caller)));
        }
        if(this.endDateTime){
            writer.writeDateValue("endDateTime", this.endDateTime);
        }
        if(this.failureInfo){
            writer.writeObjectValue<FailureInfoImpl>("failureInfo", (!this.failureInfo || this.failureInfo instanceof FailureInfoImpl? this.failureInfo : new FailureInfoImpl(this.failureInfo)));
        }
        if(this.media && this.media.length != 0){        const mediaArrValue: MediaImpl[] = [];
        this.media?.forEach(element => {
            mediaArrValue.push((element instanceof MediaImpl? element:new MediaImpl(element)));
        });
            writer.writeCollectionOfObjectValues<MediaImpl>("media", mediaArrValue);
        }
        if(this.startDateTime){
            writer.writeDateValue("startDateTime", this.startDateTime);
        }
    };
    /**
     * Gets the startDateTime property value. UTC time when the segment started. The DateTimeOffset type represents date and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z
     * @returns a Date
     */
    public get startDateTime() {
        return this._startDateTime;
    };
    /**
     * Sets the startDateTime property value. UTC time when the segment started. The DateTimeOffset type represents date and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z
     * @param value Value to set for the startDateTime property.
     */
    public set startDateTime(value: Date | undefined) {
        if(value) {
            this._startDateTime = value;
        }
    };
}
