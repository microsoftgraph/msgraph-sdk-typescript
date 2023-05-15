import {Extension} from './extension';
import {ExtensionCollectionResponse} from './extensionCollectionResponse';
import {serializeBaseCollectionPaginationCountResponse} from './serializeBaseCollectionPaginationCountResponse';
import {serializeExtension} from './serializeExtension';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeExtensionCollectionResponse(writer: SerializationWriter, extensionCollectionResponse: ExtensionCollectionResponse | undefined = {} as ExtensionCollectionResponse) : void {
        serializeBaseCollectionPaginationCountResponse(writer, extensionCollectionResponse)
        writer.writeCollectionOfObjectValues<Extension>("value", extensionCollectionResponse.value, serializeExtension);
}
