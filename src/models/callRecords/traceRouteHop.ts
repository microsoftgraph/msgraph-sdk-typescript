import {AdditionalDataHolder, Duration, Parsable} from '@microsoft/kiota-abstractions';

export interface TraceRouteHop extends AdditionalDataHolder, Parsable {
    /**
     * Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     */
    additionalData?: Record<string, unknown>;
    /**
     * The network path count of this hop that was used to compute the RTT.
     */
    hopCount?: number | undefined;
    /**
     * IP address used for this hop in the network trace.
     */
    ipAddress?: string | undefined;
    /**
     * The OdataType property
     */
    odataType?: string | undefined;
    /**
     * The time from when the trace route packet was sent from the client to this hop and back to the client, denoted in [ISO 8601][] format. For example, 1 second is denoted as PT1S, where P is the duration designator, T is the time designator, and S is the second designator.
     */
    roundTripTime?: Duration | undefined;
}
