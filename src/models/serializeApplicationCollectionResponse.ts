import {Application} from './application';
import {ApplicationCollectionResponse} from './applicationCollectionResponse';
import {serializeApplication} from './serializeApplication';
import {serializeBaseCollectionPaginationCountResponse} from './serializeBaseCollectionPaginationCountResponse';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeApplicationCollectionResponse(applicationCollectionResponse: ApplicationCollectionResponse | undefined = {} as ApplicationCollectionResponse, writer: SerializationWriter) : void {
        serializeBaseCollectionPaginationCountResponse(writer, applicationCollectionResponse)
        writer.writeCollectionOfObjectValues<Application>("value", applicationCollectionResponse.value, serializeApplication);
}
