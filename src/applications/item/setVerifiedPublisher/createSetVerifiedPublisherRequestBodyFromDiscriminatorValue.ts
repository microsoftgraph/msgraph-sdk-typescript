import {SetVerifiedPublisherRequestBodyImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createSetVerifiedPublisherRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) : SetVerifiedPublisherRequestBodyImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new SetVerifiedPublisherRequestBodyImpl();
}
