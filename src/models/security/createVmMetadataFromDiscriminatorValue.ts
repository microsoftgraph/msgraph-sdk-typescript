import {VmMetadata} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createVmMetadataFromDiscriminatorValue(parseNode: ParseNode | undefined) : VmMetadata {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new VmMetadata();
}
