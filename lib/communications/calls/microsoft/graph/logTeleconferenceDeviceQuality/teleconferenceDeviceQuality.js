"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TeleconferenceDeviceQuality = void 0;
var teleconferenceDeviceMediaQuality_1 = require("./teleconferenceDeviceMediaQuality");
var TeleconferenceDeviceQuality = /** @class */ (function () {
    /**
     * Instantiates a new teleconferenceDeviceQuality and sets the default values.
     */
    function TeleconferenceDeviceQuality() {
        this._additionalData = new Map();
    }
    ;
    Object.defineProperty(TeleconferenceDeviceQuality.prototype, "additionalData", {
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
    Object.defineProperty(TeleconferenceDeviceQuality.prototype, "callChainId", {
        /**
         * Gets the callChainId property value. A unique identifier for all  the participant calls in a conference or a unique identifier for two participant calls in P2P call. This needs to be copied over from Microsoft.Graph.Call.CallChainId.
         * @returns a string
         */
        get: function () {
            return this._callChainId;
        },
        /**
         * Sets the callChainId property value. A unique identifier for all  the participant calls in a conference or a unique identifier for two participant calls in P2P call. This needs to be copied over from Microsoft.Graph.Call.CallChainId.
         * @param value Value to set for the callChainId property.
         */
        set: function (value) {
            this._callChainId = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(TeleconferenceDeviceQuality.prototype, "cloudServiceDeploymentEnvironment", {
        /**
         * Gets the cloudServiceDeploymentEnvironment property value. A geo-region where the service is deployed, such as ProdNoam.
         * @returns a string
         */
        get: function () {
            return this._cloudServiceDeploymentEnvironment;
        },
        /**
         * Sets the cloudServiceDeploymentEnvironment property value. A geo-region where the service is deployed, such as ProdNoam.
         * @param value Value to set for the cloudServiceDeploymentEnvironment property.
         */
        set: function (value) {
            this._cloudServiceDeploymentEnvironment = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(TeleconferenceDeviceQuality.prototype, "cloudServiceDeploymentId", {
        /**
         * Gets the cloudServiceDeploymentId property value. A unique deployment identifier assigned by Azure.
         * @returns a string
         */
        get: function () {
            return this._cloudServiceDeploymentId;
        },
        /**
         * Sets the cloudServiceDeploymentId property value. A unique deployment identifier assigned by Azure.
         * @param value Value to set for the cloudServiceDeploymentId property.
         */
        set: function (value) {
            this._cloudServiceDeploymentId = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(TeleconferenceDeviceQuality.prototype, "cloudServiceInstanceName", {
        /**
         * Gets the cloudServiceInstanceName property value. The Azure deployed cloud service instance name, such as FrontEnd_IN_3.
         * @returns a string
         */
        get: function () {
            return this._cloudServiceInstanceName;
        },
        /**
         * Sets the cloudServiceInstanceName property value. The Azure deployed cloud service instance name, such as FrontEnd_IN_3.
         * @param value Value to set for the cloudServiceInstanceName property.
         */
        set: function (value) {
            this._cloudServiceInstanceName = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(TeleconferenceDeviceQuality.prototype, "cloudServiceName", {
        /**
         * Gets the cloudServiceName property value. The Azure deployed cloud service name, such as contoso.cloudapp.net.
         * @returns a string
         */
        get: function () {
            return this._cloudServiceName;
        },
        /**
         * Sets the cloudServiceName property value. The Azure deployed cloud service name, such as contoso.cloudapp.net.
         * @param value Value to set for the cloudServiceName property.
         */
        set: function (value) {
            this._cloudServiceName = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(TeleconferenceDeviceQuality.prototype, "deviceDescription", {
        /**
         * Gets the deviceDescription property value. Any additional description, such as VTC Bldg 30/21.
         * @returns a string
         */
        get: function () {
            return this._deviceDescription;
        },
        /**
         * Sets the deviceDescription property value. Any additional description, such as VTC Bldg 30/21.
         * @param value Value to set for the deviceDescription property.
         */
        set: function (value) {
            this._deviceDescription = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(TeleconferenceDeviceQuality.prototype, "deviceName", {
        /**
         * Gets the deviceName property value. The user media agent name, such as Cisco SX80.
         * @returns a string
         */
        get: function () {
            return this._deviceName;
        },
        /**
         * Sets the deviceName property value. The user media agent name, such as Cisco SX80.
         * @param value Value to set for the deviceName property.
         */
        set: function (value) {
            this._deviceName = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(TeleconferenceDeviceQuality.prototype, "mediaLegId", {
        /**
         * Gets the mediaLegId property value. A unique identifier for a specific media leg of a participant in a conference.  One participant can have multiple media leg identifiers if retargeting happens. CVI partner assigns this value.
         * @returns a string
         */
        get: function () {
            return this._mediaLegId;
        },
        /**
         * Sets the mediaLegId property value. A unique identifier for a specific media leg of a participant in a conference.  One participant can have multiple media leg identifiers if retargeting happens. CVI partner assigns this value.
         * @param value Value to set for the mediaLegId property.
         */
        set: function (value) {
            this._mediaLegId = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(TeleconferenceDeviceQuality.prototype, "mediaQualityList", {
        /**
         * Gets the mediaQualityList property value. The list of media qualities in a media session (call), such as audio quality, video quality, and/or screen sharing quality.
         * @returns a teleconferenceDeviceMediaQuality
         */
        get: function () {
            return this._mediaQualityList;
        },
        /**
         * Sets the mediaQualityList property value. The list of media qualities in a media session (call), such as audio quality, video quality, and/or screen sharing quality.
         * @param value Value to set for the mediaQualityList property.
         */
        set: function (value) {
            this._mediaQualityList = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(TeleconferenceDeviceQuality.prototype, "participantId", {
        /**
         * Gets the participantId property value. A unique identifier for a specific participant in a conference. The CVI partner needs to copy over Call.MyParticipantId to this property.
         * @returns a string
         */
        get: function () {
            return this._participantId;
        },
        /**
         * Sets the participantId property value. A unique identifier for a specific participant in a conference. The CVI partner needs to copy over Call.MyParticipantId to this property.
         * @param value Value to set for the participantId property.
         */
        set: function (value) {
            this._participantId = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    /**
     * The deserialization information for the current model
     * @returns a Map<string, (item: T, node: ParseNode) => void>
     */
    TeleconferenceDeviceQuality.prototype.getFieldDeserializers = function () {
        return new Map([
            ["callChainId", function (o, n) { o.callChainId = n.getStringValue(); }],
            ["cloudServiceDeploymentEnvironment", function (o, n) { o.cloudServiceDeploymentEnvironment = n.getStringValue(); }],
            ["cloudServiceDeploymentId", function (o, n) { o.cloudServiceDeploymentId = n.getStringValue(); }],
            ["cloudServiceInstanceName", function (o, n) { o.cloudServiceInstanceName = n.getStringValue(); }],
            ["cloudServiceName", function (o, n) { o.cloudServiceName = n.getStringValue(); }],
            ["deviceDescription", function (o, n) { o.deviceDescription = n.getStringValue(); }],
            ["deviceName", function (o, n) { o.deviceName = n.getStringValue(); }],
            ["mediaLegId", function (o, n) { o.mediaLegId = n.getStringValue(); }],
            ["mediaQualityList", function (o, n) { o.mediaQualityList = n.getCollectionOfObjectValues(teleconferenceDeviceMediaQuality_1.TeleconferenceDeviceMediaQuality); }],
            ["participantId", function (o, n) { o.participantId = n.getStringValue(); }],
        ]);
    };
    ;
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    TeleconferenceDeviceQuality.prototype.serialize = function (writer) {
        if (!writer)
            throw new Error("writer cannot be undefined");
        writer.writeStringValue("callChainId", this.callChainId);
        writer.writeStringValue("cloudServiceDeploymentEnvironment", this.cloudServiceDeploymentEnvironment);
        writer.writeStringValue("cloudServiceDeploymentId", this.cloudServiceDeploymentId);
        writer.writeStringValue("cloudServiceInstanceName", this.cloudServiceInstanceName);
        writer.writeStringValue("cloudServiceName", this.cloudServiceName);
        writer.writeStringValue("deviceDescription", this.deviceDescription);
        writer.writeStringValue("deviceName", this.deviceName);
        writer.writeStringValue("mediaLegId", this.mediaLegId);
        writer.writeCollectionOfObjectValues("mediaQualityList", this.mediaQualityList);
        writer.writeStringValue("participantId", this.participantId);
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
    return TeleconferenceDeviceQuality;
}());
exports.TeleconferenceDeviceQuality = TeleconferenceDeviceQuality;
