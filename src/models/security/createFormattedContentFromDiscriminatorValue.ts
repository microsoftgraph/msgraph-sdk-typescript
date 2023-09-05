import { deserializeIntoFormattedContent } from './deserializeIntoFormattedContent';
import { type FormattedContent } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createFormattedContentFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoFormattedContent;
}
