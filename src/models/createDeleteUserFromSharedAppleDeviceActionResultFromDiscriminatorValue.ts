import {DeleteUserFromSharedAppleDeviceActionResultImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createDeleteUserFromSharedAppleDeviceActionResultFromDiscriminatorValue(parseNode: ParseNode | undefined) : DeleteUserFromSharedAppleDeviceActionResultImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new DeleteUserFromSharedAppleDeviceActionResultImpl();
}
