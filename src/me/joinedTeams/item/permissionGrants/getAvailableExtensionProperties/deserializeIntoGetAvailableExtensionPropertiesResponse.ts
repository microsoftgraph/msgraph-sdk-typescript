import {createExtensionPropertyFromDiscriminatorValue} from '../../../../../models/createExtensionPropertyFromDiscriminatorValue';
import {deserializeIntoBaseCollectionPaginationCountResponse} from '../../../../../models/deserializeIntoBaseCollectionPaginationCountResponse';
import type {ExtensionProperty} from '../../../../../models/extensionProperty';
import {serializeExtensionProperty} from '../../../../../models/serializeExtensionProperty';
import type {GetAvailableExtensionPropertiesResponse} from './getAvailableExtensionPropertiesResponse';
import type {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoGetAvailableExtensionPropertiesResponse(getAvailableExtensionPropertiesResponse: GetAvailableExtensionPropertiesResponse | undefined = {} as GetAvailableExtensionPropertiesResponse) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(getAvailableExtensionPropertiesResponse),
        "value": n => { getAvailableExtensionPropertiesResponse.value = n.getCollectionOfObjectValues<ExtensionProperty>(createExtensionPropertyFromDiscriminatorValue); },
    }
}
