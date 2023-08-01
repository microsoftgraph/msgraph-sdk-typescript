import {createMobileLobAppFromDiscriminatorValue} from './createMobileLobAppFromDiscriminatorValue';
import {deserializeIntoBaseCollectionPaginationCountResponse} from './deserializeIntoBaseCollectionPaginationCountResponse';
import type {MobileLobApp} from './mobileLobApp';
import type {MobileLobAppCollectionResponse} from './mobileLobAppCollectionResponse';
import {serializeMobileLobApp} from './serializeMobileLobApp';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoMobileLobAppCollectionResponse(mobileLobAppCollectionResponse: MobileLobAppCollectionResponse | undefined = {} as MobileLobAppCollectionResponse) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(mobileLobAppCollectionResponse),
        "value": n => { mobileLobAppCollectionResponse.value = n.getCollectionOfObjectValues<MobileLobApp>(createMobileLobAppFromDiscriminatorValue); },
    }
}
