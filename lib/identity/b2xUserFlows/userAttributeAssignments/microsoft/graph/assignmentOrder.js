"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AssignmentOrder = void 0;
var AssignmentOrder = /** @class */ (function () {
    /**
     * Instantiates a new assignmentOrder and sets the default values.
     */
    function AssignmentOrder() {
        this._additionalData = new Map();
    }
    ;
    Object.defineProperty(AssignmentOrder.prototype, "additionalData", {
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
    Object.defineProperty(AssignmentOrder.prototype, "order", {
        /**
         * Gets the order property value. A list of identityUserFlowAttribute IDs provided to determine the order in which attributes should be collected within a user flow.
         * @returns a string
         */
        get: function () {
            return this._order;
        },
        /**
         * Sets the order property value. A list of identityUserFlowAttribute IDs provided to determine the order in which attributes should be collected within a user flow.
         * @param value Value to set for the order property.
         */
        set: function (value) {
            this._order = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    /**
     * The deserialization information for the current model
     * @returns a Map<string, (item: T, node: ParseNode) => void>
     */
    AssignmentOrder.prototype.getFieldDeserializers = function () {
        return new Map([
            ["order", function (o, n) { o.order = n.getCollectionOfPrimitiveValues(); }],
        ]);
    };
    ;
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    AssignmentOrder.prototype.serialize = function (writer) {
        if (!writer)
            throw new Error("writer cannot be undefined");
        writer.writeCollectionOfPrimitiveValues("order", this.order);
        writer.writeAdditionalData(this.additionalData);
    };
    ;
    ;
    ;
    return AssignmentOrder;
}());
exports.AssignmentOrder = AssignmentOrder;
