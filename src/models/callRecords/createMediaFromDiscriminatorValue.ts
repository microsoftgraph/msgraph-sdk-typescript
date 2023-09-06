import { deserializeIntoMedia } from './deserializeIntoMedia';
import { type Media } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createMediaFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoMedia;
}
