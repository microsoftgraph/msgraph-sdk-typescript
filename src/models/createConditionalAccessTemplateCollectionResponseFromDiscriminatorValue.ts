import {ConditionalAccessTemplateCollectionResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createConditionalAccessTemplateCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : ConditionalAccessTemplateCollectionResponse {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new ConditionalAccessTemplateCollectionResponse();
}
