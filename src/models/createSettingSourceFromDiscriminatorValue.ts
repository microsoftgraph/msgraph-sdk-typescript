import {deserializeIntoSettingSource} from './deserializeIntoSettingSource';
import {SettingSource} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createSettingSourceFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoSettingSource;
}
