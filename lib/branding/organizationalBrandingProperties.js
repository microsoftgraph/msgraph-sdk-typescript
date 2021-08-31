"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __read = (this && this.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrganizationalBrandingProperties = void 0;
var entity_1 = require("../entity");
var OrganizationalBrandingProperties = /** @class */ (function (_super) {
    __extends(OrganizationalBrandingProperties, _super);
    /**
     * Instantiates a new organizationalBrandingProperties and sets the default values.
     */
    function OrganizationalBrandingProperties() {
        return _super.call(this) || this;
    }
    ;
    Object.defineProperty(OrganizationalBrandingProperties.prototype, "backgroundColor", {
        /**
         * Gets the backgroundColor property value. Color that will appear in place of the background image in low-bandwidth connections. The primary color of your banner logo or your organization color is recommended to be used here. Specify this in hexadecimal (for example, white is #FFFFFF).
         * @returns a string
         */
        get: function () {
            return this._backgroundColor;
        },
        /**
         * Sets the backgroundColor property value. Color that will appear in place of the background image in low-bandwidth connections. The primary color of your banner logo or your organization color is recommended to be used here. Specify this in hexadecimal (for example, white is #FFFFFF).
         * @param value Value to set for the backgroundColor property.
         */
        set: function (value) {
            this._backgroundColor = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(OrganizationalBrandingProperties.prototype, "backgroundImage", {
        /**
         * Gets the backgroundImage property value. Image that appears as the background of the sign in page. .png or .jpg not larger than 1920x1080 and smaller than 300kb. A smaller image will reduce bandwidth requirements and make page loads more performant.
         * @returns a binary
         */
        get: function () {
            return this._backgroundImage;
        },
        /**
         * Sets the backgroundImage property value. Image that appears as the background of the sign in page. .png or .jpg not larger than 1920x1080 and smaller than 300kb. A smaller image will reduce bandwidth requirements and make page loads more performant.
         * @param value Value to set for the backgroundImage property.
         */
        set: function (value) {
            this._backgroundImage = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(OrganizationalBrandingProperties.prototype, "bannerLogo", {
        /**
         * Gets the bannerLogo property value. A banner version of your company logo which appears appears on the sign-in page. .png or .jpg no larger than 36x245px. We recommend using a transparent image with no padding around the logo.
         * @returns a binary
         */
        get: function () {
            return this._bannerLogo;
        },
        /**
         * Sets the bannerLogo property value. A banner version of your company logo which appears appears on the sign-in page. .png or .jpg no larger than 36x245px. We recommend using a transparent image with no padding around the logo.
         * @param value Value to set for the bannerLogo property.
         */
        set: function (value) {
            this._bannerLogo = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(OrganizationalBrandingProperties.prototype, "signInPageText", {
        /**
         * Gets the signInPageText property value. Text that appears at the bottom of the sign-in box. You can use this to communicate additional information, such as the phone number to your help desk or a legal statement. This text must be Unicode and not exceed 1024 characters.
         * @returns a string
         */
        get: function () {
            return this._signInPageText;
        },
        /**
         * Sets the signInPageText property value. Text that appears at the bottom of the sign-in box. You can use this to communicate additional information, such as the phone number to your help desk or a legal statement. This text must be Unicode and not exceed 1024 characters.
         * @param value Value to set for the signInPageText property.
         */
        set: function (value) {
            this._signInPageText = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(OrganizationalBrandingProperties.prototype, "squareLogo", {
        /**
         * Gets the squareLogo property value. Square version of your company logo. This appears in Windows 10 out-of-box (OOBE) experiences and when Windows Autopilot is enabled for deployment. .png or .jpg no larger than 240x240px and no more than 10kb in size. We recommend using a transparent image with no padding around the logo.
         * @returns a binary
         */
        get: function () {
            return this._squareLogo;
        },
        /**
         * Sets the squareLogo property value. Square version of your company logo. This appears in Windows 10 out-of-box (OOBE) experiences and when Windows Autopilot is enabled for deployment. .png or .jpg no larger than 240x240px and no more than 10kb in size. We recommend using a transparent image with no padding around the logo.
         * @param value Value to set for the squareLogo property.
         */
        set: function (value) {
            this._squareLogo = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(OrganizationalBrandingProperties.prototype, "usernameHintText", {
        /**
         * Gets the usernameHintText property value. String that shows as the hint in the username textbox on the sign in screen. This text must be Unicode, without links or code, and can't exceed 64 characters.
         * @returns a string
         */
        get: function () {
            return this._usernameHintText;
        },
        /**
         * Sets the usernameHintText property value. String that shows as the hint in the username textbox on the sign in screen. This text must be Unicode, without links or code, and can't exceed 64 characters.
         * @param value Value to set for the usernameHintText property.
         */
        set: function (value) {
            this._usernameHintText = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    /**
     * The deserialization information for the current model
     * @returns a Map<string, (item: T, node: ParseNode) => void>
     */
    OrganizationalBrandingProperties.prototype.getFieldDeserializers = function () {
        return new Map(__spreadArray(__spreadArray([], __read(_super.prototype.getFieldDeserializers.call(this)), false), [["backgroundColor", function (o, n) { o.backgroundColor = n.getStringValue(); }],
            ["backgroundImage", function (o, n) { o.backgroundImage = n.getObjectValue(Binary); }],
            ["bannerLogo", function (o, n) { o.bannerLogo = n.getObjectValue(Binary); }],
            ["signInPageText", function (o, n) { o.signInPageText = n.getStringValue(); }],
            ["squareLogo", function (o, n) { o.squareLogo = n.getObjectValue(Binary); }],
            ["usernameHintText", function (o, n) { o.usernameHintText = n.getStringValue(); }],], false));
    };
    ;
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    OrganizationalBrandingProperties.prototype.serialize = function (writer) {
        if (!writer)
            throw new Error("writer cannot be undefined");
        _super.prototype.serialize.call(this, writer);
        writer.writeStringValue("backgroundColor", this.backgroundColor);
        writer.writeObjectValue("backgroundImage", this.backgroundImage);
        writer.writeObjectValue("bannerLogo", this.bannerLogo);
        writer.writeStringValue("signInPageText", this.signInPageText);
        writer.writeObjectValue("squareLogo", this.squareLogo);
        writer.writeStringValue("usernameHintText", this.usernameHintText);
    };
    ;
    ;
    ;
    ;
    ;
    ;
    ;
    return OrganizationalBrandingProperties;
}(entity_1.Entity));
exports.OrganizationalBrandingProperties = OrganizationalBrandingProperties;
