import {deserializeIntoServiceUserAgent} from './deserializeIntoServiceUserAgent';
import {ServiceUserAgent} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createServiceUserAgentFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoServiceUserAgent;
}
