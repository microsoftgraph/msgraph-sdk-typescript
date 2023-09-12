import { deserializeIntoOmaSettingFloatingPoint } from './deserializeIntoOmaSettingFloatingPoint';
import { type OmaSettingFloatingPoint } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createOmaSettingFloatingPointFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoOmaSettingFloatingPoint;
}
