import {Win32LobAppRegistryRuleOperationType} from './win32LobAppRegistryRuleOperationType';
import {Win32LobAppRule} from './win32LobAppRule';
import {Win32LobAppRuleOperator} from './win32LobAppRuleOperator';
import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface Win32LobAppRegistryRule extends Partial<AdditionalDataHolder>, Partial<Parsable>, Win32LobAppRule {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData?: Record<string, unknown>;
    /** A value indicating whether to search the 32-bit registry on 64-bit systems. */
    check32BitOn64System?: boolean | undefined;
    /** The registry comparison value. */
    comparisonValue?: string | undefined;
    /** The full path of the registry entry containing the value to detect. */
    keyPath?: string | undefined;
    /** The registry operation type. Possible values are: notConfigured, exists, doesNotExist, string, integer, version. */
    operationType?: Win32LobAppRegistryRuleOperationType | undefined;
    /** The operator for registry detection. Possible values are: notConfigured, equal, notEqual, greaterThan, greaterThanOrEqual, lessThan, lessThanOrEqual. */
    operator?: Win32LobAppRuleOperator | undefined;
    /** The name of the registry value to detect. */
    valueName?: string | undefined;
}
