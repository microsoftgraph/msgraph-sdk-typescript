import {MobileLobApp} from './mobileLobApp';
import {MobileLobAppCollectionResponse} from './mobileLobAppCollectionResponse';
import {serializeBaseCollectionPaginationCountResponse} from './serializeBaseCollectionPaginationCountResponse';
import {serializeMobileLobApp} from './serializeMobileLobApp';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeMobileLobAppCollectionResponse(mobileLobAppCollectionResponse: MobileLobAppCollectionResponse | undefined = {} as MobileLobAppCollectionResponse, writer: SerializationWriter) : void {
        serializeBaseCollectionPaginationCountResponse(writer, mobileLobAppCollectionResponse)
        writer.writeCollectionOfObjectValues<MobileLobApp>("value", mobileLobAppCollectionResponse.value, serializeMobileLobApp);
}
