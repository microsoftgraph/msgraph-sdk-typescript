"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EducationRoot = void 0;
var educationClass_1 = require("./educationClass");
var educationSchool_1 = require("./educationSchool");
var educationUser_1 = require("./educationUser");
var EducationRoot = /** @class */ (function () {
    /**
     * Instantiates a new EducationRoot and sets the default values.
     */
    function EducationRoot() {
        this._additionalData = new Map();
    }
    ;
    Object.defineProperty(EducationRoot.prototype, "additionalData", {
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
    Object.defineProperty(EducationRoot.prototype, "classes", {
        /**
         * Gets the classes property value.
         * @returns a educationClass
         */
        get: function () {
            return this._classes;
        },
        /**
         * Sets the classes property value.
         * @param value Value to set for the classes property.
         */
        set: function (value) {
            this._classes = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(EducationRoot.prototype, "me", {
        /**
         * Gets the me property value.
         * @returns a educationUser
         */
        get: function () {
            return this._me;
        },
        /**
         * Sets the me property value.
         * @param value Value to set for the me property.
         */
        set: function (value) {
            this._me = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(EducationRoot.prototype, "schools", {
        /**
         * Gets the schools property value.
         * @returns a educationSchool
         */
        get: function () {
            return this._schools;
        },
        /**
         * Sets the schools property value.
         * @param value Value to set for the schools property.
         */
        set: function (value) {
            this._schools = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(EducationRoot.prototype, "users", {
        /**
         * Gets the users property value.
         * @returns a educationUser
         */
        get: function () {
            return this._users;
        },
        /**
         * Sets the users property value.
         * @param value Value to set for the users property.
         */
        set: function (value) {
            this._users = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    /**
     * The deserialization information for the current model
     * @returns a Map<string, (item: T, node: ParseNode) => void>
     */
    EducationRoot.prototype.getFieldDeserializers = function () {
        return new Map([
            ["classes", function (o, n) { o.classes = n.getCollectionOfObjectValues(educationClass_1.EducationClass); }],
            ["me", function (o, n) { o.me = n.getObjectValue(educationUser_1.EducationUser); }],
            ["schools", function (o, n) { o.schools = n.getCollectionOfObjectValues(educationSchool_1.EducationSchool); }],
            ["users", function (o, n) { o.users = n.getCollectionOfObjectValues(educationUser_1.EducationUser); }],
        ]);
    };
    ;
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    EducationRoot.prototype.serialize = function (writer) {
        if (!writer)
            throw new Error("writer cannot be undefined");
        writer.writeCollectionOfObjectValues("classes", this.classes);
        writer.writeObjectValue("me", this.me);
        writer.writeCollectionOfObjectValues("schools", this.schools);
        writer.writeCollectionOfObjectValues("users", this.users);
        writer.writeAdditionalData(this.additionalData);
    };
    ;
    ;
    ;
    ;
    ;
    ;
    return EducationRoot;
}());
exports.EducationRoot = EducationRoot;
