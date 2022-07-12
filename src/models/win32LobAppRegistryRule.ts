import {Win32LobAppRule} from './index';
import {Win32LobAppRegistryRuleOperationType} from './win32LobAppRegistryRuleOperationType';
import {Win32LobAppRuleOperator} from './win32LobAppRuleOperator';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class Win32LobAppRegistryRule extends Win32LobAppRule implements Parsable {
    /** A value indicating whether to search the 32-bit registry on 64-bit systems. */
    private _check32BitOn64System?: boolean | undefined;
    /** The registry comparison value. */
    private _comparisonValue?: string | undefined;
    /** The full path of the registry entry containing the value to detect. */
    private _keyPath?: string | undefined;
    /** Contains all supported registry data detection type. */
    private _operationType?: Win32LobAppRegistryRuleOperationType | undefined;
    /** Contains properties for detection operator. */
    private _operator?: Win32LobAppRuleOperator | undefined;
    /** The name of the registry value to detect. */
    private _valueName?: string | undefined;
    /**
     * Gets the check32BitOn64System property value. A value indicating whether to search the 32-bit registry on 64-bit systems.
     * @returns a boolean
     */
    public get check32BitOn64System() {
        return this._check32BitOn64System;
    };
    /**
     * Sets the check32BitOn64System property value. A value indicating whether to search the 32-bit registry on 64-bit systems.
     * @param value Value to set for the check32BitOn64System property.
     */
    public set check32BitOn64System(value: boolean | undefined) {
        this._check32BitOn64System = value;
    };
    /**
     * Gets the comparisonValue property value. The registry comparison value.
     * @returns a string
     */
    public get comparisonValue() {
        return this._comparisonValue;
    };
    /**
     * Sets the comparisonValue property value. The registry comparison value.
     * @param value Value to set for the comparisonValue property.
     */
    public set comparisonValue(value: string | undefined) {
        this._comparisonValue = value;
    };
    /**
     * Instantiates a new Win32LobAppRegistryRule and sets the default values.
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
            "check32BitOn64System": n => { this.check32BitOn64System = n.getBooleanValue(); },
            "comparisonValue": n => { this.comparisonValue = n.getStringValue(); },
            "keyPath": n => { this.keyPath = n.getStringValue(); },
            "operationType": n => { this.operationType = n.getEnumValue<Win32LobAppRegistryRuleOperationType>(Win32LobAppRegistryRuleOperationType); },
            "operator": n => { this.operator = n.getEnumValue<Win32LobAppRuleOperator>(Win32LobAppRuleOperator); },
            "valueName": n => { this.valueName = n.getStringValue(); },
        };
    };
    /**
     * Gets the keyPath property value. The full path of the registry entry containing the value to detect.
     * @returns a string
     */
    public get keyPath() {
        return this._keyPath;
    };
    /**
     * Sets the keyPath property value. The full path of the registry entry containing the value to detect.
     * @param value Value to set for the keyPath property.
     */
    public set keyPath(value: string | undefined) {
        this._keyPath = value;
    };
    /**
     * Gets the operationType property value. Contains all supported registry data detection type.
     * @returns a win32LobAppRegistryRuleOperationType
     */
    public get operationType() {
        return this._operationType;
    };
    /**
     * Sets the operationType property value. Contains all supported registry data detection type.
     * @param value Value to set for the operationType property.
     */
    public set operationType(value: Win32LobAppRegistryRuleOperationType | undefined) {
        this._operationType = value;
    };
    /**
     * Gets the operator property value. Contains properties for detection operator.
     * @returns a win32LobAppRuleOperator
     */
    public get operator() {
        return this._operator;
    };
    /**
     * Sets the operator property value. Contains properties for detection operator.
     * @param value Value to set for the operator property.
     */
    public set operator(value: Win32LobAppRuleOperator | undefined) {
        this._operator = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        writer.writeBooleanValue("check32BitOn64System", this.check32BitOn64System);
        writer.writeStringValue("comparisonValue", this.comparisonValue);
        writer.writeStringValue("keyPath", this.keyPath);
        writer.writeEnumValue<Win32LobAppRegistryRuleOperationType>("operationType", this.operationType);
        writer.writeEnumValue<Win32LobAppRuleOperator>("operator", this.operator);
        writer.writeStringValue("valueName", this.valueName);
    };
    /**
     * Gets the valueName property value. The name of the registry value to detect.
     * @returns a string
     */
    public get valueName() {
        return this._valueName;
    };
    /**
     * Sets the valueName property value. The name of the registry value to detect.
     * @param value Value to set for the valueName property.
     */
    public set valueName(value: string | undefined) {
        this._valueName = value;
    };
}
