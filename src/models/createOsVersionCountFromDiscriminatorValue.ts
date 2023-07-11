import {deserializeIntoOsVersionCount} from './deserializeIntoOsVersionCount';
import {OsVersionCount} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createOsVersionCountFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoOsVersionCount;
}
