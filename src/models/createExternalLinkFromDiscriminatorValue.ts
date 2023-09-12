import { deserializeIntoExternalLink } from './deserializeIntoExternalLink';
import { type ExternalLink } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createExternalLinkFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoExternalLink;
}
