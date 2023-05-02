import {GetHistoricalReportPostRequestBody} from './getHistoricalReportPostRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoGetHistoricalReportPostRequestBody(getHistoricalReportPostRequestBody: GetHistoricalReportPostRequestBody | undefined = {} as GetHistoricalReportPostRequestBody) : Record<string, (node: ParseNode) => void> {
    return {
        "filter": n => { getHistoricalReportPostRequestBody.filter = n.getStringValue(); },
        "groupBy": n => { getHistoricalReportPostRequestBody.groupBy = n.getCollectionOfPrimitiveValues<string>(); },
        "name": n => { getHistoricalReportPostRequestBody.name = n.getStringValue(); },
        "orderBy": n => { getHistoricalReportPostRequestBody.orderBy = n.getCollectionOfPrimitiveValues<string>(); },
        "search": n => { getHistoricalReportPostRequestBody.search = n.getStringValue(); },
        "select": n => { getHistoricalReportPostRequestBody.select = n.getCollectionOfPrimitiveValues<string>(); },
        "skip": n => { getHistoricalReportPostRequestBody.skip = n.getNumberValue(); },
        "top": n => { getHistoricalReportPostRequestBody.top = n.getNumberValue(); },
    }
}
