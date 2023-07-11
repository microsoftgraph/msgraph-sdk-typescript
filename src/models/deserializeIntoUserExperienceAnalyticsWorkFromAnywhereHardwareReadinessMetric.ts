import {deserializeIntoEntity} from './deserializeIntoEntity';
import {UserExperienceAnalyticsWorkFromAnywhereHardwareReadinessMetric} from './userExperienceAnalyticsWorkFromAnywhereHardwareReadinessMetric';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoUserExperienceAnalyticsWorkFromAnywhereHardwareReadinessMetric(userExperienceAnalyticsWorkFromAnywhereHardwareReadinessMetric: UserExperienceAnalyticsWorkFromAnywhereHardwareReadinessMetric | undefined = {} as UserExperienceAnalyticsWorkFromAnywhereHardwareReadinessMetric) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEntity(userExperienceAnalyticsWorkFromAnywhereHardwareReadinessMetric),
        "osCheckFailedPercentage": n => { userExperienceAnalyticsWorkFromAnywhereHardwareReadinessMetric.osCheckFailedPercentage = n.getNumberValue(); },
        "processor64BitCheckFailedPercentage": n => { userExperienceAnalyticsWorkFromAnywhereHardwareReadinessMetric.processor64BitCheckFailedPercentage = n.getNumberValue(); },
        "processorCoreCountCheckFailedPercentage": n => { userExperienceAnalyticsWorkFromAnywhereHardwareReadinessMetric.processorCoreCountCheckFailedPercentage = n.getNumberValue(); },
        "processorFamilyCheckFailedPercentage": n => { userExperienceAnalyticsWorkFromAnywhereHardwareReadinessMetric.processorFamilyCheckFailedPercentage = n.getNumberValue(); },
        "processorSpeedCheckFailedPercentage": n => { userExperienceAnalyticsWorkFromAnywhereHardwareReadinessMetric.processorSpeedCheckFailedPercentage = n.getNumberValue(); },
        "ramCheckFailedPercentage": n => { userExperienceAnalyticsWorkFromAnywhereHardwareReadinessMetric.ramCheckFailedPercentage = n.getNumberValue(); },
        "secureBootCheckFailedPercentage": n => { userExperienceAnalyticsWorkFromAnywhereHardwareReadinessMetric.secureBootCheckFailedPercentage = n.getNumberValue(); },
        "storageCheckFailedPercentage": n => { userExperienceAnalyticsWorkFromAnywhereHardwareReadinessMetric.storageCheckFailedPercentage = n.getNumberValue(); },
        "totalDeviceCount": n => { userExperienceAnalyticsWorkFromAnywhereHardwareReadinessMetric.totalDeviceCount = n.getNumberValue(); },
        "tpmCheckFailedPercentage": n => { userExperienceAnalyticsWorkFromAnywhereHardwareReadinessMetric.tpmCheckFailedPercentage = n.getNumberValue(); },
        "upgradeEligibleDeviceCount": n => { userExperienceAnalyticsWorkFromAnywhereHardwareReadinessMetric.upgradeEligibleDeviceCount = n.getNumberValue(); },
    }
}
