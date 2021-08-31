"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TeleconferenceDeviceMediaQuality = void 0;
var TeleconferenceDeviceMediaQuality = /** @class */ (function () {
    /**
     * Instantiates a new teleconferenceDeviceMediaQuality and sets the default values.
     */
    function TeleconferenceDeviceMediaQuality() {
        this._additionalData = new Map();
    }
    ;
    Object.defineProperty(TeleconferenceDeviceMediaQuality.prototype, "additionalData", {
        /**
         * Gets the AdditionalData property value. Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
         * @returns a Map<string, unknown>
         */
        get: function () {
            return this._additionalData;
        },
        /**
         * Sets the AdditionalData property value. Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
         * @param value Value to set for the AdditionalData property.
         */
        set: function (value) {
            this._additionalData = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(TeleconferenceDeviceMediaQuality.prototype, "averageInboundJitter", {
        /**
         * Gets the averageInboundJitter property value. The average inbound stream network jitter.
         * @returns a string
         */
        get: function () {
            return this._averageInboundJitter;
        },
        /**
         * Sets the averageInboundJitter property value. The average inbound stream network jitter.
         * @param value Value to set for the averageInboundJitter property.
         */
        set: function (value) {
            this._averageInboundJitter = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(TeleconferenceDeviceMediaQuality.prototype, "averageInboundPacketLossRateInPercentage", {
        /**
         * Gets the averageInboundPacketLossRateInPercentage property value. The average inbound stream packet loss rate in percentage (0-100). For example, 0.01 means 0.01%.
         * @returns a double
         */
        get: function () {
            return this._averageInboundPacketLossRateInPercentage;
        },
        /**
         * Sets the averageInboundPacketLossRateInPercentage property value. The average inbound stream packet loss rate in percentage (0-100). For example, 0.01 means 0.01%.
         * @param value Value to set for the averageInboundPacketLossRateInPercentage property.
         */
        set: function (value) {
            this._averageInboundPacketLossRateInPercentage = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(TeleconferenceDeviceMediaQuality.prototype, "averageInboundRoundTripDelay", {
        /**
         * Gets the averageInboundRoundTripDelay property value. The average inbound stream network round trip delay.
         * @returns a string
         */
        get: function () {
            return this._averageInboundRoundTripDelay;
        },
        /**
         * Sets the averageInboundRoundTripDelay property value. The average inbound stream network round trip delay.
         * @param value Value to set for the averageInboundRoundTripDelay property.
         */
        set: function (value) {
            this._averageInboundRoundTripDelay = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(TeleconferenceDeviceMediaQuality.prototype, "averageOutboundJitter", {
        /**
         * Gets the averageOutboundJitter property value. The average outbound stream network jitter.
         * @returns a string
         */
        get: function () {
            return this._averageOutboundJitter;
        },
        /**
         * Sets the averageOutboundJitter property value. The average outbound stream network jitter.
         * @param value Value to set for the averageOutboundJitter property.
         */
        set: function (value) {
            this._averageOutboundJitter = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(TeleconferenceDeviceMediaQuality.prototype, "averageOutboundPacketLossRateInPercentage", {
        /**
         * Gets the averageOutboundPacketLossRateInPercentage property value. The average outbound stream packet loss rate in percentage (0-100). For example, 0.01 means 0.01%.
         * @returns a double
         */
        get: function () {
            return this._averageOutboundPacketLossRateInPercentage;
        },
        /**
         * Sets the averageOutboundPacketLossRateInPercentage property value. The average outbound stream packet loss rate in percentage (0-100). For example, 0.01 means 0.01%.
         * @param value Value to set for the averageOutboundPacketLossRateInPercentage property.
         */
        set: function (value) {
            this._averageOutboundPacketLossRateInPercentage = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(TeleconferenceDeviceMediaQuality.prototype, "averageOutboundRoundTripDelay", {
        /**
         * Gets the averageOutboundRoundTripDelay property value. The average outbound stream network round trip delay.
         * @returns a string
         */
        get: function () {
            return this._averageOutboundRoundTripDelay;
        },
        /**
         * Sets the averageOutboundRoundTripDelay property value. The average outbound stream network round trip delay.
         * @param value Value to set for the averageOutboundRoundTripDelay property.
         */
        set: function (value) {
            this._averageOutboundRoundTripDelay = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(TeleconferenceDeviceMediaQuality.prototype, "channelIndex", {
        /**
         * Gets the channelIndex property value. The channel index of media. Indexing begins with 1.  If a media session contains 3 video modalities, channel indexes will be 1, 2, and 3.
         * @returns a integer
         */
        get: function () {
            return this._channelIndex;
        },
        /**
         * Sets the channelIndex property value. The channel index of media. Indexing begins with 1.  If a media session contains 3 video modalities, channel indexes will be 1, 2, and 3.
         * @param value Value to set for the channelIndex property.
         */
        set: function (value) {
            this._channelIndex = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(TeleconferenceDeviceMediaQuality.prototype, "inboundPackets", {
        /**
         * Gets the inboundPackets property value. The total number of the inbound packets.
         * @returns a int64
         */
        get: function () {
            return this._inboundPackets;
        },
        /**
         * Sets the inboundPackets property value. The total number of the inbound packets.
         * @param value Value to set for the inboundPackets property.
         */
        set: function (value) {
            this._inboundPackets = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(TeleconferenceDeviceMediaQuality.prototype, "localIPAddress", {
        /**
         * Gets the localIPAddress property value. the local IP address for the media session.
         * @returns a string
         */
        get: function () {
            return this._localIPAddress;
        },
        /**
         * Sets the localIPAddress property value. the local IP address for the media session.
         * @param value Value to set for the localIPAddress property.
         */
        set: function (value) {
            this._localIPAddress = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(TeleconferenceDeviceMediaQuality.prototype, "localPort", {
        /**
         * Gets the localPort property value. The local media port.
         * @returns a integer
         */
        get: function () {
            return this._localPort;
        },
        /**
         * Sets the localPort property value. The local media port.
         * @param value Value to set for the localPort property.
         */
        set: function (value) {
            this._localPort = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(TeleconferenceDeviceMediaQuality.prototype, "maximumInboundJitter", {
        /**
         * Gets the maximumInboundJitter property value. The maximum inbound stream network jitter.
         * @returns a string
         */
        get: function () {
            return this._maximumInboundJitter;
        },
        /**
         * Sets the maximumInboundJitter property value. The maximum inbound stream network jitter.
         * @param value Value to set for the maximumInboundJitter property.
         */
        set: function (value) {
            this._maximumInboundJitter = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(TeleconferenceDeviceMediaQuality.prototype, "maximumInboundPacketLossRateInPercentage", {
        /**
         * Gets the maximumInboundPacketLossRateInPercentage property value. The maximum inbound stream packet loss rate in percentage (0-100). For example, 0.01 means 0.01%.
         * @returns a double
         */
        get: function () {
            return this._maximumInboundPacketLossRateInPercentage;
        },
        /**
         * Sets the maximumInboundPacketLossRateInPercentage property value. The maximum inbound stream packet loss rate in percentage (0-100). For example, 0.01 means 0.01%.
         * @param value Value to set for the maximumInboundPacketLossRateInPercentage property.
         */
        set: function (value) {
            this._maximumInboundPacketLossRateInPercentage = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(TeleconferenceDeviceMediaQuality.prototype, "maximumInboundRoundTripDelay", {
        /**
         * Gets the maximumInboundRoundTripDelay property value. The maximum inbound stream network round trip delay.
         * @returns a string
         */
        get: function () {
            return this._maximumInboundRoundTripDelay;
        },
        /**
         * Sets the maximumInboundRoundTripDelay property value. The maximum inbound stream network round trip delay.
         * @param value Value to set for the maximumInboundRoundTripDelay property.
         */
        set: function (value) {
            this._maximumInboundRoundTripDelay = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(TeleconferenceDeviceMediaQuality.prototype, "maximumOutboundJitter", {
        /**
         * Gets the maximumOutboundJitter property value. The maximum outbound stream network jitter.
         * @returns a string
         */
        get: function () {
            return this._maximumOutboundJitter;
        },
        /**
         * Sets the maximumOutboundJitter property value. The maximum outbound stream network jitter.
         * @param value Value to set for the maximumOutboundJitter property.
         */
        set: function (value) {
            this._maximumOutboundJitter = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(TeleconferenceDeviceMediaQuality.prototype, "maximumOutboundPacketLossRateInPercentage", {
        /**
         * Gets the maximumOutboundPacketLossRateInPercentage property value. The maximum outbound stream packet loss rate in percentage (0-100). For example, 0.01 means 0.01%.
         * @returns a double
         */
        get: function () {
            return this._maximumOutboundPacketLossRateInPercentage;
        },
        /**
         * Sets the maximumOutboundPacketLossRateInPercentage property value. The maximum outbound stream packet loss rate in percentage (0-100). For example, 0.01 means 0.01%.
         * @param value Value to set for the maximumOutboundPacketLossRateInPercentage property.
         */
        set: function (value) {
            this._maximumOutboundPacketLossRateInPercentage = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(TeleconferenceDeviceMediaQuality.prototype, "maximumOutboundRoundTripDelay", {
        /**
         * Gets the maximumOutboundRoundTripDelay property value. The maximum outbound stream network round trip delay.
         * @returns a string
         */
        get: function () {
            return this._maximumOutboundRoundTripDelay;
        },
        /**
         * Sets the maximumOutboundRoundTripDelay property value. The maximum outbound stream network round trip delay.
         * @param value Value to set for the maximumOutboundRoundTripDelay property.
         */
        set: function (value) {
            this._maximumOutboundRoundTripDelay = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(TeleconferenceDeviceMediaQuality.prototype, "mediaDuration", {
        /**
         * Gets the mediaDuration property value. The total modality duration. If the media enabled and disabled multiple times, MediaDuration will the summation of all of the durations.
         * @returns a string
         */
        get: function () {
            return this._mediaDuration;
        },
        /**
         * Sets the mediaDuration property value. The total modality duration. If the media enabled and disabled multiple times, MediaDuration will the summation of all of the durations.
         * @param value Value to set for the mediaDuration property.
         */
        set: function (value) {
            this._mediaDuration = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(TeleconferenceDeviceMediaQuality.prototype, "networkLinkSpeedInBytes", {
        /**
         * Gets the networkLinkSpeedInBytes property value. The network link speed in bytes
         * @returns a int64
         */
        get: function () {
            return this._networkLinkSpeedInBytes;
        },
        /**
         * Sets the networkLinkSpeedInBytes property value. The network link speed in bytes
         * @param value Value to set for the networkLinkSpeedInBytes property.
         */
        set: function (value) {
            this._networkLinkSpeedInBytes = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(TeleconferenceDeviceMediaQuality.prototype, "outboundPackets", {
        /**
         * Gets the outboundPackets property value. The total number of the outbound packets.
         * @returns a int64
         */
        get: function () {
            return this._outboundPackets;
        },
        /**
         * Sets the outboundPackets property value. The total number of the outbound packets.
         * @param value Value to set for the outboundPackets property.
         */
        set: function (value) {
            this._outboundPackets = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(TeleconferenceDeviceMediaQuality.prototype, "remoteIPAddress", {
        /**
         * Gets the remoteIPAddress property value. The remote IP address for the media session.
         * @returns a string
         */
        get: function () {
            return this._remoteIPAddress;
        },
        /**
         * Sets the remoteIPAddress property value. The remote IP address for the media session.
         * @param value Value to set for the remoteIPAddress property.
         */
        set: function (value) {
            this._remoteIPAddress = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(TeleconferenceDeviceMediaQuality.prototype, "remotePort", {
        /**
         * Gets the remotePort property value. The remote media port.
         * @returns a integer
         */
        get: function () {
            return this._remotePort;
        },
        /**
         * Sets the remotePort property value. The remote media port.
         * @param value Value to set for the remotePort property.
         */
        set: function (value) {
            this._remotePort = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    /**
     * The deserialization information for the current model
     * @returns a Map<string, (item: T, node: ParseNode) => void>
     */
    TeleconferenceDeviceMediaQuality.prototype.getFieldDeserializers = function () {
        return new Map([
            ["averageInboundJitter", function (o, n) { o.averageInboundJitter = n.getStringValue(); }],
            ["averageInboundPacketLossRateInPercentage", function (o, n) { o.averageInboundPacketLossRateInPercentage = n.getNumberValue(); }],
            ["averageInboundRoundTripDelay", function (o, n) { o.averageInboundRoundTripDelay = n.getStringValue(); }],
            ["averageOutboundJitter", function (o, n) { o.averageOutboundJitter = n.getStringValue(); }],
            ["averageOutboundPacketLossRateInPercentage", function (o, n) { o.averageOutboundPacketLossRateInPercentage = n.getNumberValue(); }],
            ["averageOutboundRoundTripDelay", function (o, n) { o.averageOutboundRoundTripDelay = n.getStringValue(); }],
            ["channelIndex", function (o, n) { o.channelIndex = n.getNumberValue(); }],
            ["inboundPackets", function (o, n) { o.inboundPackets = n.getObjectValue(Int64); }],
            ["localIPAddress", function (o, n) { o.localIPAddress = n.getStringValue(); }],
            ["localPort", function (o, n) { o.localPort = n.getNumberValue(); }],
            ["maximumInboundJitter", function (o, n) { o.maximumInboundJitter = n.getStringValue(); }],
            ["maximumInboundPacketLossRateInPercentage", function (o, n) { o.maximumInboundPacketLossRateInPercentage = n.getNumberValue(); }],
            ["maximumInboundRoundTripDelay", function (o, n) { o.maximumInboundRoundTripDelay = n.getStringValue(); }],
            ["maximumOutboundJitter", function (o, n) { o.maximumOutboundJitter = n.getStringValue(); }],
            ["maximumOutboundPacketLossRateInPercentage", function (o, n) { o.maximumOutboundPacketLossRateInPercentage = n.getNumberValue(); }],
            ["maximumOutboundRoundTripDelay", function (o, n) { o.maximumOutboundRoundTripDelay = n.getStringValue(); }],
            ["mediaDuration", function (o, n) { o.mediaDuration = n.getStringValue(); }],
            ["networkLinkSpeedInBytes", function (o, n) { o.networkLinkSpeedInBytes = n.getObjectValue(Int64); }],
            ["outboundPackets", function (o, n) { o.outboundPackets = n.getObjectValue(Int64); }],
            ["remoteIPAddress", function (o, n) { o.remoteIPAddress = n.getStringValue(); }],
            ["remotePort", function (o, n) { o.remotePort = n.getNumberValue(); }],
        ]);
    };
    ;
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    TeleconferenceDeviceMediaQuality.prototype.serialize = function (writer) {
        if (!writer)
            throw new Error("writer cannot be undefined");
        writer.writeStringValue("averageInboundJitter", this.averageInboundJitter);
        writer.writeNumberValue("averageInboundPacketLossRateInPercentage", this.averageInboundPacketLossRateInPercentage);
        writer.writeStringValue("averageInboundRoundTripDelay", this.averageInboundRoundTripDelay);
        writer.writeStringValue("averageOutboundJitter", this.averageOutboundJitter);
        writer.writeNumberValue("averageOutboundPacketLossRateInPercentage", this.averageOutboundPacketLossRateInPercentage);
        writer.writeStringValue("averageOutboundRoundTripDelay", this.averageOutboundRoundTripDelay);
        writer.writeNumberValue("channelIndex", this.channelIndex);
        writer.writeObjectValue("inboundPackets", this.inboundPackets);
        writer.writeStringValue("localIPAddress", this.localIPAddress);
        writer.writeNumberValue("localPort", this.localPort);
        writer.writeStringValue("maximumInboundJitter", this.maximumInboundJitter);
        writer.writeNumberValue("maximumInboundPacketLossRateInPercentage", this.maximumInboundPacketLossRateInPercentage);
        writer.writeStringValue("maximumInboundRoundTripDelay", this.maximumInboundRoundTripDelay);
        writer.writeStringValue("maximumOutboundJitter", this.maximumOutboundJitter);
        writer.writeNumberValue("maximumOutboundPacketLossRateInPercentage", this.maximumOutboundPacketLossRateInPercentage);
        writer.writeStringValue("maximumOutboundRoundTripDelay", this.maximumOutboundRoundTripDelay);
        writer.writeStringValue("mediaDuration", this.mediaDuration);
        writer.writeObjectValue("networkLinkSpeedInBytes", this.networkLinkSpeedInBytes);
        writer.writeObjectValue("outboundPackets", this.outboundPackets);
        writer.writeStringValue("remoteIPAddress", this.remoteIPAddress);
        writer.writeNumberValue("remotePort", this.remotePort);
        writer.writeAdditionalData(this.additionalData);
    };
    ;
    ;
    ;
    ;
    ;
    ;
    ;
    ;
    ;
    ;
    ;
    ;
    ;
    ;
    ;
    ;
    ;
    ;
    ;
    ;
    ;
    ;
    ;
    return TeleconferenceDeviceMediaQuality;
}());
exports.TeleconferenceDeviceMediaQuality = TeleconferenceDeviceMediaQuality;
