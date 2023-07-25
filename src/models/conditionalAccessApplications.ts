import {ConditionalAccessFilter} from './conditionalAccessFilter';
import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface ConditionalAccessApplications extends AdditionalDataHolder, Parsable {
    /**
     * Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     */
    additionalData?: Record<string, unknown>;
    /**
     * The applicationFilter property
     */
    applicationFilter?: ConditionalAccessFilter | undefined;
    /**
     * Can be one of the following:  The list of client IDs (appId) explicitly excluded from the policy. Office365 - For the list of apps included in Office365, see Conditional Access target apps: Office 365
     */
    excludeApplications?: string[] | undefined;
    /**
     * Can be one of the following:  The list of client IDs (appId) the policy applies to, unless explicitly excluded (in excludeApplications)  All  Office365 - For the list of apps included in Office365, see Conditional Access target apps: Office 365
     */
    includeApplications?: string[] | undefined;
    /**
     * The includeAuthenticationContextClassReferences property
     */
    includeAuthenticationContextClassReferences?: string[] | undefined;
    /**
     * User actions to include. Supported values are urn:user:registersecurityinfo and urn:user:registerdevice
     */
    includeUserActions?: string[] | undefined;
    /**
     * The OdataType property
     */
    odataType?: string | undefined;
}
