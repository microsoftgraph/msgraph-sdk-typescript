import {HostReputationRuleSeverity} from './hostReputationRuleSeverity';
import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface HostReputationRule extends AdditionalDataHolder, Parsable {
    /**
     * Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     */
    additionalData?: Record<string, unknown>;
    /**
     * The description of the rule that gives more context.
     */
    description?: string | undefined;
    /**
     * The name of the rule.
     */
    name?: string | undefined;
    /**
     * The OdataType property
     */
    odataType?: string | undefined;
    /**
     * Link to a web page with details related to this rule.
     */
    relatedDetailsUrl?: string | undefined;
    /**
     * The severity property
     */
    severity?: HostReputationRuleSeverity | undefined;
}
