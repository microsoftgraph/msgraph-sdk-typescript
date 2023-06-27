import {Win32LobAppRegistryRuleOperationType} from './win32LobAppRegistryRuleOperationType';
import {Win32LobAppRule} from './win32LobAppRule';
import {Win32LobAppRuleOperator} from './win32LobAppRuleOperator';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface Win32LobAppRegistryRule extends Parsable, Win32LobAppRule {
    /**
     * A value indicating whether to search the 32-bit registry on 64-bit systems.
     */
    check32BitOn64System?: boolean | undefined;
    /**
     * The registry comparison value.
     */
    comparisonValue?: string | undefined;
    /**
     * The full path of the registry entry containing the value to detect.
     */
    keyPath?: string | undefined;
    /**
     * Contains all supported registry data detection type.
     */
    operationType?: Win32LobAppRegistryRuleOperationType | undefined;
    /**
     * Contains properties for detection operator.
     */
    operator?: Win32LobAppRuleOperator | undefined;
    /**
     * The name of the registry value to detect.
     */
    valueName?: string | undefined;
}
