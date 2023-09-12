import { deserializeIntoSecurityReportsRoot } from './deserializeIntoSecurityReportsRoot';
import { type SecurityReportsRoot } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createSecurityReportsRootFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoSecurityReportsRoot;
}
