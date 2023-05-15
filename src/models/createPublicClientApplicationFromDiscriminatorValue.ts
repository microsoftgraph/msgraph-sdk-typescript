import {deserializeIntoPublicClientApplication} from './deserializeIntoPublicClientApplication';
import {PublicClientApplication} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createPublicClientApplicationFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoPublicClientApplication;
}
