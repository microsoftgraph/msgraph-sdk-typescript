import {deserializeIntoClientUserAgent} from './deserializeIntoClientUserAgent';
import {ClientUserAgent} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createClientUserAgentFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoClientUserAgent;
}
