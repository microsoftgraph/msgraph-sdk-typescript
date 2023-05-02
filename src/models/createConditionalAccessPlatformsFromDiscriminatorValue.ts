import {deserializeIntoConditionalAccessPlatforms} from './deserializeIntoConditionalAccessPlatforms';
import {ConditionalAccessPlatforms} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createConditionalAccessPlatformsFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoConditionalAccessPlatforms;
}
