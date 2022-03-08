import {Hashes} from './hashes';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createHashesFromDiscriminatorValue(parseNode: ParseNode | undefined) : Hashes {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Hashes();
}
