import {createLoggedOnUserFromDiscriminatorValue} from './createLoggedOnUserFromDiscriminatorValue';
import {createVmMetadataFromDiscriminatorValue} from './createVmMetadataFromDiscriminatorValue';
import {DefenderAvStatus} from './defenderAvStatus';
import {deserializeIntoAlertEvidence} from './deserializeIntoAlertEvidence';
import {DeviceEvidence} from './deviceEvidence';
import {DeviceHealthStatus} from './deviceHealthStatus';
import {DeviceRiskScore} from './deviceRiskScore';
import {LoggedOnUser} from './loggedOnUser';
import {OnboardingStatus} from './onboardingStatus';
import {serializeLoggedOnUser} from './serializeLoggedOnUser';
import {serializeVmMetadata} from './serializeVmMetadata';
import {VmMetadata} from './vmMetadata';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoDeviceEvidence(deviceEvidence: DeviceEvidence | undefined = {} as DeviceEvidence) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoAlertEvidence(deviceEvidence),
        "azureAdDeviceId": n => { deviceEvidence.azureAdDeviceId = n.getStringValue(); },
        "defenderAvStatus": n => { deviceEvidence.defenderAvStatus = n.getEnumValue<DefenderAvStatus>(DefenderAvStatus); },
        "deviceDnsName": n => { deviceEvidence.deviceDnsName = n.getStringValue(); },
        "firstSeenDateTime": n => { deviceEvidence.firstSeenDateTime = n.getDateValue(); },
        "healthStatus": n => { deviceEvidence.healthStatus = n.getEnumValue<DeviceHealthStatus>(DeviceHealthStatus); },
        "ipInterfaces": n => { deviceEvidence.ipInterfaces = n.getCollectionOfPrimitiveValues<string>(); },
        "loggedOnUsers": n => { deviceEvidence.loggedOnUsers = n.getCollectionOfObjectValues<LoggedOnUser>(createLoggedOnUserFromDiscriminatorValue); },
        "mdeDeviceId": n => { deviceEvidence.mdeDeviceId = n.getStringValue(); },
        "onboardingStatus": n => { deviceEvidence.onboardingStatus = n.getEnumValue<OnboardingStatus>(OnboardingStatus); },
        "osBuild": n => { deviceEvidence.osBuild = n.getNumberValue(); },
        "osPlatform": n => { deviceEvidence.osPlatform = n.getStringValue(); },
        "rbacGroupId": n => { deviceEvidence.rbacGroupId = n.getNumberValue(); },
        "rbacGroupName": n => { deviceEvidence.rbacGroupName = n.getStringValue(); },
        "riskScore": n => { deviceEvidence.riskScore = n.getEnumValue<DeviceRiskScore>(DeviceRiskScore); },
        "version": n => { deviceEvidence.version = n.getStringValue(); },
        "vmMetadata": n => { deviceEvidence.vmMetadata = n.getObjectValue<VmMetadata>(createVmMetadataFromDiscriminatorValue); },
    }
}
