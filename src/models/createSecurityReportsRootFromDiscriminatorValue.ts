import {deserializeIntoSecurityReportsRoot} from './deserializeIntoSecurityReportsRoot';
import {SecurityReportsRoot} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createSecurityReportsRootFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoSecurityReportsRoot;
}
