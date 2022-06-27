import {TraceRouteHop} from './traceRouteHop';
import {AdditionalDataHolder, Duration, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class TraceRouteHopImpl implements TraceRouteHop {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    public additionalData: Record<string, unknown>;
    /** The network path count of this hop that was used to compute the round-trip time. */
    public hopCount?: number | undefined;
    /** IP address used for this hop in the network trace. */
    public ipAddress?: string | undefined;
    /** The time from when the trace route packet was sent from the client to this hop and back to the client, denoted in [ISO 8601][] format. For example, 1 second is denoted as PT1S, where P is the duration designator, T is the time designator, and S is the second designator. */
    public roundTripTime?: Duration | undefined;
    /**
     * Instantiates a new traceRouteHop and sets the default values.
     * @param traceRouteHopParameterValue 
     */
    public constructor(traceRouteHopParameterValue?: TraceRouteHop | undefined) {
        this.additionalData = traceRouteHopParameterValue?.additionalData ? traceRouteHopParameterValue?.additionalData! : {};
        this.hopCount = traceRouteHopParameterValue?.hopCount;
        this.ipAddress = traceRouteHopParameterValue?.ipAddress;
        this.roundTripTime = traceRouteHopParameterValue?.roundTripTime;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "hopCount": n => { this.hopCount = n.getNumberValue(); },
            "ipAddress": n => { this.ipAddress = n.getStringValue(); },
            "roundTripTime": n => { this.roundTripTime = n.getDurationValue(); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        if(this.hopCount){
            writer.writeNumberValue("hopCount", this.hopCount);
        }
        if(this.ipAddress){
            writer.writeStringValue("ipAddress", this.ipAddress);
        }
        if(this.roundTripTime){
            writer.writeDurationValue("roundTripTime", this.roundTripTime);
        }
        writer.writeAdditionalData(this.additionalData);
    };
}
