import {deserializeIntoSecurityResource} from './deserializeIntoSecurityResource';
import {SecurityResource} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createSecurityResourceFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoSecurityResource;
}
