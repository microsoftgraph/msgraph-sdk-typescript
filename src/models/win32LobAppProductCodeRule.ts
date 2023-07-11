import {Win32LobAppRule} from './win32LobAppRule';
import {Win32LobAppRuleOperator} from './win32LobAppRuleOperator';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface Win32LobAppProductCodeRule extends Parsable, Win32LobAppRule {
    /**
     * The product code of the app.
     */
    productCode?: string | undefined;
    /**
     * The product version comparison value.
     */
    productVersion?: string | undefined;
    /**
     * Contains properties for detection operator.
     */
    productVersionOperator?: Win32LobAppRuleOperator | undefined;
}
