import {deserializeIntoConditionalAccessTemplate} from './deserializeIntoConditionalAccessTemplate';
import {ConditionalAccessTemplate} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createConditionalAccessTemplateFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoConditionalAccessTemplate;
}
