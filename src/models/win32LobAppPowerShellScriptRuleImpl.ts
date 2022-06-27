import {Win32LobAppRuleImpl} from './index';
import {RunAsAccountType} from './runAsAccountType';
import {Win32LobAppPowerShellScriptRule} from './win32LobAppPowerShellScriptRule';
import {Win32LobAppPowerShellScriptRuleOperationType} from './win32LobAppPowerShellScriptRuleOperationType';
import {Win32LobAppRuleOperator} from './win32LobAppRuleOperator';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class Win32LobAppPowerShellScriptRuleImpl extends Win32LobAppRuleImpl implements Win32LobAppPowerShellScriptRule {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    public additionalData: Record<string, unknown>;
    /** The script output comparison value. Do not specify a value if the rule is used for detection. */
    public comparisonValue?: string | undefined;
    /** The display name for the rule. Do not specify this value if the rule is used for detection. */
    public displayName?: string | undefined;
    /** A value indicating whether a signature check is enforced. */
    public enforceSignatureCheck?: boolean | undefined;
    /** The script output comparison operation type. Use NotConfigured (the default value) if the rule is used for detection. Possible values are: notConfigured, string, dateTime, integer, float, version, boolean. */
    public operationType?: Win32LobAppPowerShellScriptRuleOperationType | undefined;
    /** The script output operator. Use NotConfigured (the default value) if the rule is used for detection. Possible values are: notConfigured, equal, notEqual, greaterThan, greaterThanOrEqual, lessThan, lessThanOrEqual. */
    public operator?: Win32LobAppRuleOperator | undefined;
    /** A value indicating whether the script should run as 32-bit. */
    public runAs32Bit?: boolean | undefined;
    /** The execution context of the script. Do not specify this value if the rule is used for detection. Script detection rules will run in the same context as the associated app install context. Possible values are: system, user. */
    public runAsAccount?: RunAsAccountType | undefined;
    /** The base64-encoded script content. */
    public scriptContent?: string | undefined;
    /**
     * Instantiates a new Win32LobAppPowerShellScriptRule and sets the default values.
     * @param win32LobAppPowerShellScriptRuleParameterValue 
     */
    public constructor(win32LobAppPowerShellScriptRuleParameterValue?: Win32LobAppPowerShellScriptRule | undefined) {
        super(win32LobAppPowerShellScriptRuleParameterValue);
        this.additionalData = win32LobAppPowerShellScriptRuleParameterValue?.additionalData ? win32LobAppPowerShellScriptRuleParameterValue?.additionalData! : {};
        this.comparisonValue = win32LobAppPowerShellScriptRuleParameterValue?.comparisonValue;
        this.displayName = win32LobAppPowerShellScriptRuleParameterValue?.displayName;
        this.enforceSignatureCheck = win32LobAppPowerShellScriptRuleParameterValue?.enforceSignatureCheck;
        this.operationType = win32LobAppPowerShellScriptRuleParameterValue?.operationType;
        this.operator = win32LobAppPowerShellScriptRuleParameterValue?.operator;
        this.runAs32Bit = win32LobAppPowerShellScriptRuleParameterValue?.runAs32Bit;
        this.runAsAccount = win32LobAppPowerShellScriptRuleParameterValue?.runAsAccount;
        this.scriptContent = win32LobAppPowerShellScriptRuleParameterValue?.scriptContent;
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
            "runAsAccount": n => { this.runAsAccount = n.getEnumValue<RunAsAccountType>(RunAsAccountType); },
            "scriptContent": n => { this.scriptContent = n.getStringValue(); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        if(this.comparisonValue){
            writer.writeStringValue("comparisonValue", this.comparisonValue);
        }
        if(this.displayName){
            writer.writeStringValue("displayName", this.displayName);
        }
        if(this.enforceSignatureCheck){
            writer.writeBooleanValue("enforceSignatureCheck", this.enforceSignatureCheck);
        }
        if(this.operationType){
            writer.writeEnumValue<Win32LobAppPowerShellScriptRuleOperationType>("operationType", this.operationType);
        }
        if(this.operator){
            writer.writeEnumValue<Win32LobAppRuleOperator>("operator", this.operator);
        }
        if(this.runAs32Bit){
            writer.writeBooleanValue("runAs32Bit", this.runAs32Bit);
        }
        if(this.runAsAccount){
            writer.writeEnumValue<RunAsAccountType>("runAsAccount", this.runAsAccount);
        }
        if(this.scriptContent){
            writer.writeStringValue("scriptContent", this.scriptContent);
        }
        writer.writeAdditionalData(this.additionalData);
    };
}
