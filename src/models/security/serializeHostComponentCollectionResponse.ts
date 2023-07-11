import {serializeBaseCollectionPaginationCountResponse} from '../serializeBaseCollectionPaginationCountResponse';
import {HostComponent} from './hostComponent';
import {HostComponentCollectionResponse} from './hostComponentCollectionResponse';
import {serializeHostComponent} from './serializeHostComponent';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeHostComponentCollectionResponse(writer: SerializationWriter, hostComponentCollectionResponse: HostComponentCollectionResponse | undefined = {} as HostComponentCollectionResponse) : void {
        serializeBaseCollectionPaginationCountResponse(writer, hostComponentCollectionResponse)
        writer.writeCollectionOfObjectValues<HostComponent>("value", hostComponentCollectionResponse.value, serializeHostComponent);
}
