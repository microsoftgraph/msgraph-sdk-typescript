import {ApplicationTemplate} from './applicationTemplate';
import {ApplicationTemplateCollectionResponse} from './applicationTemplateCollectionResponse';
import {serializeApplicationTemplate} from './serializeApplicationTemplate';
import {serializeBaseCollectionPaginationCountResponse} from './serializeBaseCollectionPaginationCountResponse';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeApplicationTemplateCollectionResponse(writer: SerializationWriter, applicationTemplateCollectionResponse: ApplicationTemplateCollectionResponse | undefined = {} as ApplicationTemplateCollectionResponse) : void {
        serializeBaseCollectionPaginationCountResponse(writer, applicationTemplateCollectionResponse)
        writer.writeCollectionOfObjectValues<ApplicationTemplate>("value", applicationTemplateCollectionResponse.value, serializeApplicationTemplate);
}
