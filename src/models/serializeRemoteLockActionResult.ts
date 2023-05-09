import {RemoteLockActionResult} from './remoteLockActionResult';
import {serializeDeviceActionResult} from './serializeDeviceActionResult';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeRemoteLockActionResult(writer: SerializationWriter, remoteLockActionResult: RemoteLockActionResult | undefined = {} as RemoteLockActionResult) : void {
        serializeDeviceActionResult(writer, remoteLockActionResult)
        writer.writeStringValue("unlockPin", remoteLockActionResult.unlockPin);
}
