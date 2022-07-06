import {Win32LobAppRule} from './index';
import {Win32LobAppRuleOperator} from './win32LobAppRuleOperator';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class Win32LobAppProductCodeRule extends Win32LobAppRule implements Parsable {
    /** The product code of the app. */
    private _productCode?: string | undefined;
    /** The product version comparison value. */
    private _productVersion?: string | undefined;
    /** The product version comparison operator. Possible values are: notConfigured, equal, notEqual, greaterThan, greaterThanOrEqual, lessThan, lessThanOrEqual. */
    private _productVersionOperator?: Win32LobAppRuleOperator | undefined;
    /**
     * Instantiates a new Win32LobAppProductCodeRule and sets the default values.
     */
    public constructor() {
        super();
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {...super.getFieldDeserializers(),
            "productCode": n => { this.productCode = n.getStringValue(); },
            "productVersion": n => { this.productVersion = n.getStringValue(); },
            "productVersionOperator": n => { this.productVersionOperator = n.getEnumValue<Win32LobAppRuleOperator>(Win32LobAppRuleOperator); },
        };
    };
    /**
     * Gets the productCode property value. The product code of the app.
     * @returns a string
     */
    public get productCode() {
        return this._productCode;
    };
    /**
     * Sets the productCode property value. The product code of the app.
     * @param value Value to set for the productCode property.
     */
    public set productCode(value: string | undefined) {
        this._productCode = value;
    };
    /**
     * Gets the productVersion property value. The product version comparison value.
     * @returns a string
     */
    public get productVersion() {
        return this._productVersion;
    };
    /**
     * Sets the productVersion property value. The product version comparison value.
     * @param value Value to set for the productVersion property.
     */
    public set productVersion(value: string | undefined) {
        this._productVersion = value;
    };
    /**
     * Gets the productVersionOperator property value. The product version comparison operator. Possible values are: notConfigured, equal, notEqual, greaterThan, greaterThanOrEqual, lessThan, lessThanOrEqual.
     * @returns a win32LobAppRuleOperator
     */
    public get productVersionOperator() {
        return this._productVersionOperator;
    };
    /**
     * Sets the productVersionOperator property value. The product version comparison operator. Possible values are: notConfigured, equal, notEqual, greaterThan, greaterThanOrEqual, lessThan, lessThanOrEqual.
     * @param value Value to set for the productVersionOperator property.
     */
    public set productVersionOperator(value: Win32LobAppRuleOperator | undefined) {
        this._productVersionOperator = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        writer.writeStringValue("productCode", this.productCode);
        writer.writeStringValue("productVersion", this.productVersion);
        writer.writeEnumValue<Win32LobAppRuleOperator>("productVersionOperator", this.productVersionOperator);
    };
}
