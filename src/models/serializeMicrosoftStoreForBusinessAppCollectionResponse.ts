import { type MicrosoftStoreForBusinessApp } from './microsoftStoreForBusinessApp';
import { type MicrosoftStoreForBusinessAppCollectionResponse } from './microsoftStoreForBusinessAppCollectionResponse';
import { serializeBaseCollectionPaginationCountResponse } from './serializeBaseCollectionPaginationCountResponse';
import { serializeMicrosoftStoreForBusinessApp } from './serializeMicrosoftStoreForBusinessApp';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeMicrosoftStoreForBusinessAppCollectionResponse(writer: SerializationWriter, microsoftStoreForBusinessAppCollectionResponse: MicrosoftStoreForBusinessAppCollectionResponse | undefined = {} as MicrosoftStoreForBusinessAppCollectionResponse) : void {
        serializeBaseCollectionPaginationCountResponse(writer, microsoftStoreForBusinessAppCollectionResponse)
        writer.writeCollectionOfObjectValues<MicrosoftStoreForBusinessApp>("value", microsoftStoreForBusinessAppCollectionResponse.value, serializeMicrosoftStoreForBusinessApp);
}
