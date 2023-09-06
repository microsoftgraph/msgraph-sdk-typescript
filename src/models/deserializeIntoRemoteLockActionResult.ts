import { deserializeIntoDeviceActionResult } from './deserializeIntoDeviceActionResult';
import { type RemoteLockActionResult } from './remoteLockActionResult';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function deserializeIntoRemoteLockActionResult(remoteLockActionResult: RemoteLockActionResult | undefined = {} as RemoteLockActionResult) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoDeviceActionResult(remoteLockActionResult),
        "unlockPin": n => { remoteLockActionResult.unlockPin = n.getStringValue(); },
    }
}
