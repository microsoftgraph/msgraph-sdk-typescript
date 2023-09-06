import { type BaseCollectionPaginationCountResponse } from './baseCollectionPaginationCountResponse';
import { type AdditionalDataHolder, type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function deserializeIntoBaseCollectionPaginationCountResponse(baseCollectionPaginationCountResponse: BaseCollectionPaginationCountResponse | undefined = {} as BaseCollectionPaginationCountResponse) : Record<string, (node: ParseNode) => void> {
    return {
        "@odata.count": n => { baseCollectionPaginationCountResponse.odataCount = n.getNumberValue(); },
        "@odata.nextLink": n => { baseCollectionPaginationCountResponse.odataNextLink = n.getStringValue(); },
    }
}
