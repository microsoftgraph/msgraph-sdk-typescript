import {serializeBaseCollectionPaginationCountResponse} from './serializeBaseCollectionPaginationCountResponse';
import {serializeServiceUpdateMessage} from './serializeServiceUpdateMessage';
import type {ServiceUpdateMessage} from './serviceUpdateMessage';
import type {ServiceUpdateMessageCollectionResponse} from './serviceUpdateMessageCollectionResponse';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeServiceUpdateMessageCollectionResponse(writer: SerializationWriter, serviceUpdateMessageCollectionResponse: ServiceUpdateMessageCollectionResponse | undefined = {} as ServiceUpdateMessageCollectionResponse) : void {
        serializeBaseCollectionPaginationCountResponse(writer, serviceUpdateMessageCollectionResponse)
        writer.writeCollectionOfObjectValues<ServiceUpdateMessage>("value", serviceUpdateMessageCollectionResponse.value, serializeServiceUpdateMessage);
}
