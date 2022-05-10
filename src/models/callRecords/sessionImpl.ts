import {EntityImpl} from '../';
import {createEndpointFromDiscriminatorValue} from './createEndpointFromDiscriminatorValue';
import {createFailureInfoFromDiscriminatorValue} from './createFailureInfoFromDiscriminatorValue';
import {createSegmentFromDiscriminatorValue} from './createSegmentFromDiscriminatorValue';
import {Endpoint} from './endpoint';
import {FailureInfo} from './failureInfo';
import {EndpointImpl, FailureInfoImpl, SegmentImpl} from './index';
import {Modality} from './modality';
import {Segment} from './segment';
import {Session} from './session';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class SessionImpl extends EntityImpl implements Parsable, Session {
    /** Endpoint that answered the session.  */
    callee?: Endpoint | undefined;
    /** Endpoint that initiated the session.  */
    caller?: Endpoint | undefined;
    /** UTC time when the last user left the session. The DateTimeOffset type represents date and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z  */
    endDateTime?: Date | undefined;
    /** Failure information associated with the session if the session failed.  */
    failureInfo?: FailureInfo | undefined;
    /** List of modalities present in the session. Possible values are: unknown, audio, video, videoBasedScreenSharing, data, screenSharing, unknownFutureValue.  */
    modalities?: Modality[] | undefined;
    /** The list of segments involved in the session. Read-only. Nullable.  */
    segments?: Segment[] | undefined;
    /** UTC fime when the first user joined the session. The DateTimeOffset type represents date and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z  */
    startDateTime?: Date | undefined;
    /**
     * Instantiates a new session and sets the default values.
     * @param sessionParameterValue 
     */
    public constructor(sessionParameterValue?: Session | undefined) {
        super();
        this.callee = sessionParameterValue?.callee ;
        this.caller = sessionParameterValue?.caller ;
        this.endDateTime = sessionParameterValue?.endDateTime ;
        this.failureInfo = sessionParameterValue?.failureInfo ;
        this.modalities = sessionParameterValue?.modalities ;
        this.segments = sessionParameterValue?.segments ;
        this.startDateTime = sessionParameterValue?.startDateTime ;
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
            "modalities": n => { this.modalities = n.getEnumValues<Modality>(Modality); },
            "segments": n => { this.segments = n.getCollectionOfObjectValues<SegmentImpl>(createSegmentFromDiscriminatorValue); },
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
        if(this.callee)
        writer.writeObjectValue<EndpointImpl>("callee", new EndpointImpl(this.callee));
        }
        if(this.caller){
        if(this.caller)
        writer.writeObjectValue<EndpointImpl>("caller", new EndpointImpl(this.caller));
        }
        if(this.endDateTime){
        if(this.endDateTime)
        writer.writeDateValue("endDateTime", this.endDateTime);
        }
        if(this.failureInfo){
        if(this.failureInfo)
        writer.writeObjectValue<FailureInfoImpl>("failureInfo", new FailureInfoImpl(this.failureInfo));
        }
        if(this.modalities){
        if(this.modalities)
        this.modalities && writer.writeEnumValue<Modality>("modalities", ...this.modalities);
        }
        if(this.segments){
        const segmentsArrValue: SegmentImpl[] = []; this.segments?.forEach(element => {segmentsArrValue.push(new SegmentImpl(element));});
        writer.writeCollectionOfObjectValues<SegmentImpl>("segments", segmentsArrValue);
        }
        if(this.startDateTime){
        if(this.startDateTime)
        writer.writeDateValue("startDateTime", this.startDateTime);
        }
    };
}
