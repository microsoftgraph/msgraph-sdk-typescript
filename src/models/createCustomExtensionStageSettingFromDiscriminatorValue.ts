import { deserializeIntoCustomExtensionStageSetting } from './deserializeIntoCustomExtensionStageSetting';
import { type CustomExtensionStageSetting } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createCustomExtensionStageSettingFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoCustomExtensionStageSetting;
}
