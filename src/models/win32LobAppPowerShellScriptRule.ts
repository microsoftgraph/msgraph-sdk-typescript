import {AdminMember1, Win32LobAppRule} from './index';
import {RunAsAccountType} from './runAsAccountType';
import {Win32LobAppPowerShellScriptRuleOperationType} from './win32LobAppPowerShellScriptRuleOperationType';
import {Win32LobAppRuleOperator} from './win32LobAppRuleOperator';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class Win32LobAppPowerShellScriptRule extends Win32LobAppRule implements Parsable {
    /** The script output comparison value. Do not specify a value if the rule is used for detection. */
    private _comparisonValue?: string | undefined;
    /** The display name for the rule. Do not specify this value if the rule is used for detection. */
    private _displayName?: string | undefined;
    /** A value indicating whether a signature check is enforced. */
    private _enforceSignatureCheck?: boolean | undefined;
    /** Contains all supported Powershell Script output detection type. */
    private _operationType?: Win32LobAppPowerShellScriptRuleOperationType | undefined;
    /** Contains properties for detection operator. */
    private _operator?: Win32LobAppRuleOperator | undefined;
    /** A value indicating whether the script should run as 32-bit. */
    private _runAs32Bit?: boolean | undefined;
    /** The execution context of the script. Do not specify this value if the rule is used for detection. Script detection rules will run in the same context as the associated app install context. Possible values are: system, user. */
    private _runAsAccount?: RunAsAccountType | AdminMember1 | undefined;
    /** The base64-encoded script content. */
    private _scriptContent?: string | undefined;
    /**
     * Gets the comparisonValue property value. The script output comparison value. Do not specify a value if the rule is used for detection.
     * @returns a string
     */
    public get comparisonValue() {
        return this._comparisonValue;
    };
    /**
     * Sets the comparisonValue property value. The script output comparison value. Do not specify a value if the rule is used for detection.
     * @param value Value to set for the comparisonValue property.
     */
    public set comparisonValue(value: string | undefined) {
        this._comparisonValue = value;
    };
    /**
     * Instantiates a new Win32LobAppPowerShellScriptRule and sets the default values.
     */
    public constructor() {
        super();
    };
    /**
     * Gets the displayName property value. The display name for the rule. Do not specify this value if the rule is used for detection.
     * @returns a string
     */
    public get displayName() {
        return this._displayName;
    };
    /**
     * Sets the displayName property value. The display name for the rule. Do not specify this value if the rule is used for detection.
     * @param value Value to set for the displayName property.
     */
    public set displayName(value: string | undefined) {
        this._displayName = value;
    };
    /**
     * Gets the enforceSignatureCheck property value. A value indicating whether a signature check is enforced.
     * @returns a boolean
     */
    public get enforceSignatureCheck() {
        return this._enforceSignatureCheck;
    };
    /**
     * Sets the enforceSignatureCheck property value. A value indicating whether a signature check is enforced.
     * @param value Value to set for the enforceSignatureCheck property.
     */
    public set enforceSignatureCheck(value: boolean | undefined) {
        this._enforceSignatureCheck = value;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {...super.getFieldDeserializers(),
            "comparisonValue": n => { this.comparisonValue = n.getStringValue(); },
            "displayName": n => { this.displayName = n.getStringValue(); },
            "enforceSignatureCheck": n => { this.enforceSignatureCheck = n.getBooleanValue(); },
            "operationType": n => { this.operationType = n.getEnumValue<Win32LobAppPowerShellScriptRuleOperationType>(Win32LobAppPowerShellScriptRuleOperationType); },
            "operator": n => { this.operator = n.getEnumValue<Win32LobAppRuleOperator>(Win32LobAppRuleOperator); },
            "runAs32Bit": n => { this.runAs32Bit = n.getBooleanValue(); },
            "runAsAccount": n => { this.runAsAccount = n.getObjectValue<RunAsAccountType>(createRunAsAccountTypeFromDiscriminatorValue); },
            "scriptContent": n => { this.scriptContent = n.getStringValue(); },
        };
    };
    /**
     * Gets the operationType property value. Contains all supported Powershell Script output detection type.
     * @returns a win32LobAppPowerShellScriptRuleOperationType
     */
    public get operationType() {
        return this._operationType;
    };
    /**
     * Sets the operationType property value. Contains all supported Powershell Script output detection type.
     * @param value Value to set for the operationType property.
     */
    public set operationType(value: Win32LobAppPowerShellScriptRuleOperationType | undefined) {
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
     * Gets the runAs32Bit property value. A value indicating whether the script should run as 32-bit.
     * @returns a boolean
     */
    public get runAs32Bit() {
        return this._runAs32Bit;
    };
    /**
     * Sets the runAs32Bit property value. A value indicating whether the script should run as 32-bit.
     * @param value Value to set for the runAs32Bit property.
     */
    public set runAs32Bit(value: boolean | undefined) {
        this._runAs32Bit = value;
    };
    /**
     * Gets the runAsAccount property value. The execution context of the script. Do not specify this value if the rule is used for detection. Script detection rules will run in the same context as the associated app install context. Possible values are: system, user.
     * @returns a admin
     */
    public get runAsAccount() {
        return this._runAsAccount;
    };
    /**
     * Sets the runAsAccount property value. The execution context of the script. Do not specify this value if the rule is used for detection. Script detection rules will run in the same context as the associated app install context. Possible values are: system, user.
     * @param value Value to set for the runAsAccount property.
     */
    public set runAsAccount(value: RunAsAccountType | AdminMember1 | undefined) {
        this._runAsAccount = value;
    };
    /**
     * Gets the scriptContent property value. The base64-encoded script content.
     * @returns a string
     */
    public get scriptContent() {
        return this._scriptContent;
    };
    /**
     * Sets the scriptContent property value. The base64-encoded script content.
     * @param value Value to set for the scriptContent property.
     */
    public set scriptContent(value: string | undefined) {
        this._scriptContent = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        writer.writeStringValue("comparisonValue", this.comparisonValue);
        writer.writeStringValue("displayName", this.displayName);
        writer.writeBooleanValue("enforceSignatureCheck", this.enforceSignatureCheck);
        writer.writeEnumValue<Win32LobAppPowerShellScriptRuleOperationType>("operationType", this.operationType);
        writer.writeEnumValue<Win32LobAppRuleOperator>("operator", this.operator);
        writer.writeBooleanValue("runAs32Bit", this.runAs32Bit);
        writer.writeObjectValue<RunAsAccountType>("runAsAccount", this.runAsAccount);
        writer.writeStringValue("scriptContent", this.scriptContent);
    };
}
