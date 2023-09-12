import { deserializeIntoVerifiedPublisher } from './deserializeIntoVerifiedPublisher';
import { type VerifiedPublisher } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createVerifiedPublisherFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoVerifiedPublisher;
}
