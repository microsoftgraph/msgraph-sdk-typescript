import {serializeBaseCollectionPaginationCountResponse} from '../serializeBaseCollectionPaginationCountResponse';
import {ExternalItem} from './externalItem';
import {ExternalItemCollectionResponse} from './externalItemCollectionResponse';
import {serializeExternalItem} from './serializeExternalItem';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeExternalItemCollectionResponse(externalItemCollectionResponse: ExternalItemCollectionResponse | undefined = {} as ExternalItemCollectionResponse, writer: SerializationWriter) : void {
        serializeBaseCollectionPaginationCountResponse(writer, externalItemCollectionResponse)
        writer.writeCollectionOfObjectValues<ExternalItem>("value", externalItemCollectionResponse.value, serializeExternalItem);
}
