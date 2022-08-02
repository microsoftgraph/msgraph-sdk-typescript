import {AdditionalDataHolder, Duration, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class TraceRouteHop implements AdditionalDataHolder, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    private _additionalData: Record<string, unknown>;
    /** The network path count of this hop that was used to compute the round-trip time. */
    private _hopCount?: number | undefined;
    /** IP address used for this hop in the network trace. */
    private _ipAddress?: string | undefined;
    /** The OdataType property */
    private _odataType?: string | undefined;
    /** The time from when the trace route packet was sent from the client to this hop and back to the client, denoted in [ISO 8601][] format. For example, 1 second is denoted as PT1S, where P is the duration designator, T is the time designator, and S is the second designator. */
    private _roundTripTime?: Duration | undefined;
    /**
     * Gets the additionalData property value. Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     * @returns a Record<string, unknown>
     */
    public get additionalData() {
        return this._additionalData;
    };
    /**
     * Sets the additionalData property value. Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     * @param value Value to set for the AdditionalData property.
     */
    public set additionalData(value: Record<string, unknown>) {
        this._additionalData = value;
    };
    /**
     * Instantiates a new traceRouteHop and sets the default values.
     */
    public constructor() {
        this._additionalData = {};
        this.odataType = "#microsoft.graph.callRecords.traceRouteHop";
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "hopCount": n => { this.hopCount = n.getNumberValue(); },
            "ipAddress": n => { this.ipAddress = n.getStringValue(); },
            "@odata.type": n => { this.odataType = n.getStringValue(); },
            "roundTripTime": n => { this.roundTripTime = n.getDurationValue(); },
        };
    };
    /**
     * Gets the hopCount property value. The network path count of this hop that was used to compute the round-trip time.
     * @returns a integer
     */
    public get hopCount() {
        return this._hopCount;
    };
    /**
     * Sets the hopCount property value. The network path count of this hop that was used to compute the round-trip time.
     * @param value Value to set for the hopCount property.
     */
    public set hopCount(value: number | undefined) {
        this._hopCount = value;
    };
    /**
     * Gets the ipAddress property value. IP address used for this hop in the network trace.
     * @returns a string
     */
    public get ipAddress() {
        return this._ipAddress;
    };
    /**
     * Sets the ipAddress property value. IP address used for this hop in the network trace.
     * @param value Value to set for the ipAddress property.
     */
    public set ipAddress(value: string | undefined) {
        this._ipAddress = value;
    };
    /**
     * Gets the @odata.type property value. The OdataType property
     * @returns a string
     */
    public get odataType() {
        return this._odataType;
    };
    /**
     * Sets the @odata.type property value. The OdataType property
     * @param value Value to set for the OdataType property.
     */
    public set odataType(value: string | undefined) {
        this._odataType = value;
    };
    /**
     * Gets the roundTripTime property value. The time from when the trace route packet was sent from the client to this hop and back to the client, denoted in [ISO 8601][] format. For example, 1 second is denoted as PT1S, where P is the duration designator, T is the time designator, and S is the second designator.
     * @returns a Duration
     */
    public get roundTripTime() {
        return this._roundTripTime;
    };
    /**
     * Sets the roundTripTime property value. The time from when the trace route packet was sent from the client to this hop and back to the client, denoted in [ISO 8601][] format. For example, 1 second is denoted as PT1S, where P is the duration designator, T is the time designator, and S is the second designator.
     * @param value Value to set for the roundTripTime property.
     */
    public set roundTripTime(value: Duration | undefined) {
        this._roundTripTime = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        writer.writeNumberValue("hopCount", this.hopCount);
        writer.writeStringValue("ipAddress", this.ipAddress);
        writer.writeStringValue("@odata.type", this.odataType);
        writer.writeDurationValue("roundTripTime", this.roundTripTime);
        writer.writeAdditionalData(this.additionalData);
    };
}
