import {Win32LobAppRuleType} from './win32LobAppRuleType';
import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface Win32LobAppRule extends AdditionalDataHolder, Parsable {
    /**
     * Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     */
    additionalData?: Record<string, unknown>;
    /**
     * The OdataType property
     */
    odataType?: string | undefined;
    /**
     * Contains rule types for Win32 LOB apps.
     */
    ruleType?: Win32LobAppRuleType | undefined;
}
