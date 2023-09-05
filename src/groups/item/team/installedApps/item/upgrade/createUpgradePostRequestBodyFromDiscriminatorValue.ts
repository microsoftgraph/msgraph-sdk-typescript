import { deserializeIntoUpgradePostRequestBody } from './deserializeIntoUpgradePostRequestBody';
import { type UpgradePostRequestBody } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createUpgradePostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoUpgradePostRequestBody;
}
