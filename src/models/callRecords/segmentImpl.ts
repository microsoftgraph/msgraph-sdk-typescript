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
export class SegmentImpl extends EntityImpl implements Parsable, Segment {
    /** Endpoint that answered this segment. */
    public callee?: Endpoint | undefined;
    /** Endpoint that initiated this segment. */
    public caller?: Endpoint | undefined;
    /** UTC time when the segment ended. The DateTimeOffset type represents date and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z */
    public endDateTime?: Date | undefined;
    /** Failure information associated with the segment if it failed. */
    public failureInfo?: FailureInfo | undefined;
    /** Media associated with this segment. */
    public media?: Media[] | undefined;
    /** UTC time when the segment started. The DateTimeOffset type represents date and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z */
    public startDateTime?: Date | undefined;
    /**
     * Instantiates a new segment and sets the default values.
     * @param segmentParameterValue 
     */
    public constructor(segmentParameterValue?: Segment | undefined) {
        super();
        this.callee = segmentParameterValue?.callee ;
        this.caller = segmentParameterValue?.caller ;
        this.endDateTime = segmentParameterValue?.endDateTime ;
        this.failureInfo = segmentParameterValue?.failureInfo ;
        this.media = segmentParameterValue?.media ;
        this.startDateTime = segmentParameterValue?.startDateTime ;
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
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        if(this.callee){
        writer.writeObjectValue<EndpointImpl>("callee", new EndpointImpl(this.callee));
        }
        if(this.caller){
        writer.writeObjectValue<EndpointImpl>("caller", new EndpointImpl(this.caller));
        }
        if(this.endDateTime){
        writer.writeDateValue("endDateTime", this.endDateTime);
        }
        if(this.failureInfo){
        writer.writeObjectValue<FailureInfoImpl>("failureInfo", new FailureInfoImpl(this.failureInfo));
        }
        if(this.media && this.media.length != 0){        const mediaArrValue: MediaImpl[] = []; this.media?.forEach(element => {mediaArrValue.push(new MediaImpl(element));});
        writer.writeCollectionOfObjectValues<MediaImpl>("media", mediaArrValue);
        }
        if(this.startDateTime){
        writer.writeDateValue("startDateTime", this.startDateTime);
        }
    };
}
