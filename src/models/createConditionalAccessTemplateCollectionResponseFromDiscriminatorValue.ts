import { deserializeIntoConditionalAccessTemplateCollectionResponse } from './deserializeIntoConditionalAccessTemplateCollectionResponse';
import { type ConditionalAccessTemplateCollectionResponse } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createConditionalAccessTemplateCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoConditionalAccessTemplateCollectionResponse;
}
