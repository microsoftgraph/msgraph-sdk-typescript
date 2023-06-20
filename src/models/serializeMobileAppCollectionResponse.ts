import {MobileApp} from './mobileApp';
import {MobileAppCollectionResponse} from './mobileAppCollectionResponse';
import {serializeBaseCollectionPaginationCountResponse} from './serializeBaseCollectionPaginationCountResponse';
import {serializeMobileApp} from './serializeMobileApp';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeMobileAppCollectionResponse(mobileAppCollectionResponse: MobileAppCollectionResponse | undefined = {} as MobileAppCollectionResponse, writer: SerializationWriter) : void {
        serializeBaseCollectionPaginationCountResponse(writer, mobileAppCollectionResponse)
        writer.writeCollectionOfObjectValues<MobileApp>("value", mobileAppCollectionResponse.value, serializeMobileApp);
}
