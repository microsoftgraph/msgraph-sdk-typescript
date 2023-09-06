import { deserializeIntoApplicationTemplateCollectionResponse } from './deserializeIntoApplicationTemplateCollectionResponse';
import { type ApplicationTemplateCollectionResponse } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createApplicationTemplateCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoApplicationTemplateCollectionResponse;
}
