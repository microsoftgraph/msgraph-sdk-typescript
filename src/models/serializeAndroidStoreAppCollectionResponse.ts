import { type AndroidStoreApp } from './androidStoreApp';
import { type AndroidStoreAppCollectionResponse } from './androidStoreAppCollectionResponse';
import { serializeAndroidStoreApp } from './serializeAndroidStoreApp';
import { serializeBaseCollectionPaginationCountResponse } from './serializeBaseCollectionPaginationCountResponse';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeAndroidStoreAppCollectionResponse(writer: SerializationWriter, androidStoreAppCollectionResponse: AndroidStoreAppCollectionResponse | undefined = {} as AndroidStoreAppCollectionResponse) : void {
        serializeBaseCollectionPaginationCountResponse(writer, androidStoreAppCollectionResponse)
        writer.writeCollectionOfObjectValues<AndroidStoreApp>("value", androidStoreAppCollectionResponse.value, serializeAndroidStoreApp);
}
