import { deserializeIntoSite } from './deserializeIntoSite';
import { type Site } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createSiteFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoSite;
}
