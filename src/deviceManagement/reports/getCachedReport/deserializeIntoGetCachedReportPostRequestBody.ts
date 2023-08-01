import type {GetCachedReportPostRequestBody} from './getCachedReportPostRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoGetCachedReportPostRequestBody(getCachedReportPostRequestBody: GetCachedReportPostRequestBody | undefined = {} as GetCachedReportPostRequestBody) : Record<string, (node: ParseNode) => void> {
    return {
        "groupBy": n => { getCachedReportPostRequestBody.groupBy = n.getCollectionOfPrimitiveValues<string>(); },
        "id": n => { getCachedReportPostRequestBody.id = n.getStringValue(); },
        "orderBy": n => { getCachedReportPostRequestBody.orderBy = n.getCollectionOfPrimitiveValues<string>(); },
        "search": n => { getCachedReportPostRequestBody.search = n.getStringValue(); },
        "select": n => { getCachedReportPostRequestBody.select = n.getCollectionOfPrimitiveValues<string>(); },
        "skip": n => { getCachedReportPostRequestBody.skip = n.getNumberValue(); },
        "top": n => { getCachedReportPostRequestBody.top = n.getNumberValue(); },
    }
}
