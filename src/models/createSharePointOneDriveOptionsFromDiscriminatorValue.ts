import { deserializeIntoSharePointOneDriveOptions } from './deserializeIntoSharePointOneDriveOptions';
import { type SharePointOneDriveOptions } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createSharePointOneDriveOptionsFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoSharePointOneDriveOptions;
}
