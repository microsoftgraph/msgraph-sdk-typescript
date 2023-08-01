import type {MobileLobApp} from './mobileLobApp';
import type {MobileLobAppCollectionResponse} from './mobileLobAppCollectionResponse';
import {serializeBaseCollectionPaginationCountResponse} from './serializeBaseCollectionPaginationCountResponse';
import {serializeMobileLobApp} from './serializeMobileLobApp';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeMobileLobAppCollectionResponse(writer: SerializationWriter, mobileLobAppCollectionResponse: MobileLobAppCollectionResponse | undefined = {} as MobileLobAppCollectionResponse) : void {
        serializeBaseCollectionPaginationCountResponse(writer, mobileLobAppCollectionResponse)
        writer.writeCollectionOfObjectValues<MobileLobApp>("value", mobileLobAppCollectionResponse.value, serializeMobileLobApp);
}
