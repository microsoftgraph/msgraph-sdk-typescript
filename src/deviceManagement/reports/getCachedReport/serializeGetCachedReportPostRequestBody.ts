import { type GetCachedReportPostRequestBody } from './getCachedReportPostRequestBody';
import { type AdditionalDataHolder, type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeGetCachedReportPostRequestBody(writer: SerializationWriter, getCachedReportPostRequestBody: GetCachedReportPostRequestBody | undefined = {} as GetCachedReportPostRequestBody) : void {
        writer.writeCollectionOfPrimitiveValues<string>("groupBy", getCachedReportPostRequestBody.groupBy);
        writer.writeStringValue("id", getCachedReportPostRequestBody.id);
        writer.writeCollectionOfPrimitiveValues<string>("orderBy", getCachedReportPostRequestBody.orderBy);
        writer.writeStringValue("search", getCachedReportPostRequestBody.search);
        writer.writeCollectionOfPrimitiveValues<string>("select", getCachedReportPostRequestBody.select);
        writer.writeNumberValue("skip", getCachedReportPostRequestBody.skip);
        writer.writeNumberValue("top", getCachedReportPostRequestBody.top);
        writer.writeAdditionalData(getCachedReportPostRequestBody.additionalData);
}
