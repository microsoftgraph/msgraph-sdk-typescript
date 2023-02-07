import {IosiPadOSWebClip} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createIosiPadOSWebClipFromDiscriminatorValue(parseNode: ParseNode | undefined) : IosiPadOSWebClip {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new IosiPadOSWebClip();
}
