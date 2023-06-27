import {RunAsAccountType} from './runAsAccountType';
import {Win32LobAppPowerShellScriptRuleOperationType} from './win32LobAppPowerShellScriptRuleOperationType';
import {Win32LobAppRule} from './win32LobAppRule';
import {Win32LobAppRuleOperator} from './win32LobAppRuleOperator';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface Win32LobAppPowerShellScriptRule extends Parsable, Win32LobAppRule {
    /**
     * The script output comparison value. Do not specify a value if the rule is used for detection.
     */
    comparisonValue?: string | undefined;
    /**
     * The display name for the rule. Do not specify this value if the rule is used for detection.
     */
    displayName?: string | undefined;
    /**
     * A value indicating whether a signature check is enforced.
     */
    enforceSignatureCheck?: boolean | undefined;
    /**
     * Contains all supported Powershell Script output detection type.
     */
    operationType?: Win32LobAppPowerShellScriptRuleOperationType | undefined;
    /**
     * Contains properties for detection operator.
     */
    operator?: Win32LobAppRuleOperator | undefined;
    /**
     * A value indicating whether the script should run as 32-bit.
     */
    runAs32Bit?: boolean | undefined;
    /**
     * The execution context of the script. Do not specify this value if the rule is used for detection. Script detection rules will run in the same context as the associated app install context. Possible values are: system, user.
     */
    runAsAccount?: RunAsAccountType | undefined;
    /**
     * The base64-encoded script content.
     */
    scriptContent?: string | undefined;
}
