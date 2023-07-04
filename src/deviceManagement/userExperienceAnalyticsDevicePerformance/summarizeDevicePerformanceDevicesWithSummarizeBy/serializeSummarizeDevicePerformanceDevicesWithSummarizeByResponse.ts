import {serializeBaseCollectionPaginationCountResponse} from '../../../models/serializeBaseCollectionPaginationCountResponse';
import {serializeUserExperienceAnalyticsDevicePerformance} from '../../../models/serializeUserExperienceAnalyticsDevicePerformance';
import {UserExperienceAnalyticsDevicePerformance} from '../../../models/userExperienceAnalyticsDevicePerformance';
import {SummarizeDevicePerformanceDevicesWithSummarizeByResponse} from './summarizeDevicePerformanceDevicesWithSummarizeByResponse';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeSummarizeDevicePerformanceDevicesWithSummarizeByResponse(writer: SerializationWriter, summarizeDevicePerformanceDevicesWithSummarizeByResponse: SummarizeDevicePerformanceDevicesWithSummarizeByResponse | undefined = {} as SummarizeDevicePerformanceDevicesWithSummarizeByResponse) : void {
        serializeBaseCollectionPaginationCountResponse(writer, summarizeDevicePerformanceDevicesWithSummarizeByResponse)
        writer.writeCollectionOfObjectValues<UserExperienceAnalyticsDevicePerformance>("value", summarizeDevicePerformanceDevicesWithSummarizeByResponse.value, serializeUserExperienceAnalyticsDevicePerformance);
}
