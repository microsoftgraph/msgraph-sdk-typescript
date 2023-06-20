import {BaseCollectionPaginationCountResponse} from './baseCollectionPaginationCountResponse';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeBaseCollectionPaginationCountResponse(baseCollectionPaginationCountResponse: BaseCollectionPaginationCountResponse | undefined = {} as BaseCollectionPaginationCountResponse, writer: SerializationWriter) : void {
        writer.writeNumberValue("@odata.count", baseCollectionPaginationCountResponse.odataCount);
        writer.writeStringValue("@odata.nextLink", baseCollectionPaginationCountResponse.odataNextLink);
        writer.writeAdditionalData(baseCollectionPaginationCountResponse.additionalData);
}
