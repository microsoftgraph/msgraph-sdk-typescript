import { type IosLobApp } from './iosLobApp';
import { type IosLobAppCollectionResponse } from './iosLobAppCollectionResponse';
import { serializeBaseCollectionPaginationCountResponse } from './serializeBaseCollectionPaginationCountResponse';
import { serializeIosLobApp } from './serializeIosLobApp';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeIosLobAppCollectionResponse(writer: SerializationWriter, iosLobAppCollectionResponse: IosLobAppCollectionResponse | undefined = {} as IosLobAppCollectionResponse) : void {
        serializeBaseCollectionPaginationCountResponse(writer, iosLobAppCollectionResponse)
        writer.writeCollectionOfObjectValues<IosLobApp>("value", iosLobAppCollectionResponse.value, serializeIosLobApp);
}
