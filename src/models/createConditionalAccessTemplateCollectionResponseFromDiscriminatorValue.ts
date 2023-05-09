import {deserializeIntoConditionalAccessTemplateCollectionResponse} from './deserializeIntoConditionalAccessTemplateCollectionResponse';
import {ConditionalAccessTemplateCollectionResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createConditionalAccessTemplateCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoConditionalAccessTemplateCollectionResponse;
}
