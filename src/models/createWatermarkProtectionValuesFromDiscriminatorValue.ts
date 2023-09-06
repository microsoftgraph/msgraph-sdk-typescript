import { deserializeIntoWatermarkProtectionValues } from './deserializeIntoWatermarkProtectionValues';
import { type WatermarkProtectionValues } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createWatermarkProtectionValuesFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoWatermarkProtectionValues;
}
