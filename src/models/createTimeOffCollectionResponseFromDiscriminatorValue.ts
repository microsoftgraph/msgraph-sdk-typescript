import {TimeOffCollectionResponseImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createTimeOffCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : TimeOffCollectionResponseImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new TimeOffCollectionResponseImpl();
}
