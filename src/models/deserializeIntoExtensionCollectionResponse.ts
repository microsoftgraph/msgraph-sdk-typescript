import {createExtensionFromDiscriminatorValue} from './createExtensionFromDiscriminatorValue';
import {deserializeIntoBaseCollectionPaginationCountResponse} from './deserializeIntoBaseCollectionPaginationCountResponse';
import type {Extension} from './extension';
import type {ExtensionCollectionResponse} from './extensionCollectionResponse';
import {serializeExtension} from './serializeExtension';
import type {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoExtensionCollectionResponse(extensionCollectionResponse: ExtensionCollectionResponse | undefined = {} as ExtensionCollectionResponse) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(extensionCollectionResponse),
        "value": n => { extensionCollectionResponse.value = n.getCollectionOfObjectValues<Extension>(createExtensionFromDiscriminatorValue); },
    }
}
