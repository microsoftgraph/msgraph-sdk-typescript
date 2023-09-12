import { deserializeIntoConditionalAccessTemplate } from './deserializeIntoConditionalAccessTemplate';
import { type ConditionalAccessTemplate } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createConditionalAccessTemplateFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoConditionalAccessTemplate;
}
