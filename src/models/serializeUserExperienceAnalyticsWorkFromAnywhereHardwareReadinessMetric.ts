import {serializeEntity} from './serializeEntity';
import {UserExperienceAnalyticsWorkFromAnywhereHardwareReadinessMetric} from './userExperienceAnalyticsWorkFromAnywhereHardwareReadinessMetric';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeUserExperienceAnalyticsWorkFromAnywhereHardwareReadinessMetric(writer: SerializationWriter, userExperienceAnalyticsWorkFromAnywhereHardwareReadinessMetric: UserExperienceAnalyticsWorkFromAnywhereHardwareReadinessMetric | undefined = {} as UserExperienceAnalyticsWorkFromAnywhereHardwareReadinessMetric) : void {
        serializeEntity(writer, userExperienceAnalyticsWorkFromAnywhereHardwareReadinessMetric)
        writer.writeNumberValue("osCheckFailedPercentage", userExperienceAnalyticsWorkFromAnywhereHardwareReadinessMetric.osCheckFailedPercentage);
        writer.writeNumberValue("processor64BitCheckFailedPercentage", userExperienceAnalyticsWorkFromAnywhereHardwareReadinessMetric.processor64BitCheckFailedPercentage);
        writer.writeNumberValue("processorCoreCountCheckFailedPercentage", userExperienceAnalyticsWorkFromAnywhereHardwareReadinessMetric.processorCoreCountCheckFailedPercentage);
        writer.writeNumberValue("processorFamilyCheckFailedPercentage", userExperienceAnalyticsWorkFromAnywhereHardwareReadinessMetric.processorFamilyCheckFailedPercentage);
        writer.writeNumberValue("processorSpeedCheckFailedPercentage", userExperienceAnalyticsWorkFromAnywhereHardwareReadinessMetric.processorSpeedCheckFailedPercentage);
        writer.writeNumberValue("ramCheckFailedPercentage", userExperienceAnalyticsWorkFromAnywhereHardwareReadinessMetric.ramCheckFailedPercentage);
        writer.writeNumberValue("secureBootCheckFailedPercentage", userExperienceAnalyticsWorkFromAnywhereHardwareReadinessMetric.secureBootCheckFailedPercentage);
        writer.writeNumberValue("storageCheckFailedPercentage", userExperienceAnalyticsWorkFromAnywhereHardwareReadinessMetric.storageCheckFailedPercentage);
        writer.writeNumberValue("totalDeviceCount", userExperienceAnalyticsWorkFromAnywhereHardwareReadinessMetric.totalDeviceCount);
        writer.writeNumberValue("tpmCheckFailedPercentage", userExperienceAnalyticsWorkFromAnywhereHardwareReadinessMetric.tpmCheckFailedPercentage);
        writer.writeNumberValue("upgradeEligibleDeviceCount", userExperienceAnalyticsWorkFromAnywhereHardwareReadinessMetric.upgradeEligibleDeviceCount);
}
