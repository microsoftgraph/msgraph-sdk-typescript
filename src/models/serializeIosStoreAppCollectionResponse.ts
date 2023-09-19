import { type IosStoreApp } from './iosStoreApp';
import { type IosStoreAppCollectionResponse } from './iosStoreAppCollectionResponse';
import { serializeBaseCollectionPaginationCountResponse } from './serializeBaseCollectionPaginationCountResponse';
import { serializeIosStoreApp } from './serializeIosStoreApp';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeIosStoreAppCollectionResponse(writer: SerializationWriter, iosStoreAppCollectionResponse: IosStoreAppCollectionResponse | undefined = {} as IosStoreAppCollectionResponse) : void {
        serializeBaseCollectionPaginationCountResponse(writer, iosStoreAppCollectionResponse)
        writer.writeCollectionOfObjectValues<IosStoreApp>("value", iosStoreAppCollectionResponse.value, serializeIosStoreApp);
}
