import {deserializeIntoCustomExtensionStageSetting} from './deserializeIntoCustomExtensionStageSetting';
import {CustomExtensionStageSetting} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createCustomExtensionStageSettingFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoCustomExtensionStageSetting;
}
