import {deserializeIntoEdiscoveryCustodian} from './deserializeIntoEdiscoveryCustodian';
import {EdiscoveryCustodian} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createEdiscoveryCustodianFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoEdiscoveryCustodian;
}
