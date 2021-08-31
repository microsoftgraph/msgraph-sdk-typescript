"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.KeyValuePair = void 0;
var KeyValuePair = /** @class */ (function () {
    /**
     * Instantiates a new keyValuePair and sets the default values.
     */
    function KeyValuePair() {
        this._additionalData = new Map();
    }
    ;
    Object.defineProperty(KeyValuePair.prototype, "additionalData", {
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
    Object.defineProperty(KeyValuePair.prototype, "name", {
        /**
         * Gets the name property value. Name for this key-value pair. Possible names are: AdditionalWSFedEndpointCheckResult,  AllowedAuthenticationClassReferencesCheckResult, AlwaysRequireAuthenticationCheckResult,   AutoUpdateEnabledCheckResult, ClaimsProviderNameCheckResult, EncryptClaimsCheckResult,  EncryptedNameIdRequiredCheckResult, MonitoringEnabledCheckResult,NotBeforeSkewCheckResult,  RequestMFAFromClaimsProvidersCheckResult, SignedSamlRequestsRequiredCheckResult, AdditionalAuthenticationRulesCheckResult, TokenLifetimeCheckResult,  DelegationAuthorizationRulesCheckResult, IssuanceAuthorizationRulesCheckResult, IssuanceTransformRulesCheckResult.
         * @returns a string
         */
        get: function () {
            return this._name;
        },
        /**
         * Sets the name property value. Name for this key-value pair. Possible names are: AdditionalWSFedEndpointCheckResult,  AllowedAuthenticationClassReferencesCheckResult, AlwaysRequireAuthenticationCheckResult,   AutoUpdateEnabledCheckResult, ClaimsProviderNameCheckResult, EncryptClaimsCheckResult,  EncryptedNameIdRequiredCheckResult, MonitoringEnabledCheckResult,NotBeforeSkewCheckResult,  RequestMFAFromClaimsProvidersCheckResult, SignedSamlRequestsRequiredCheckResult, AdditionalAuthenticationRulesCheckResult, TokenLifetimeCheckResult,  DelegationAuthorizationRulesCheckResult, IssuanceAuthorizationRulesCheckResult, IssuanceTransformRulesCheckResult.
         * @param value Value to set for the name property.
         */
        set: function (value) {
            this._name = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(KeyValuePair.prototype, "value", {
        /**
         * Gets the value property value. Value for this key-value pair. Possible result values are 0 (when the validation check passed), 1 (when the validation check failed), or 2 (when the validation check is a warning).
         * @returns a string
         */
        get: function () {
            return this._value;
        },
        /**
         * Sets the value property value. Value for this key-value pair. Possible result values are 0 (when the validation check passed), 1 (when the validation check failed), or 2 (when the validation check is a warning).
         * @param value Value to set for the value property.
         */
        set: function (value) {
            this._value = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    /**
     * The deserialization information for the current model
     * @returns a Map<string, (item: T, node: ParseNode) => void>
     */
    KeyValuePair.prototype.getFieldDeserializers = function () {
        return new Map([
            ["name", function (o, n) { o.name = n.getStringValue(); }],
            ["value", function (o, n) { o.value = n.getStringValue(); }],
        ]);
    };
    ;
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    KeyValuePair.prototype.serialize = function (writer) {
        if (!writer)
            throw new Error("writer cannot be undefined");
        writer.writeStringValue("name", this.name);
        writer.writeStringValue("value", this.value);
        writer.writeAdditionalData(this.additionalData);
    };
    ;
    ;
    ;
    ;
    return KeyValuePair;
}());
exports.KeyValuePair = KeyValuePair;
