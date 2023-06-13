import {DefenderAvStatus} from './defenderAvStatus';
import {DeviceEvidence} from './deviceEvidence';
import {DeviceHealthStatus} from './deviceHealthStatus';
import {DeviceRiskScore} from './deviceRiskScore';
import {LoggedOnUser} from './loggedOnUser';
import {OnboardingStatus} from './onboardingStatus';
import {serializeAlertEvidence} from './serializeAlertEvidence';
import {serializeLoggedOnUser} from './serializeLoggedOnUser';
import {serializeVmMetadata} from './serializeVmMetadata';
import {VmMetadata} from './vmMetadata';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeDeviceEvidence(writer: SerializationWriter, deviceEvidence: DeviceEvidence | undefined = {} as DeviceEvidence) : void {
        serializeAlertEvidence(writer, deviceEvidence)
        writer.writeStringValue("azureAdDeviceId", deviceEvidence.azureAdDeviceId);
        writer.writeEnumValue<DefenderAvStatus>("defenderAvStatus", deviceEvidence.defenderAvStatus);
        writer.writeStringValue("deviceDnsName", deviceEvidence.deviceDnsName);
        writer.writeDateValue("firstSeenDateTime", deviceEvidence.firstSeenDateTime);
        writer.writeEnumValue<DeviceHealthStatus>("healthStatus", deviceEvidence.healthStatus);
        writer.writeCollectionOfPrimitiveValues<string>("ipInterfaces", deviceEvidence.ipInterfaces);
        writer.writeCollectionOfObjectValues<LoggedOnUser>("loggedOnUsers", deviceEvidence.loggedOnUsers, serializeLoggedOnUser);
        writer.writeStringValue("mdeDeviceId", deviceEvidence.mdeDeviceId);
        writer.writeEnumValue<OnboardingStatus>("onboardingStatus", deviceEvidence.onboardingStatus);
        writer.writeNumberValue("osBuild", deviceEvidence.osBuild);
        writer.writeStringValue("osPlatform", deviceEvidence.osPlatform);
        writer.writeNumberValue("rbacGroupId", deviceEvidence.rbacGroupId);
        writer.writeStringValue("rbacGroupName", deviceEvidence.rbacGroupName);
        writer.writeEnumValue<DeviceRiskScore>("riskScore", deviceEvidence.riskScore);
        writer.writeStringValue("version", deviceEvidence.version);
        writer.writeObjectValue<VmMetadata>("vmMetadata", deviceEvidence.vmMetadata, serializeVmMetadata);
}
