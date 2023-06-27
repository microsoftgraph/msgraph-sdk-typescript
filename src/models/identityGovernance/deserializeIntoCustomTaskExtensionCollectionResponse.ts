import {deserializeIntoBaseCollectionPaginationCountResponse} from '../deserializeIntoBaseCollectionPaginationCountResponse';
import {createCustomTaskExtensionFromDiscriminatorValue} from './createCustomTaskExtensionFromDiscriminatorValue';
import {CustomTaskExtension} from './customTaskExtension';
import {CustomTaskExtensionCollectionResponse} from './customTaskExtensionCollectionResponse';
import {serializeCustomTaskExtension} from './serializeCustomTaskExtension';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoCustomTaskExtensionCollectionResponse(customTaskExtensionCollectionResponse: CustomTaskExtensionCollectionResponse | undefined = {} as CustomTaskExtensionCollectionResponse) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(customTaskExtensionCollectionResponse),
        "value": n => { customTaskExtensionCollectionResponse.value = n.getCollectionOfObjectValues<CustomTaskExtension>(createCustomTaskExtensionFromDiscriminatorValue); },
    }
}
