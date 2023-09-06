import { deserializeIntoOmaSettingBoolean } from './deserializeIntoOmaSettingBoolean';
import { type OmaSettingBoolean } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createOmaSettingBooleanFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoOmaSettingBoolean;
}
