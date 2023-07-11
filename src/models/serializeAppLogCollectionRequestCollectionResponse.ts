import {AppLogCollectionRequest} from './appLogCollectionRequest';
import {AppLogCollectionRequestCollectionResponse} from './appLogCollectionRequestCollectionResponse';
import {serializeAppLogCollectionRequest} from './serializeAppLogCollectionRequest';
import {serializeBaseCollectionPaginationCountResponse} from './serializeBaseCollectionPaginationCountResponse';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeAppLogCollectionRequestCollectionResponse(writer: SerializationWriter, appLogCollectionRequestCollectionResponse: AppLogCollectionRequestCollectionResponse | undefined = {} as AppLogCollectionRequestCollectionResponse) : void {
        serializeBaseCollectionPaginationCountResponse(writer, appLogCollectionRequestCollectionResponse)
        writer.writeCollectionOfObjectValues<AppLogCollectionRequest>("value", appLogCollectionRequestCollectionResponse.value, serializeAppLogCollectionRequest);
}
