import { deserializeIntoSettingSource } from './deserializeIntoSettingSource';
import { type SettingSource } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createSettingSourceFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoSettingSource;
}
