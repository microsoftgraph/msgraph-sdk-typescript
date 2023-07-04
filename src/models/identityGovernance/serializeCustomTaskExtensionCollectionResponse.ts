import {serializeBaseCollectionPaginationCountResponse} from '../serializeBaseCollectionPaginationCountResponse';
import {CustomTaskExtension} from './customTaskExtension';
import {CustomTaskExtensionCollectionResponse} from './customTaskExtensionCollectionResponse';
import {serializeCustomTaskExtension} from './serializeCustomTaskExtension';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeCustomTaskExtensionCollectionResponse(writer: SerializationWriter, customTaskExtensionCollectionResponse: CustomTaskExtensionCollectionResponse | undefined = {} as CustomTaskExtensionCollectionResponse) : void {
        serializeBaseCollectionPaginationCountResponse(writer, customTaskExtensionCollectionResponse)
        writer.writeCollectionOfObjectValues<CustomTaskExtension>("value", customTaskExtensionCollectionResponse.value, serializeCustomTaskExtension);
}
