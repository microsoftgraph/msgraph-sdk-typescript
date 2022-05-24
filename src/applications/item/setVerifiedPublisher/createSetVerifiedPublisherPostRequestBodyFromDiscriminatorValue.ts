import {SetVerifiedPublisherPostRequestBodyImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createSetVerifiedPublisherPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) : SetVerifiedPublisherPostRequestBodyImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new SetVerifiedPublisherPostRequestBodyImpl();
}
