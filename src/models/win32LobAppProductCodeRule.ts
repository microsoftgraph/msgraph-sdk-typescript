import {Win32LobAppRule} from './win32LobAppRule';
import {Win32LobAppRuleOperator} from './win32LobAppRuleOperator';
import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface Win32LobAppProductCodeRule extends Partial<AdditionalDataHolder>, Partial<Parsable>, Win32LobAppRule {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData?: Record<string, unknown>;
    /** The product code of the app. */
    productCode?: string | undefined;
    /** The product version comparison value. */
    productVersion?: string | undefined;
    /** The product version comparison operator. Possible values are: notConfigured, equal, notEqual, greaterThan, greaterThanOrEqual, lessThan, lessThanOrEqual. */
    productVersionOperator?: Win32LobAppRuleOperator | undefined;
}
