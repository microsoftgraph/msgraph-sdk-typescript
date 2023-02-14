import {SharePointOneDriveOptions} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createSharePointOneDriveOptionsFromDiscriminatorValue(parseNode: ParseNode | undefined) : SharePointOneDriveOptions {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new SharePointOneDriveOptions();
}
