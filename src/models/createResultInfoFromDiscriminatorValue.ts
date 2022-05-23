import {ResultInfoImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createResultInfoFromDiscriminatorValue(parseNode: ParseNode | undefined) : ResultInfoImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new ResultInfoImpl();
}
