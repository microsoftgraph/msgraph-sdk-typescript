import {ExtensionProperty} from '../../../models/extensionProperty';
import {serializeBaseCollectionPaginationCountResponse} from '../../../models/serializeBaseCollectionPaginationCountResponse';
import {serializeExtensionProperty} from '../../../models/serializeExtensionProperty';
import {GetAvailableExtensionPropertiesResponse} from './getAvailableExtensionPropertiesResponse';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeGetAvailableExtensionPropertiesResponse(getAvailableExtensionPropertiesResponse: GetAvailableExtensionPropertiesResponse | undefined = {} as GetAvailableExtensionPropertiesResponse, writer: SerializationWriter) : void {
        serializeBaseCollectionPaginationCountResponse(writer, getAvailableExtensionPropertiesResponse)
        writer.writeCollectionOfObjectValues<ExtensionProperty>("value", getAvailableExtensionPropertiesResponse.value, serializeExtensionProperty);
}
