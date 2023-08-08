import {createDirectoryObjectFromDiscriminatorValue} from './createDirectoryObjectFromDiscriminatorValue';
import {deserializeIntoBaseCollectionPaginationCountResponse} from './deserializeIntoBaseCollectionPaginationCountResponse';
import type {DirectoryObject} from './directoryObject';
import type {DirectoryObjectCollectionResponse} from './directoryObjectCollectionResponse';
import {serializeDirectoryObject} from './serializeDirectoryObject';
import type {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoDirectoryObjectCollectionResponse(directoryObjectCollectionResponse: DirectoryObjectCollectionResponse | undefined = {} as DirectoryObjectCollectionResponse) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(directoryObjectCollectionResponse),
        "value": n => { directoryObjectCollectionResponse.value = n.getCollectionOfObjectValues<DirectoryObject>(createDirectoryObjectFromDiscriminatorValue); },
    }
}
