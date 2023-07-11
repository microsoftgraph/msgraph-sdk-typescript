import {deserializeIntoUpgradePostRequestBody} from './deserializeIntoUpgradePostRequestBody';
import {UpgradePostRequestBody} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createUpgradePostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoUpgradePostRequestBody;
}
