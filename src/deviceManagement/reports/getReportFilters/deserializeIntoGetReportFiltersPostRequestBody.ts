import type {GetReportFiltersPostRequestBody} from './getReportFiltersPostRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoGetReportFiltersPostRequestBody(getReportFiltersPostRequestBody: GetReportFiltersPostRequestBody | undefined = {} as GetReportFiltersPostRequestBody) : Record<string, (node: ParseNode) => void> {
    return {
        "filter": n => { getReportFiltersPostRequestBody.filter = n.getStringValue(); },
        "groupBy": n => { getReportFiltersPostRequestBody.groupBy = n.getCollectionOfPrimitiveValues<string>(); },
        "name": n => { getReportFiltersPostRequestBody.name = n.getStringValue(); },
        "orderBy": n => { getReportFiltersPostRequestBody.orderBy = n.getCollectionOfPrimitiveValues<string>(); },
        "search": n => { getReportFiltersPostRequestBody.search = n.getStringValue(); },
        "select": n => { getReportFiltersPostRequestBody.select = n.getCollectionOfPrimitiveValues<string>(); },
        "sessionId": n => { getReportFiltersPostRequestBody.sessionId = n.getStringValue(); },
        "skip": n => { getReportFiltersPostRequestBody.skip = n.getNumberValue(); },
        "top": n => { getReportFiltersPostRequestBody.top = n.getNumberValue(); },
    }
}
