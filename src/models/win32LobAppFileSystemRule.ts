import {Win32LobAppFileSystemOperationType} from './win32LobAppFileSystemOperationType';
import {Win32LobAppRule} from './win32LobAppRule';
import {Win32LobAppRuleOperator} from './win32LobAppRuleOperator';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface Win32LobAppFileSystemRule extends Parsable, Win32LobAppRule {
    /**
     * A value indicating whether to expand environment variables in the 32-bit context on 64-bit systems.
     */
    check32BitOn64System?: boolean | undefined;
    /**
     * The file or folder comparison value.
     */
    comparisonValue?: string | undefined;
    /**
     * The file or folder name to look up.
     */
    fileOrFolderName?: string | undefined;
    /**
     * Contains all supported file system detection type.
     */
    operationType?: Win32LobAppFileSystemOperationType | undefined;
    /**
     * Contains properties for detection operator.
     */
    operator?: Win32LobAppRuleOperator | undefined;
    /**
     * The file or folder path to look up.
     */
    path?: string | undefined;
}
