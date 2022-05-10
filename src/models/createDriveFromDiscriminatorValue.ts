import {DriveImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createDriveFromDiscriminatorValue(parseNode: ParseNode | undefined) : DriveImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new DriveImpl();
}
