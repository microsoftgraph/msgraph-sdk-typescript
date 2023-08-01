import type {ConditionalAccessTemplate} from './conditionalAccessTemplate';
import type {ConditionalAccessTemplateCollectionResponse} from './conditionalAccessTemplateCollectionResponse';
import {createConditionalAccessTemplateFromDiscriminatorValue} from './createConditionalAccessTemplateFromDiscriminatorValue';
import {deserializeIntoBaseCollectionPaginationCountResponse} from './deserializeIntoBaseCollectionPaginationCountResponse';
import {serializeConditionalAccessTemplate} from './serializeConditionalAccessTemplate';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoConditionalAccessTemplateCollectionResponse(conditionalAccessTemplateCollectionResponse: ConditionalAccessTemplateCollectionResponse | undefined = {} as ConditionalAccessTemplateCollectionResponse) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(conditionalAccessTemplateCollectionResponse),
        "value": n => { conditionalAccessTemplateCollectionResponse.value = n.getCollectionOfObjectValues<ConditionalAccessTemplate>(createConditionalAccessTemplateFromDiscriminatorValue); },
    }
}
