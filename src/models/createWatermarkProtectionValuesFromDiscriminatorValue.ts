import {WatermarkProtectionValues} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createWatermarkProtectionValuesFromDiscriminatorValue(parseNode: ParseNode | undefined) : WatermarkProtectionValues {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new WatermarkProtectionValues();
}
