import {deserializeIntoSession} from './deserializeIntoSession';
import {Session} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createSessionFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoSession;
}
