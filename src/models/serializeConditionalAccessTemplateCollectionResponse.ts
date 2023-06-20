import {ConditionalAccessTemplate} from './conditionalAccessTemplate';
import {ConditionalAccessTemplateCollectionResponse} from './conditionalAccessTemplateCollectionResponse';
import {serializeBaseCollectionPaginationCountResponse} from './serializeBaseCollectionPaginationCountResponse';
import {serializeConditionalAccessTemplate} from './serializeConditionalAccessTemplate';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeConditionalAccessTemplateCollectionResponse(conditionalAccessTemplateCollectionResponse: ConditionalAccessTemplateCollectionResponse | undefined = {} as ConditionalAccessTemplateCollectionResponse, writer: SerializationWriter) : void {
        serializeBaseCollectionPaginationCountResponse(writer, conditionalAccessTemplateCollectionResponse)
        writer.writeCollectionOfObjectValues<ConditionalAccessTemplate>("value", conditionalAccessTemplateCollectionResponse.value, serializeConditionalAccessTemplate);
}
