import {MultiValueLegacyExtendedProperty} from './multiValueLegacyExtendedProperty';
import {MultiValueLegacyExtendedPropertyCollectionResponse} from './multiValueLegacyExtendedPropertyCollectionResponse';
import {serializeBaseCollectionPaginationCountResponse} from './serializeBaseCollectionPaginationCountResponse';
import {serializeMultiValueLegacyExtendedProperty} from './serializeMultiValueLegacyExtendedProperty';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeMultiValueLegacyExtendedPropertyCollectionResponse(writer: SerializationWriter, multiValueLegacyExtendedPropertyCollectionResponse: MultiValueLegacyExtendedPropertyCollectionResponse | undefined = {} as MultiValueLegacyExtendedPropertyCollectionResponse) : void {
        serializeBaseCollectionPaginationCountResponse(writer, multiValueLegacyExtendedPropertyCollectionResponse)
        writer.writeCollectionOfObjectValues<MultiValueLegacyExtendedProperty>("value", multiValueLegacyExtendedPropertyCollectionResponse.value, serializeMultiValueLegacyExtendedProperty);
}
