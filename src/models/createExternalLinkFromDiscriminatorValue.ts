import {ExternalLinkImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createExternalLinkFromDiscriminatorValue(parseNode: ParseNode | undefined) : ExternalLinkImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new ExternalLinkImpl();
}
