import {serializeBaseCollectionPaginationCountResponse} from './serializeBaseCollectionPaginationCountResponse';
import {serializeVppToken} from './serializeVppToken';
import {VppToken} from './vppToken';
import {VppTokenCollectionResponse} from './vppTokenCollectionResponse';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeVppTokenCollectionResponse(writer: SerializationWriter, vppTokenCollectionResponse: VppTokenCollectionResponse | undefined = {} as VppTokenCollectionResponse) : void {
        serializeBaseCollectionPaginationCountResponse(writer, vppTokenCollectionResponse)
        writer.writeCollectionOfObjectValues<VppToken>("value", vppTokenCollectionResponse.value, serializeVppToken);
}
