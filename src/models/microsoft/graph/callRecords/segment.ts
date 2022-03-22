import {Entity} from '../';
import {createEndpointFromDiscriminatorValue} from './createEndpointFromDiscriminatorValue';
import {createFailureInfoFromDiscriminatorValue} from './createFailureInfoFromDiscriminatorValue';
import {createMediaFromDiscriminatorValue} from './createMediaFromDiscriminatorValue';
import {Endpoint, FailureInfo, Media} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class Segment extends Entity implements Parsable {
    /** Endpoint that answered this segment.  */
    private _callee?: Endpoint | undefined;
    /** Endpoint that initiated this segment.  */
    private _caller?: Endpoint | undefined;
    /** UTC time when the segment ended. The DateTimeOffset type represents date and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z  */
    private _endDateTime?: Date | undefined;
    /** Failure information associated with the segment if it failed.  */
    private _failureInfo?: FailureInfo | undefined;
    /** Media associated with this segment.  */
    private _media?: Media[] | undefined;
    /** UTC time when the segment started. The DateTimeOffset type represents date and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z  */
    private _startDateTime?: Date | undefined;
    /**
     * Gets the callee property value. Endpoint that answered this segment.
     * @returns a endpoint
     */
    public get callee() {
        return this._callee;
    };
    /**
     * Sets the callee property value. Endpoint that answered this segment.
     * @param value Value to set for the callee property.
     */
    public set callee(value: Endpoint | undefined) {
        this._callee = value;
    };
    /**
     * Gets the caller property value. Endpoint that initiated this segment.
     * @returns a endpoint
     */
    public get caller() {
        return this._caller;
    };
    /**
     * Sets the caller property value. Endpoint that initiated this segment.
     * @param value Value to set for the caller property.
     */
    public set caller(value: Endpoint | undefined) {
        this._caller = value;
    };
    /**
     * Instantiates a new segment and sets the default values.
     */
    public constructor() {
        super();
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
        this._endDateTime = value;
    };
    /**
     * Gets the failureInfo property value. Failure information associated with the segment if it failed.
     * @returns a failureInfo
     */
    public get failureInfo() {
        return this._failureInfo;
    };
    /**
     * Sets the failureInfo property value. Failure information associated with the segment if it failed.
     * @param value Value to set for the failureInfo property.
     */
    public set failureInfo(value: FailureInfo | undefined) {
        this._failureInfo = value;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (item: T, node: ParseNode) => void>
     */
    public getFieldDeserializers<T>() : Record<string, (item: T, node: ParseNode) => void> {
        return {...super.getFieldDeserializers<T>(),
            "callee": (o, n) => { (o as unknown as Segment).callee = n.getObjectValue<Endpoint>(createEndpointFromDiscriminatorValue); },
            "caller": (o, n) => { (o as unknown as Segment).caller = n.getObjectValue<Endpoint>(createEndpointFromDiscriminatorValue); },
            "endDateTime": (o, n) => { (o as unknown as Segment).endDateTime = n.getDateValue(); },
            "failureInfo": (o, n) => { (o as unknown as Segment).failureInfo = n.getObjectValue<FailureInfo>(createFailureInfoFromDiscriminatorValue); },
            "media": (o, n) => { (o as unknown as Segment).media = n.getCollectionOfObjectValues<Media>(createMediaFromDiscriminatorValue); },
            "startDateTime": (o, n) => { (o as unknown as Segment).startDateTime = n.getDateValue(); },
        };
    };
    /**
     * Gets the media property value. Media associated with this segment.
     * @returns a media
     */
    public get media() {
        return this._media;
    };
    /**
     * Sets the media property value. Media associated with this segment.
     * @param value Value to set for the media property.
     */
    public set media(value: Media[] | undefined) {
        this._media = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        writer.writeObjectValue<Endpoint>("callee", this.callee);
        writer.writeObjectValue<Endpoint>("caller", this.caller);
        writer.writeDateValue("endDateTime", this.endDateTime);
        writer.writeObjectValue<FailureInfo>("failureInfo", this.failureInfo);
        writer.writeCollectionOfObjectValues<Media>("media", this.media);
        writer.writeDateValue("startDateTime", this.startDateTime);
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
        this._startDateTime = value;
    };
}
