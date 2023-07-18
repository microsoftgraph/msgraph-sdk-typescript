import {ConditionalAccessApplications} from './conditionalAccessApplications';
import {ConditionalAccessClientApp} from './conditionalAccessClientApp';
import {ConditionalAccessClientApplications} from './conditionalAccessClientApplications';
import {ConditionalAccessConditionSet} from './conditionalAccessConditionSet';
import {ConditionalAccessDevices} from './conditionalAccessDevices';
import {ConditionalAccessLocations} from './conditionalAccessLocations';
import {ConditionalAccessPlatforms} from './conditionalAccessPlatforms';
import {ConditionalAccessUsers} from './conditionalAccessUsers';
import {createConditionalAccessApplicationsFromDiscriminatorValue} from './createConditionalAccessApplicationsFromDiscriminatorValue';
import {createConditionalAccessClientApplicationsFromDiscriminatorValue} from './createConditionalAccessClientApplicationsFromDiscriminatorValue';
import {createConditionalAccessDevicesFromDiscriminatorValue} from './createConditionalAccessDevicesFromDiscriminatorValue';
import {createConditionalAccessLocationsFromDiscriminatorValue} from './createConditionalAccessLocationsFromDiscriminatorValue';
import {createConditionalAccessPlatformsFromDiscriminatorValue} from './createConditionalAccessPlatformsFromDiscriminatorValue';
import {createConditionalAccessUsersFromDiscriminatorValue} from './createConditionalAccessUsersFromDiscriminatorValue';
import {RiskLevel} from './riskLevel';
import {serializeConditionalAccessApplications} from './serializeConditionalAccessApplications';
import {serializeConditionalAccessClientApplications} from './serializeConditionalAccessClientApplications';
import {serializeConditionalAccessDevices} from './serializeConditionalAccessDevices';
import {serializeConditionalAccessLocations} from './serializeConditionalAccessLocations';
import {serializeConditionalAccessPlatforms} from './serializeConditionalAccessPlatforms';
import {serializeConditionalAccessUsers} from './serializeConditionalAccessUsers';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoConditionalAccessConditionSet(conditionalAccessConditionSet: ConditionalAccessConditionSet | undefined = {} as ConditionalAccessConditionSet) : Record<string, (node: ParseNode) => void> {
    return {
        "applications": n => { conditionalAccessConditionSet.applications = n.getObjectValue<ConditionalAccessApplications>(createConditionalAccessApplicationsFromDiscriminatorValue); },
        "clientApplications": n => { conditionalAccessConditionSet.clientApplications = n.getObjectValue<ConditionalAccessClientApplications>(createConditionalAccessClientApplicationsFromDiscriminatorValue); },
        "clientAppTypes": n => { conditionalAccessConditionSet.clientAppTypes = n.getCollectionOfEnumValues<ConditionalAccessClientApp>(ConditionalAccessClientApp); },
        "devices": n => { conditionalAccessConditionSet.devices = n.getObjectValue<ConditionalAccessDevices>(createConditionalAccessDevicesFromDiscriminatorValue); },
        "locations": n => { conditionalAccessConditionSet.locations = n.getObjectValue<ConditionalAccessLocations>(createConditionalAccessLocationsFromDiscriminatorValue); },
        "@odata.type": n => { conditionalAccessConditionSet.odataType = n.getStringValue(); },
        "platforms": n => { conditionalAccessConditionSet.platforms = n.getObjectValue<ConditionalAccessPlatforms>(createConditionalAccessPlatformsFromDiscriminatorValue); },
        "servicePrincipalRiskLevels": n => { conditionalAccessConditionSet.servicePrincipalRiskLevels = n.getCollectionOfEnumValues<RiskLevel>(RiskLevel); },
        "signInRiskLevels": n => { conditionalAccessConditionSet.signInRiskLevels = n.getCollectionOfEnumValues<RiskLevel>(RiskLevel); },
        "userRiskLevels": n => { conditionalAccessConditionSet.userRiskLevels = n.getCollectionOfEnumValues<RiskLevel>(RiskLevel); },
        "users": n => { conditionalAccessConditionSet.users = n.getObjectValue<ConditionalAccessUsers>(createConditionalAccessUsersFromDiscriminatorValue); },
    }
}
