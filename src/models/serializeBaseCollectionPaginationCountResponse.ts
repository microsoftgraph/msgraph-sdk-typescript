import { type BaseCollectionPaginationCountResponse } from './baseCollectionPaginationCountResponse';
import { type AdditionalDataHolder, type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeBaseCollectionPaginationCountResponse(writer: SerializationWriter, baseCollectionPaginationCountResponse: BaseCollectionPaginationCountResponse | undefined = {} as BaseCollectionPaginationCountResponse) : void {
        writer.writeNumberValue("@odata.count", baseCollectionPaginationCountResponse.odataCount);
        writer.writeStringValue("@odata.nextLink", baseCollectionPaginationCountResponse.odataNextLink);
        writer.writeAdditionalData(baseCollectionPaginationCountResponse.additionalData);
}
