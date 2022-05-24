import {ConditionalAccessApplications} from './conditionalAccessApplications';
import {ConditionalAccessClientApplications} from './conditionalAccessClientApplications';
import {ConditionalAccessDevices} from './conditionalAccessDevices';
import {ConditionalAccessLocations} from './conditionalAccessLocations';
import {ConditionalAccessPlatforms} from './conditionalAccessPlatforms';
import {ConditionalAccessUsers} from './conditionalAccessUsers';

export interface ConditionalAccessConditionSet{
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData?:Record<string, unknown>;
    /** Applications and user actions included in and excluded from the policy. Required. */
    applications?:ConditionalAccessApplications | undefined;
    /** Client applications (service principals and workload identities) included in and excluded from the policy. Either users or clientApplications is required. */
    clientApplications?:ConditionalAccessClientApplications | undefined;
    /** Client application types included in the policy. Possible values are: all, browser, mobileAppsAndDesktopClients, exchangeActiveSync, easSupported, other. Required. */
    clientAppTypes?:string[] | undefined;
    /** Devices in the policy. */
    devices?:ConditionalAccessDevices | undefined;
    /** Locations included in and excluded from the policy. */
    locations?:ConditionalAccessLocations | undefined;
    /** Platforms included in and excluded from the policy. */
    platforms?:ConditionalAccessPlatforms | undefined;
    /** Sign-in risk levels included in the policy. Possible values are: low, medium, high, hidden, none, unknownFutureValue. Required. */
    signInRiskLevels?:string[] | undefined;
    /** User risk levels included in the policy. Possible values are: low, medium, high, hidden, none, unknownFutureValue. Required. */
    userRiskLevels?:string[] | undefined;
    /** Users, groups, and roles included in and excluded from the policy. Either users or clientApplications is required. */
    users?:ConditionalAccessUsers | undefined;
}
