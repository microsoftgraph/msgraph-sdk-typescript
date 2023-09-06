import { type AllowedValue } from './allowedValue';
import { type AllowedValueCollectionResponse } from './allowedValueCollectionResponse';
import { serializeAllowedValue } from './serializeAllowedValue';
import { serializeBaseCollectionPaginationCountResponse } from './serializeBaseCollectionPaginationCountResponse';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeAllowedValueCollectionResponse(writer: SerializationWriter, allowedValueCollectionResponse: AllowedValueCollectionResponse | undefined = {} as AllowedValueCollectionResponse) : void {
        serializeBaseCollectionPaginationCountResponse(writer, allowedValueCollectionResponse)
        writer.writeCollectionOfObjectValues<AllowedValue>("value", allowedValueCollectionResponse.value, serializeAllowedValue);
}
