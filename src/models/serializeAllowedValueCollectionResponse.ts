import {AllowedValue} from './allowedValue';
import {AllowedValueCollectionResponse} from './allowedValueCollectionResponse';
import {serializeAllowedValue} from './serializeAllowedValue';
import {serializeBaseCollectionPaginationCountResponse} from './serializeBaseCollectionPaginationCountResponse';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeAllowedValueCollectionResponse(allowedValueCollectionResponse: AllowedValueCollectionResponse | undefined = {} as AllowedValueCollectionResponse, writer: SerializationWriter) : void {
        serializeBaseCollectionPaginationCountResponse(writer, allowedValueCollectionResponse)
        writer.writeCollectionOfObjectValues<AllowedValue>("value", allowedValueCollectionResponse.value, serializeAllowedValue);
}
