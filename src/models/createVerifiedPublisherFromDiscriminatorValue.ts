import {VerifiedPublisherImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createVerifiedPublisherFromDiscriminatorValue(parseNode: ParseNode | undefined) : VerifiedPublisherImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new VerifiedPublisherImpl();
}
