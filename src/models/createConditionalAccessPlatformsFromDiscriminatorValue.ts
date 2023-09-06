import { deserializeIntoConditionalAccessPlatforms } from './deserializeIntoConditionalAccessPlatforms';
import { type ConditionalAccessPlatforms } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createConditionalAccessPlatformsFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoConditionalAccessPlatforms;
}
