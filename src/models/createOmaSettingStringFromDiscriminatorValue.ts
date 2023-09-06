import { deserializeIntoOmaSettingString } from './deserializeIntoOmaSettingString';
import { type OmaSettingString } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createOmaSettingStringFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoOmaSettingString;
}
