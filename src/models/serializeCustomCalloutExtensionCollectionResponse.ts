import {CustomCalloutExtension} from './customCalloutExtension';
import {CustomCalloutExtensionCollectionResponse} from './customCalloutExtensionCollectionResponse';
import {serializeBaseCollectionPaginationCountResponse} from './serializeBaseCollectionPaginationCountResponse';
import {serializeCustomCalloutExtension} from './serializeCustomCalloutExtension';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeCustomCalloutExtensionCollectionResponse(writer: SerializationWriter, customCalloutExtensionCollectionResponse: CustomCalloutExtensionCollectionResponse | undefined = {} as CustomCalloutExtensionCollectionResponse) : void {
        serializeBaseCollectionPaginationCountResponse(writer, customCalloutExtensionCollectionResponse)
        writer.writeCollectionOfObjectValues<CustomCalloutExtension>("value", customCalloutExtensionCollectionResponse.value, serializeCustomCalloutExtension);
}
