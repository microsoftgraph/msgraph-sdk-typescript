import {ConditionalAccessTemplate} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createConditionalAccessTemplateFromDiscriminatorValue(parseNode: ParseNode | undefined) : ConditionalAccessTemplate {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new ConditionalAccessTemplate();
}
