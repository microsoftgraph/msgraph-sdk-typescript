import {deserializeIntoOmaSettingFloatingPoint} from './deserializeIntoOmaSettingFloatingPoint';
import {OmaSettingFloatingPoint} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createOmaSettingFloatingPointFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoOmaSettingFloatingPoint;
}
