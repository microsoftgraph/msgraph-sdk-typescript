import {ExternalLink} from './externalLink';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createExternalLinkFromDiscriminatorValue(parseNode: ParseNode | undefined) : ExternalLink {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new ExternalLink();
}
