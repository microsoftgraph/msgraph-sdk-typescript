import {serializeEntity} from './serializeEntity';
import {serializeUserExperienceAnalyticsWorkFromAnywhereDevice} from './serializeUserExperienceAnalyticsWorkFromAnywhereDevice';
import {UserExperienceAnalyticsWorkFromAnywhereDevice} from './userExperienceAnalyticsWorkFromAnywhereDevice';
import {UserExperienceAnalyticsWorkFromAnywhereMetric} from './userExperienceAnalyticsWorkFromAnywhereMetric';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeUserExperienceAnalyticsWorkFromAnywhereMetric(writer: SerializationWriter, userExperienceAnalyticsWorkFromAnywhereMetric: UserExperienceAnalyticsWorkFromAnywhereMetric | undefined = {} as UserExperienceAnalyticsWorkFromAnywhereMetric) : void {
        serializeEntity(writer, userExperienceAnalyticsWorkFromAnywhereMetric)
        writer.writeCollectionOfObjectValues<UserExperienceAnalyticsWorkFromAnywhereDevice>("metricDevices", userExperienceAnalyticsWorkFromAnywhereMetric.metricDevices, serializeUserExperienceAnalyticsWorkFromAnywhereDevice);
}
