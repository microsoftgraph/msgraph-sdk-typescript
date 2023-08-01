import {createUserExperienceAnalyticsDevicePerformanceFromDiscriminatorValue} from '../../../models/createUserExperienceAnalyticsDevicePerformanceFromDiscriminatorValue';
import {deserializeIntoBaseCollectionPaginationCountResponse} from '../../../models/deserializeIntoBaseCollectionPaginationCountResponse';
import {serializeUserExperienceAnalyticsDevicePerformance} from '../../../models/serializeUserExperienceAnalyticsDevicePerformance';
import type {UserExperienceAnalyticsDevicePerformance} from '../../../models/userExperienceAnalyticsDevicePerformance';
import type {SummarizeDevicePerformanceDevicesWithSummarizeByResponse} from './summarizeDevicePerformanceDevicesWithSummarizeByResponse';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoSummarizeDevicePerformanceDevicesWithSummarizeByResponse(summarizeDevicePerformanceDevicesWithSummarizeByResponse: SummarizeDevicePerformanceDevicesWithSummarizeByResponse | undefined = {} as SummarizeDevicePerformanceDevicesWithSummarizeByResponse) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(summarizeDevicePerformanceDevicesWithSummarizeByResponse),
        "value": n => { summarizeDevicePerformanceDevicesWithSummarizeByResponse.value = n.getCollectionOfObjectValues<UserExperienceAnalyticsDevicePerformance>(createUserExperienceAnalyticsDevicePerformanceFromDiscriminatorValue); },
    }
}
