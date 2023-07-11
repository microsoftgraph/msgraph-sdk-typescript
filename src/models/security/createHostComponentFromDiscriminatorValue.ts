import {deserializeIntoHostComponent} from './deserializeIntoHostComponent';
import {HostComponent} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createHostComponentFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoHostComponent;
}
