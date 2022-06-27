import {Win32LobAppFileSystemOperationType} from './win32LobAppFileSystemOperationType';
import {Win32LobAppRule} from './win32LobAppRule';
import {Win32LobAppRuleOperator} from './win32LobAppRuleOperator';
import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface Win32LobAppFileSystemRule extends Partial<AdditionalDataHolder>, Partial<Parsable>, Win32LobAppRule {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData?: Record<string, unknown>;
    /** A value indicating whether to expand environment variables in the 32-bit context on 64-bit systems. */
    check32BitOn64System?: boolean | undefined;
    /** The file or folder comparison value. */
    comparisonValue?: string | undefined;
    /** The file or folder name to look up. */
    fileOrFolderName?: string | undefined;
    /** The file system operation type. Possible values are: notConfigured, exists, modifiedDate, createdDate, version, sizeInMB, doesNotExist. */
    operationType?: Win32LobAppFileSystemOperationType | undefined;
    /** The operator for file or folder detection. Possible values are: notConfigured, equal, notEqual, greaterThan, greaterThanOrEqual, lessThan, lessThanOrEqual. */
    operator?: Win32LobAppRuleOperator | undefined;
    /** The file or folder path to look up. */
    path?: string | undefined;
}
