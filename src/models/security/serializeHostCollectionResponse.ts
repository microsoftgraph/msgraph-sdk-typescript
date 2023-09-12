import { serializeBaseCollectionPaginationCountResponse } from '../serializeBaseCollectionPaginationCountResponse';
import { type Host } from './host';
import { type HostCollectionResponse } from './hostCollectionResponse';
import { serializeHost } from './serializeHost';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeHostCollectionResponse(writer: SerializationWriter, hostCollectionResponse: HostCollectionResponse | undefined = {} as HostCollectionResponse) : void {
        serializeBaseCollectionPaginationCountResponse(writer, hostCollectionResponse)
        writer.writeCollectionOfObjectValues<Host>("value", hostCollectionResponse.value, serializeHost);
}
