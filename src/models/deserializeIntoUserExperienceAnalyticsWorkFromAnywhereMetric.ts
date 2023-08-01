import {createUserExperienceAnalyticsWorkFromAnywhereDeviceFromDiscriminatorValue} from './createUserExperienceAnalyticsWorkFromAnywhereDeviceFromDiscriminatorValue';
import {deserializeIntoEntity} from './deserializeIntoEntity';
import {serializeUserExperienceAnalyticsWorkFromAnywhereDevice} from './serializeUserExperienceAnalyticsWorkFromAnywhereDevice';
import type {UserExperienceAnalyticsWorkFromAnywhereDevice} from './userExperienceAnalyticsWorkFromAnywhereDevice';
import type {UserExperienceAnalyticsWorkFromAnywhereMetric} from './userExperienceAnalyticsWorkFromAnywhereMetric';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoUserExperienceAnalyticsWorkFromAnywhereMetric(userExperienceAnalyticsWorkFromAnywhereMetric: UserExperienceAnalyticsWorkFromAnywhereMetric | undefined = {} as UserExperienceAnalyticsWorkFromAnywhereMetric) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEntity(userExperienceAnalyticsWorkFromAnywhereMetric),
        "metricDevices": n => { userExperienceAnalyticsWorkFromAnywhereMetric.metricDevices = n.getCollectionOfObjectValues<UserExperienceAnalyticsWorkFromAnywhereDevice>(createUserExperienceAnalyticsWorkFromAnywhereDeviceFromDiscriminatorValue); },
    }
}
