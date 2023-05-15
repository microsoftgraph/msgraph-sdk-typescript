import {createExtensionPropertyFromDiscriminatorValue} from './createExtensionPropertyFromDiscriminatorValue';
import {deserializeIntoBaseCollectionPaginationCountResponse} from './deserializeIntoBaseCollectionPaginationCountResponse';
import {ExtensionProperty} from './extensionProperty';
import {ExtensionPropertyCollectionResponse} from './extensionPropertyCollectionResponse';
import {serializeExtensionProperty} from './serializeExtensionProperty';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoExtensionPropertyCollectionResponse(extensionPropertyCollectionResponse: ExtensionPropertyCollectionResponse | undefined = {} as ExtensionPropertyCollectionResponse) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(extensionPropertyCollectionResponse),
        "value": n => { extensionPropertyCollectionResponse.value = n.getCollectionOfObjectValues<ExtensionProperty>(createExtensionPropertyFromDiscriminatorValue); },
    }
}
