import {deserializeIntoResultTemplateOption} from './deserializeIntoResultTemplateOption';
import {ResultTemplateOption} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createResultTemplateOptionFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoResultTemplateOption;
}
