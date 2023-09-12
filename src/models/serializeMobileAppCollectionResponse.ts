import { type MobileApp } from './mobileApp';
import { type MobileAppCollectionResponse } from './mobileAppCollectionResponse';
import { serializeBaseCollectionPaginationCountResponse } from './serializeBaseCollectionPaginationCountResponse';
import { serializeMobileApp } from './serializeMobileApp';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeMobileAppCollectionResponse(writer: SerializationWriter, mobileAppCollectionResponse: MobileAppCollectionResponse | undefined = {} as MobileAppCollectionResponse) : void {
        serializeBaseCollectionPaginationCountResponse(writer, mobileAppCollectionResponse)
        writer.writeCollectionOfObjectValues<MobileApp>("value", mobileAppCollectionResponse.value, serializeMobileApp);
}
