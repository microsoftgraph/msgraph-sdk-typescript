import {deserializeIntoVerifiedPublisher} from './deserializeIntoVerifiedPublisher';
import {VerifiedPublisher} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createVerifiedPublisherFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoVerifiedPublisher;
}
