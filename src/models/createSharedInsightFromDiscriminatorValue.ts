import {SharedInsightImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createSharedInsightFromDiscriminatorValue(parseNode: ParseNode | undefined) : SharedInsightImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new SharedInsightImpl();
}
