import { deserializeIntoIosiPadOSWebClip } from './deserializeIntoIosiPadOSWebClip';
import { type IosiPadOSWebClip } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createIosiPadOSWebClipFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoIosiPadOSWebClip;
}
