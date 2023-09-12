import { deserializeIntoOmaSettingInteger } from './deserializeIntoOmaSettingInteger';
import { type OmaSettingInteger } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createOmaSettingIntegerFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoOmaSettingInteger;
}
