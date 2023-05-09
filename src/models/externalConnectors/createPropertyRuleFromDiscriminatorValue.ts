import {deserializeIntoPropertyRule} from './deserializeIntoPropertyRule';
import {PropertyRule} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createPropertyRuleFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoPropertyRule;
}
