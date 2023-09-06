import { deserializeIntoResultTemplateOption } from './deserializeIntoResultTemplateOption';
import { type ResultTemplateOption } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createResultTemplateOptionFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoResultTemplateOption;
}
