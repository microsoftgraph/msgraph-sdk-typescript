import { deserializeIntoDrive } from './deserializeIntoDrive';
import { type Drive } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createDriveFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoDrive;
}
