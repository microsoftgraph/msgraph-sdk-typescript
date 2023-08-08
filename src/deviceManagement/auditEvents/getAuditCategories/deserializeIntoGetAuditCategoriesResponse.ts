import {deserializeIntoBaseCollectionPaginationCountResponse} from '../../../models/deserializeIntoBaseCollectionPaginationCountResponse';
import type {GetAuditCategoriesResponse} from './getAuditCategoriesResponse';
import type {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoGetAuditCategoriesResponse(getAuditCategoriesResponse: GetAuditCategoriesResponse | undefined = {} as GetAuditCategoriesResponse) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(getAuditCategoriesResponse),
        "value": n => { getAuditCategoriesResponse.value = n.getCollectionOfPrimitiveValues<string>(); },
    }
}
