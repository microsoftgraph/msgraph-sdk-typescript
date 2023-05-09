import {ExtensionProperty} from './extensionProperty';
import {ExtensionPropertyCollectionResponse} from './extensionPropertyCollectionResponse';
import {serializeBaseCollectionPaginationCountResponse} from './serializeBaseCollectionPaginationCountResponse';
import {serializeExtensionProperty} from './serializeExtensionProperty';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeExtensionPropertyCollectionResponse(writer: SerializationWriter, extensionPropertyCollectionResponse: ExtensionPropertyCollectionResponse | undefined = {} as ExtensionPropertyCollectionResponse) : void {
        serializeBaseCollectionPaginationCountResponse(writer, extensionPropertyCollectionResponse)
        writer.writeCollectionOfObjectValues<ExtensionProperty>("value", extensionPropertyCollectionResponse.value, serializeExtensionProperty);
}
