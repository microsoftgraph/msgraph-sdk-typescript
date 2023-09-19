import { createMicrosoftStoreForBusinessAppFromDiscriminatorValue } from './createMicrosoftStoreForBusinessAppFromDiscriminatorValue';
import { deserializeIntoBaseCollectionPaginationCountResponse } from './deserializeIntoBaseCollectionPaginationCountResponse';
import { type MicrosoftStoreForBusinessApp } from './microsoftStoreForBusinessApp';
import { type MicrosoftStoreForBusinessAppCollectionResponse } from './microsoftStoreForBusinessAppCollectionResponse';
import { serializeMicrosoftStoreForBusinessApp } from './serializeMicrosoftStoreForBusinessApp';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function deserializeIntoMicrosoftStoreForBusinessAppCollectionResponse(microsoftStoreForBusinessAppCollectionResponse: MicrosoftStoreForBusinessAppCollectionResponse | undefined = {} as MicrosoftStoreForBusinessAppCollectionResponse) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(microsoftStoreForBusinessAppCollectionResponse),
        "value": n => { microsoftStoreForBusinessAppCollectionResponse.value = n.getCollectionOfObjectValues<MicrosoftStoreForBusinessApp>(createMicrosoftStoreForBusinessAppFromDiscriminatorValue); },
    }
}
