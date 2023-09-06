import { type ConditionalAccessApplications } from './conditionalAccessApplications';
import { ConditionalAccessClientApp } from './conditionalAccessClientApp';
import { type ConditionalAccessClientApplications } from './conditionalAccessClientApplications';
import { type ConditionalAccessDevices } from './conditionalAccessDevices';
import { type ConditionalAccessLocations } from './conditionalAccessLocations';
import { type ConditionalAccessPlatforms } from './conditionalAccessPlatforms';
import { type ConditionalAccessUsers } from './conditionalAccessUsers';
import { RiskLevel } from './riskLevel';
import { type AdditionalDataHolder, type Parsable } from '@microsoft/kiota-abstractions';

export interface ConditionalAccessConditionSet extends AdditionalDataHolder, Parsable {
    /**
     * Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     */
    additionalData?: Record<string, unknown>;
    /**
     * Applications and user actions included in and excluded from the policy. Required.
     */
    applications?: ConditionalAccessApplications | undefined;
    /**
     * Client applications (service principals and workload identities) included in and excluded from the policy. Either users or clientApplications is required.
     */
    clientApplications?: ConditionalAccessClientApplications | undefined;
    /**
     * Client application types included in the policy. Possible values are: all, browser, mobileAppsAndDesktopClients, exchangeActiveSync, easSupported, other. Required.  The easUnsupported enumeration member will be deprecated in favor of exchangeActiveSync which includes EAS supported and unsupported platforms.
     */
    clientAppTypes?: ConditionalAccessClientApp[] | undefined;
    /**
     * Devices in the policy.
     */
    devices?: ConditionalAccessDevices | undefined;
    /**
     * Locations included in and excluded from the policy.
     */
    locations?: ConditionalAccessLocations | undefined;
    /**
     * The OdataType property
     */
    odataType?: string | undefined;
    /**
     * Platforms included in and excluded from the policy.
     */
    platforms?: ConditionalAccessPlatforms | undefined;
    /**
     * Service principal risk levels included in the policy. Possible values are: low, medium, high, none, unknownFutureValue.
     */
    servicePrincipalRiskLevels?: RiskLevel[] | undefined;
    /**
     * Sign-in risk levels included in the policy. Possible values are: low, medium, high, hidden, none, unknownFutureValue. Required.
     */
    signInRiskLevels?: RiskLevel[] | undefined;
    /**
     * User risk levels included in the policy. Possible values are: low, medium, high, hidden, none, unknownFutureValue. Required.
     */
    userRiskLevels?: RiskLevel[] | undefined;
    /**
     * Users, groups, and roles included in and excluded from the policy. Either users or clientApplications is required.
     */
    users?: ConditionalAccessUsers | undefined;
}
