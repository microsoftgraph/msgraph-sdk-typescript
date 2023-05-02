import {serializeBaseCollectionPaginationCountResponse} from './serializeBaseCollectionPaginationCountResponse';
import {serializeSingleValueLegacyExtendedProperty} from './serializeSingleValueLegacyExtendedProperty';
import {SingleValueLegacyExtendedProperty} from './singleValueLegacyExtendedProperty';
import {SingleValueLegacyExtendedPropertyCollectionResponse} from './singleValueLegacyExtendedPropertyCollectionResponse';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeSingleValueLegacyExtendedPropertyCollectionResponse(writer: SerializationWriter, singleValueLegacyExtendedPropertyCollectionResponse: SingleValueLegacyExtendedPropertyCollectionResponse | undefined = {} as SingleValueLegacyExtendedPropertyCollectionResponse) : void {
        serializeBaseCollectionPaginationCountResponse(writer, singleValueLegacyExtendedPropertyCollectionResponse)
        writer.writeCollectionOfObjectValues<SingleValueLegacyExtendedProperty>("value", singleValueLegacyExtendedPropertyCollectionResponse.value, serializeSingleValueLegacyExtendedProperty);
}
