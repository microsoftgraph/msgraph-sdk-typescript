import {createExtensionPropertyFromDiscriminatorValue} from './createExtensionPropertyFromDiscriminatorValue';
import {deserializeIntoBaseCollectionPaginationCountResponse} from './deserializeIntoBaseCollectionPaginationCountResponse';
import type {ExtensionProperty} from './extensionProperty';
import type {ExtensionPropertyCollectionResponse} from './extensionPropertyCollectionResponse';
import {serializeExtensionProperty} from './serializeExtensionProperty';
import type {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoExtensionPropertyCollectionResponse(extensionPropertyCollectionResponse: ExtensionPropertyCollectionResponse | undefined = {} as ExtensionPropertyCollectionResponse) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(extensionPropertyCollectionResponse),
        "value": n => { extensionPropertyCollectionResponse.value = n.getCollectionOfObjectValues<ExtensionProperty>(createExtensionPropertyFromDiscriminatorValue); },
    }
}
