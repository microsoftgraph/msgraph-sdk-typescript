import {serializeBaseCollectionPaginationCountResponse} from '../serializeBaseCollectionPaginationCountResponse';
import {Host} from './host';
import {HostCollectionResponse} from './hostCollectionResponse';
import {serializeHost} from './serializeHost';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeHostCollectionResponse(writer: SerializationWriter, hostCollectionResponse: HostCollectionResponse | undefined = {} as HostCollectionResponse) : void {
        serializeBaseCollectionPaginationCountResponse(writer, hostCollectionResponse)
        writer.writeCollectionOfObjectValues<Host>("value", hostCollectionResponse.value, serializeHost);
}
