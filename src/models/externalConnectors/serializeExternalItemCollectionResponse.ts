import { serializeBaseCollectionPaginationCountResponse } from '../serializeBaseCollectionPaginationCountResponse';
import { type ExternalItem } from './externalItem';
import { type ExternalItemCollectionResponse } from './externalItemCollectionResponse';
import { serializeExternalItem } from './serializeExternalItem';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeExternalItemCollectionResponse(writer: SerializationWriter, externalItemCollectionResponse: ExternalItemCollectionResponse | undefined = {} as ExternalItemCollectionResponse) : void {
        serializeBaseCollectionPaginationCountResponse(writer, externalItemCollectionResponse)
        writer.writeCollectionOfObjectValues<ExternalItem>("value", externalItemCollectionResponse.value, serializeExternalItem);
}
