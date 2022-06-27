import {RunAsAccountType} from './runAsAccountType';
import {Win32LobAppPowerShellScriptRuleOperationType} from './win32LobAppPowerShellScriptRuleOperationType';
import {Win32LobAppRule} from './win32LobAppRule';
import {Win32LobAppRuleOperator} from './win32LobAppRuleOperator';
import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface Win32LobAppPowerShellScriptRule extends Partial<AdditionalDataHolder>, Partial<Parsable>, Win32LobAppRule {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData?: Record<string, unknown>;
    /** The script output comparison value. Do not specify a value if the rule is used for detection. */
    comparisonValue?: string | undefined;
    /** The display name for the rule. Do not specify this value if the rule is used for detection. */
    displayName?: string | undefined;
    /** A value indicating whether a signature check is enforced. */
    enforceSignatureCheck?: boolean | undefined;
    /** The script output comparison operation type. Use NotConfigured (the default value) if the rule is used for detection. Possible values are: notConfigured, string, dateTime, integer, float, version, boolean. */
    operationType?: Win32LobAppPowerShellScriptRuleOperationType | undefined;
    /** The script output operator. Use NotConfigured (the default value) if the rule is used for detection. Possible values are: notConfigured, equal, notEqual, greaterThan, greaterThanOrEqual, lessThan, lessThanOrEqual. */
    operator?: Win32LobAppRuleOperator | undefined;
    /** A value indicating whether the script should run as 32-bit. */
    runAs32Bit?: boolean | undefined;
    /** The execution context of the script. Do not specify this value if the rule is used for detection. Script detection rules will run in the same context as the associated app install context. Possible values are: system, user. */
    runAsAccount?: RunAsAccountType | undefined;
    /** The base64-encoded script content. */
    scriptContent?: string | undefined;
}
