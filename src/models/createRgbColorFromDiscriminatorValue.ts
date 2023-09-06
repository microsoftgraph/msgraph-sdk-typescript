import { deserializeIntoRgbColor } from './deserializeIntoRgbColor';
import { type RgbColor } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createRgbColorFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoRgbColor;
}
