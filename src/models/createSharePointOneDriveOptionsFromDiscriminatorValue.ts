import {deserializeIntoSharePointOneDriveOptions} from './deserializeIntoSharePointOneDriveOptions';
import {SharePointOneDriveOptions} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createSharePointOneDriveOptionsFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoSharePointOneDriveOptions;
}
