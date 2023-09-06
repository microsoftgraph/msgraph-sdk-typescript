import { type GetHistoricalReportPostRequestBody } from './getHistoricalReportPostRequestBody';
import { type AdditionalDataHolder, type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeGetHistoricalReportPostRequestBody(writer: SerializationWriter, getHistoricalReportPostRequestBody: GetHistoricalReportPostRequestBody | undefined = {} as GetHistoricalReportPostRequestBody) : void {
        writer.writeStringValue("filter", getHistoricalReportPostRequestBody.filter);
        writer.writeCollectionOfPrimitiveValues<string>("groupBy", getHistoricalReportPostRequestBody.groupBy);
        writer.writeStringValue("name", getHistoricalReportPostRequestBody.name);
        writer.writeCollectionOfPrimitiveValues<string>("orderBy", getHistoricalReportPostRequestBody.orderBy);
        writer.writeStringValue("search", getHistoricalReportPostRequestBody.search);
        writer.writeCollectionOfPrimitiveValues<string>("select", getHistoricalReportPostRequestBody.select);
        writer.writeNumberValue("skip", getHistoricalReportPostRequestBody.skip);
        writer.writeNumberValue("top", getHistoricalReportPostRequestBody.top);
        writer.writeAdditionalData(getHistoricalReportPostRequestBody.additionalData);
}
