import {serializeEntity} from './serializeEntity';
import type {UserExperienceAnalyticsMetric} from './userExperienceAnalyticsMetric';
import type {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeUserExperienceAnalyticsMetric(writer: SerializationWriter, userExperienceAnalyticsMetric: UserExperienceAnalyticsMetric | undefined = {} as UserExperienceAnalyticsMetric) : void {
        serializeEntity(writer, userExperienceAnalyticsMetric)
        writer.writeStringValue("unit", userExperienceAnalyticsMetric.unit);
        writer.writeNumberValue("value", userExperienceAnalyticsMetric.value);
}
