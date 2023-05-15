import {deserializeIntoContract} from './deserializeIntoContract';
import {Contract} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createContractFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoContract;
}
