import { serializeBaseCollectionPaginationCountResponse } from '../../../models/serializeBaseCollectionPaginationCountResponse';
import { serializeUserExperienceAnalyticsDevicePerformance } from '../../../models/serializeUserExperienceAnalyticsDevicePerformance';
import { type UserExperienceAnalyticsDevicePerformance } from '../../../models/userExperienceAnalyticsDevicePerformance';
import { type SummarizeDevicePerformanceDevicesWithSummarizeByResponse } from './summarizeDevicePerformanceDevicesWithSummarizeByResponse';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeSummarizeDevicePerformanceDevicesWithSummarizeByResponse(writer: SerializationWriter, summarizeDevicePerformanceDevicesWithSummarizeByResponse: SummarizeDevicePerformanceDevicesWithSummarizeByResponse | undefined = {} as SummarizeDevicePerformanceDevicesWithSummarizeByResponse) : void {
        serializeBaseCollectionPaginationCountResponse(writer, summarizeDevicePerformanceDevicesWithSummarizeByResponse)
        writer.writeCollectionOfObjectValues<UserExperienceAnalyticsDevicePerformance>("value", summarizeDevicePerformanceDevicesWithSummarizeByResponse.value, serializeUserExperienceAnalyticsDevicePerformance);
}
