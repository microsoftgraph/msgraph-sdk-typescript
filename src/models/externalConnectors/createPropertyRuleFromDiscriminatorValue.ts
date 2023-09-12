import { deserializeIntoPropertyRule } from './deserializeIntoPropertyRule';
import { type PropertyRule } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createPropertyRuleFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoPropertyRule;
}
