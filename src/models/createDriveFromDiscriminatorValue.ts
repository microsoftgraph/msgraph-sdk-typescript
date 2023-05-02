import {deserializeIntoDrive} from './deserializeIntoDrive';
import {Drive} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createDriveFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoDrive;
}
