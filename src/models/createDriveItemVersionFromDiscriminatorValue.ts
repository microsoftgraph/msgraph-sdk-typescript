import {DriveItemVersionImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createDriveItemVersionFromDiscriminatorValue(parseNode: ParseNode | undefined) : DriveItemVersionImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new DriveItemVersionImpl();
}
