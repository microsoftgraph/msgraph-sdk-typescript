import {LookupColumnImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createLookupColumnFromDiscriminatorValue(parseNode: ParseNode | undefined) : LookupColumnImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new LookupColumnImpl();
}
