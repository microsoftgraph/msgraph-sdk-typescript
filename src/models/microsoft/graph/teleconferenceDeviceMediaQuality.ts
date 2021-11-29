import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class TeleconferenceDeviceMediaQuality implements Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.  */
    private _additionalData: Map<string, unknown>;
    /** The average inbound stream network jitter.  */
    private _averageInboundJitter?: string | undefined;
    /** The average inbound stream packet loss rate in percentage (0-100). For example, 0.01 means 0.01%.  */
    private _averageInboundPacketLossRateInPercentage?: number | undefined;
    /** The average inbound stream network round trip delay.  */
    private _averageInboundRoundTripDelay?: string | undefined;
    /** The average outbound stream network jitter.  */
    private _averageOutboundJitter?: string | undefined;
    /** The average outbound stream packet loss rate in percentage (0-100). For example, 0.01 means 0.01%.  */
    private _averageOutboundPacketLossRateInPercentage?: number | undefined;
    /** The average outbound stream network round trip delay.  */
    private _averageOutboundRoundTripDelay?: string | undefined;
    /** The channel index of media. Indexing begins with 1.  If a media session contains 3 video modalities, channel indexes will be 1, 2, and 3.  */
    private _channelIndex?: number | undefined;
    /** The total number of the inbound packets.  */
    private _inboundPackets?: number | undefined;
    /** the local IP address for the media session.  */
    private _localIPAddress?: string | undefined;
    /** The local media port.  */
    private _localPort?: number | undefined;
    /** The maximum inbound stream network jitter.  */
    private _maximumInboundJitter?: string | undefined;
    /** The maximum inbound stream packet loss rate in percentage (0-100). For example, 0.01 means 0.01%.  */
    private _maximumInboundPacketLossRateInPercentage?: number | undefined;
    /** The maximum inbound stream network round trip delay.  */
    private _maximumInboundRoundTripDelay?: string | undefined;
    /** The maximum outbound stream network jitter.  */
    private _maximumOutboundJitter?: string | undefined;
    /** The maximum outbound stream packet loss rate in percentage (0-100). For example, 0.01 means 0.01%.  */
    private _maximumOutboundPacketLossRateInPercentage?: number | undefined;
    /** The maximum outbound stream network round trip delay.  */
    private _maximumOutboundRoundTripDelay?: string | undefined;
    /** The total modality duration. If the media enabled and disabled multiple times, MediaDuration will the summation of all of the durations.  */
    private _mediaDuration?: string | undefined;
    /** The network link speed in bytes  */
    private _networkLinkSpeedInBytes?: number | undefined;
    /** The total number of the outbound packets.  */
    private _outboundPackets?: number | undefined;
    /** The remote IP address for the media session.  */
    private _remoteIPAddress?: string | undefined;
    /** The remote media port.  */
    private _remotePort?: number | undefined;
    /**
     * Instantiates a new teleconferenceDeviceMediaQuality and sets the default values.
     */
    public constructor() {
        this._additionalData = new Map<string, unknown>();
    };
    /**
     * Gets the AdditionalData property value. Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     * @returns a Map<string, unknown>
     */
    public get additionalData() {
        return this._additionalData;
    };
    /**
     * Gets the averageInboundJitter property value. The average inbound stream network jitter.
     * @returns a string
     */
    public get averageInboundJitter() {
        return this._averageInboundJitter;
    };
    /**
     * Gets the averageInboundPacketLossRateInPercentage property value. The average inbound stream packet loss rate in percentage (0-100). For example, 0.01 means 0.01%.
     * @returns a double
     */
    public get averageInboundPacketLossRateInPercentage() {
        return this._averageInboundPacketLossRateInPercentage;
    };
    /**
     * Gets the averageInboundRoundTripDelay property value. The average inbound stream network round trip delay.
     * @returns a string
     */
    public get averageInboundRoundTripDelay() {
        return this._averageInboundRoundTripDelay;
    };
    /**
     * Gets the averageOutboundJitter property value. The average outbound stream network jitter.
     * @returns a string
     */
    public get averageOutboundJitter() {
        return this._averageOutboundJitter;
    };
    /**
     * Gets the averageOutboundPacketLossRateInPercentage property value. The average outbound stream packet loss rate in percentage (0-100). For example, 0.01 means 0.01%.
     * @returns a double
     */
    public get averageOutboundPacketLossRateInPercentage() {
        return this._averageOutboundPacketLossRateInPercentage;
    };
    /**
     * Gets the averageOutboundRoundTripDelay property value. The average outbound stream network round trip delay.
     * @returns a string
     */
    public get averageOutboundRoundTripDelay() {
        return this._averageOutboundRoundTripDelay;
    };
    /**
     * Gets the channelIndex property value. The channel index of media. Indexing begins with 1.  If a media session contains 3 video modalities, channel indexes will be 1, 2, and 3.
     * @returns a integer
     */
    public get channelIndex() {
        return this._channelIndex;
    };
    /**
     * Gets the inboundPackets property value. The total number of the inbound packets.
     * @returns a int64
     */
    public get inboundPackets() {
        return this._inboundPackets;
    };
    /**
     * Gets the localIPAddress property value. the local IP address for the media session.
     * @returns a string
     */
    public get localIPAddress() {
        return this._localIPAddress;
    };
    /**
     * Gets the localPort property value. The local media port.
     * @returns a integer
     */
    public get localPort() {
        return this._localPort;
    };
    /**
     * Gets the maximumInboundJitter property value. The maximum inbound stream network jitter.
     * @returns a string
     */
    public get maximumInboundJitter() {
        return this._maximumInboundJitter;
    };
    /**
     * Gets the maximumInboundPacketLossRateInPercentage property value. The maximum inbound stream packet loss rate in percentage (0-100). For example, 0.01 means 0.01%.
     * @returns a double
     */
    public get maximumInboundPacketLossRateInPercentage() {
        return this._maximumInboundPacketLossRateInPercentage;
    };
    /**
     * Gets the maximumInboundRoundTripDelay property value. The maximum inbound stream network round trip delay.
     * @returns a string
     */
    public get maximumInboundRoundTripDelay() {
        return this._maximumInboundRoundTripDelay;
    };
    /**
     * Gets the maximumOutboundJitter property value. The maximum outbound stream network jitter.
     * @returns a string
     */
    public get maximumOutboundJitter() {
        return this._maximumOutboundJitter;
    };
    /**
     * Gets the maximumOutboundPacketLossRateInPercentage property value. The maximum outbound stream packet loss rate in percentage (0-100). For example, 0.01 means 0.01%.
     * @returns a double
     */
    public get maximumOutboundPacketLossRateInPercentage() {
        return this._maximumOutboundPacketLossRateInPercentage;
    };
    /**
     * Gets the maximumOutboundRoundTripDelay property value. The maximum outbound stream network round trip delay.
     * @returns a string
     */
    public get maximumOutboundRoundTripDelay() {
        return this._maximumOutboundRoundTripDelay;
    };
    /**
     * Gets the mediaDuration property value. The total modality duration. If the media enabled and disabled multiple times, MediaDuration will the summation of all of the durations.
     * @returns a string
     */
    public get mediaDuration() {
        return this._mediaDuration;
    };
    /**
     * Gets the networkLinkSpeedInBytes property value. The network link speed in bytes
     * @returns a int64
     */
    public get networkLinkSpeedInBytes() {
        return this._networkLinkSpeedInBytes;
    };
    /**
     * Gets the outboundPackets property value. The total number of the outbound packets.
     * @returns a int64
     */
    public get outboundPackets() {
        return this._outboundPackets;
    };
    /**
     * Gets the remoteIPAddress property value. The remote IP address for the media session.
     * @returns a string
     */
    public get remoteIPAddress() {
        return this._remoteIPAddress;
    };
    /**
     * Gets the remotePort property value. The remote media port.
     * @returns a integer
     */
    public get remotePort() {
        return this._remotePort;
    };
    /**
     * The deserialization information for the current model
     * @returns a Map<string, (item: T, node: ParseNode) => void>
     */
    public getFieldDeserializers<T>() : Map<string, (item: T, node: ParseNode) => void> {
        return new Map<string, (item: T, node: ParseNode) => void>([
            ["averageInboundJitter", (o, n) => { (o as unknown as TeleconferenceDeviceMediaQuality).averageInboundJitter = n.getStringValue(); }],
            ["averageInboundPacketLossRateInPercentage", (o, n) => { (o as unknown as TeleconferenceDeviceMediaQuality).averageInboundPacketLossRateInPercentage = n.getNumberValue(); }],
            ["averageInboundRoundTripDelay", (o, n) => { (o as unknown as TeleconferenceDeviceMediaQuality).averageInboundRoundTripDelay = n.getStringValue(); }],
            ["averageOutboundJitter", (o, n) => { (o as unknown as TeleconferenceDeviceMediaQuality).averageOutboundJitter = n.getStringValue(); }],
            ["averageOutboundPacketLossRateInPercentage", (o, n) => { (o as unknown as TeleconferenceDeviceMediaQuality).averageOutboundPacketLossRateInPercentage = n.getNumberValue(); }],
            ["averageOutboundRoundTripDelay", (o, n) => { (o as unknown as TeleconferenceDeviceMediaQuality).averageOutboundRoundTripDelay = n.getStringValue(); }],
            ["channelIndex", (o, n) => { (o as unknown as TeleconferenceDeviceMediaQuality).channelIndex = n.getNumberValue(); }],
            ["inboundPackets", (o, n) => { (o as unknown as TeleconferenceDeviceMediaQuality).inboundPackets = n.getNumberValue(); }],
            ["localIPAddress", (o, n) => { (o as unknown as TeleconferenceDeviceMediaQuality).localIPAddress = n.getStringValue(); }],
            ["localPort", (o, n) => { (o as unknown as TeleconferenceDeviceMediaQuality).localPort = n.getNumberValue(); }],
            ["maximumInboundJitter", (o, n) => { (o as unknown as TeleconferenceDeviceMediaQuality).maximumInboundJitter = n.getStringValue(); }],
            ["maximumInboundPacketLossRateInPercentage", (o, n) => { (o as unknown as TeleconferenceDeviceMediaQuality).maximumInboundPacketLossRateInPercentage = n.getNumberValue(); }],
            ["maximumInboundRoundTripDelay", (o, n) => { (o as unknown as TeleconferenceDeviceMediaQuality).maximumInboundRoundTripDelay = n.getStringValue(); }],
            ["maximumOutboundJitter", (o, n) => { (o as unknown as TeleconferenceDeviceMediaQuality).maximumOutboundJitter = n.getStringValue(); }],
            ["maximumOutboundPacketLossRateInPercentage", (o, n) => { (o as unknown as TeleconferenceDeviceMediaQuality).maximumOutboundPacketLossRateInPercentage = n.getNumberValue(); }],
            ["maximumOutboundRoundTripDelay", (o, n) => { (o as unknown as TeleconferenceDeviceMediaQuality).maximumOutboundRoundTripDelay = n.getStringValue(); }],
            ["mediaDuration", (o, n) => { (o as unknown as TeleconferenceDeviceMediaQuality).mediaDuration = n.getStringValue(); }],
            ["networkLinkSpeedInBytes", (o, n) => { (o as unknown as TeleconferenceDeviceMediaQuality).networkLinkSpeedInBytes = n.getNumberValue(); }],
            ["outboundPackets", (o, n) => { (o as unknown as TeleconferenceDeviceMediaQuality).outboundPackets = n.getNumberValue(); }],
            ["remoteIPAddress", (o, n) => { (o as unknown as TeleconferenceDeviceMediaQuality).remoteIPAddress = n.getStringValue(); }],
            ["remotePort", (o, n) => { (o as unknown as TeleconferenceDeviceMediaQuality).remotePort = n.getNumberValue(); }],
        ]);
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        writer.writeStringValue("averageInboundJitter", this.averageInboundJitter);
        writer.writeNumberValue("averageInboundPacketLossRateInPercentage", this.averageInboundPacketLossRateInPercentage);
        writer.writeStringValue("averageInboundRoundTripDelay", this.averageInboundRoundTripDelay);
        writer.writeStringValue("averageOutboundJitter", this.averageOutboundJitter);
        writer.writeNumberValue("averageOutboundPacketLossRateInPercentage", this.averageOutboundPacketLossRateInPercentage);
        writer.writeStringValue("averageOutboundRoundTripDelay", this.averageOutboundRoundTripDelay);
        writer.writeNumberValue("channelIndex", this.channelIndex);
        writer.writeNumberValue("inboundPackets", this.inboundPackets);
        writer.writeStringValue("localIPAddress", this.localIPAddress);
        writer.writeNumberValue("localPort", this.localPort);
        writer.writeStringValue("maximumInboundJitter", this.maximumInboundJitter);
        writer.writeNumberValue("maximumInboundPacketLossRateInPercentage", this.maximumInboundPacketLossRateInPercentage);
        writer.writeStringValue("maximumInboundRoundTripDelay", this.maximumInboundRoundTripDelay);
        writer.writeStringValue("maximumOutboundJitter", this.maximumOutboundJitter);
        writer.writeNumberValue("maximumOutboundPacketLossRateInPercentage", this.maximumOutboundPacketLossRateInPercentage);
        writer.writeStringValue("maximumOutboundRoundTripDelay", this.maximumOutboundRoundTripDelay);
        writer.writeStringValue("mediaDuration", this.mediaDuration);
        writer.writeNumberValue("networkLinkSpeedInBytes", this.networkLinkSpeedInBytes);
        writer.writeNumberValue("outboundPackets", this.outboundPackets);
        writer.writeStringValue("remoteIPAddress", this.remoteIPAddress);
        writer.writeNumberValue("remotePort", this.remotePort);
        writer.writeAdditionalData(this.additionalData);
    };
    /**
     * Sets the AdditionalData property value. Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     * @param value Value to set for the AdditionalData property.
     */
    public set additionalData(value: Map<string, unknown>) {
        this._additionalData = value;
    };
    /**
     * Sets the averageInboundJitter property value. The average inbound stream network jitter.
     * @param value Value to set for the averageInboundJitter property.
     */
    public set averageInboundJitter(value: string | undefined) {
        this._averageInboundJitter = value;
    };
    /**
     * Sets the averageInboundPacketLossRateInPercentage property value. The average inbound stream packet loss rate in percentage (0-100). For example, 0.01 means 0.01%.
     * @param value Value to set for the averageInboundPacketLossRateInPercentage property.
     */
    public set averageInboundPacketLossRateInPercentage(value: number | undefined) {
        this._averageInboundPacketLossRateInPercentage = value;
    };
    /**
     * Sets the averageInboundRoundTripDelay property value. The average inbound stream network round trip delay.
     * @param value Value to set for the averageInboundRoundTripDelay property.
     */
    public set averageInboundRoundTripDelay(value: string | undefined) {
        this._averageInboundRoundTripDelay = value;
    };
    /**
     * Sets the averageOutboundJitter property value. The average outbound stream network jitter.
     * @param value Value to set for the averageOutboundJitter property.
     */
    public set averageOutboundJitter(value: string | undefined) {
        this._averageOutboundJitter = value;
    };
    /**
     * Sets the averageOutboundPacketLossRateInPercentage property value. The average outbound stream packet loss rate in percentage (0-100). For example, 0.01 means 0.01%.
     * @param value Value to set for the averageOutboundPacketLossRateInPercentage property.
     */
    public set averageOutboundPacketLossRateInPercentage(value: number | undefined) {
        this._averageOutboundPacketLossRateInPercentage = value;
    };
    /**
     * Sets the averageOutboundRoundTripDelay property value. The average outbound stream network round trip delay.
     * @param value Value to set for the averageOutboundRoundTripDelay property.
     */
    public set averageOutboundRoundTripDelay(value: string | undefined) {
        this._averageOutboundRoundTripDelay = value;
    };
    /**
     * Sets the channelIndex property value. The channel index of media. Indexing begins with 1.  If a media session contains 3 video modalities, channel indexes will be 1, 2, and 3.
     * @param value Value to set for the channelIndex property.
     */
    public set channelIndex(value: number | undefined) {
        this._channelIndex = value;
    };
    /**
     * Sets the inboundPackets property value. The total number of the inbound packets.
     * @param value Value to set for the inboundPackets property.
     */
    public set inboundPackets(value: number | undefined) {
        this._inboundPackets = value;
    };
    /**
     * Sets the localIPAddress property value. the local IP address for the media session.
     * @param value Value to set for the localIPAddress property.
     */
    public set localIPAddress(value: string | undefined) {
        this._localIPAddress = value;
    };
    /**
     * Sets the localPort property value. The local media port.
     * @param value Value to set for the localPort property.
     */
    public set localPort(value: number | undefined) {
        this._localPort = value;
    };
    /**
     * Sets the maximumInboundJitter property value. The maximum inbound stream network jitter.
     * @param value Value to set for the maximumInboundJitter property.
     */
    public set maximumInboundJitter(value: string | undefined) {
        this._maximumInboundJitter = value;
    };
    /**
     * Sets the maximumInboundPacketLossRateInPercentage property value. The maximum inbound stream packet loss rate in percentage (0-100). For example, 0.01 means 0.01%.
     * @param value Value to set for the maximumInboundPacketLossRateInPercentage property.
     */
    public set maximumInboundPacketLossRateInPercentage(value: number | undefined) {
        this._maximumInboundPacketLossRateInPercentage = value;
    };
    /**
     * Sets the maximumInboundRoundTripDelay property value. The maximum inbound stream network round trip delay.
     * @param value Value to set for the maximumInboundRoundTripDelay property.
     */
    public set maximumInboundRoundTripDelay(value: string | undefined) {
        this._maximumInboundRoundTripDelay = value;
    };
    /**
     * Sets the maximumOutboundJitter property value. The maximum outbound stream network jitter.
     * @param value Value to set for the maximumOutboundJitter property.
     */
    public set maximumOutboundJitter(value: string | undefined) {
        this._maximumOutboundJitter = value;
    };
    /**
     * Sets the maximumOutboundPacketLossRateInPercentage property value. The maximum outbound stream packet loss rate in percentage (0-100). For example, 0.01 means 0.01%.
     * @param value Value to set for the maximumOutboundPacketLossRateInPercentage property.
     */
    public set maximumOutboundPacketLossRateInPercentage(value: number | undefined) {
        this._maximumOutboundPacketLossRateInPercentage = value;
    };
    /**
     * Sets the maximumOutboundRoundTripDelay property value. The maximum outbound stream network round trip delay.
     * @param value Value to set for the maximumOutboundRoundTripDelay property.
     */
    public set maximumOutboundRoundTripDelay(value: string | undefined) {
        this._maximumOutboundRoundTripDelay = value;
    };
    /**
     * Sets the mediaDuration property value. The total modality duration. If the media enabled and disabled multiple times, MediaDuration will the summation of all of the durations.
     * @param value Value to set for the mediaDuration property.
     */
    public set mediaDuration(value: string | undefined) {
        this._mediaDuration = value;
    };
    /**
     * Sets the networkLinkSpeedInBytes property value. The network link speed in bytes
     * @param value Value to set for the networkLinkSpeedInBytes property.
     */
    public set networkLinkSpeedInBytes(value: number | undefined) {
        this._networkLinkSpeedInBytes = value;
    };
    /**
     * Sets the outboundPackets property value. The total number of the outbound packets.
     * @param value Value to set for the outboundPackets property.
     */
    public set outboundPackets(value: number | undefined) {
        this._outboundPackets = value;
    };
    /**
     * Sets the remoteIPAddress property value. The remote IP address for the media session.
     * @param value Value to set for the remoteIPAddress property.
     */
    public set remoteIPAddress(value: string | undefined) {
        this._remoteIPAddress = value;
    };
    /**
     * Sets the remotePort property value. The remote media port.
     * @param value Value to set for the remotePort property.
     */
    public set remotePort(value: number | undefined) {
        this._remotePort = value;
    };
}
