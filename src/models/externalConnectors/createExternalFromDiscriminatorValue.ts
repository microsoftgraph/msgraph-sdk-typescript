import {deserializeIntoExternal} from './deserializeIntoExternal';
import {External} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createExternalFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoExternal;
}
