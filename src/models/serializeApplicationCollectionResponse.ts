import type {Application} from './application';
import type {ApplicationCollectionResponse} from './applicationCollectionResponse';
import {serializeApplication} from './serializeApplication';
import {serializeBaseCollectionPaginationCountResponse} from './serializeBaseCollectionPaginationCountResponse';
import type {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeApplicationCollectionResponse(writer: SerializationWriter, applicationCollectionResponse: ApplicationCollectionResponse | undefined = {} as ApplicationCollectionResponse) : void {
        serializeBaseCollectionPaginationCountResponse(writer, applicationCollectionResponse)
        writer.writeCollectionOfObjectValues<Application>("value", applicationCollectionResponse.value, serializeApplication);
}
