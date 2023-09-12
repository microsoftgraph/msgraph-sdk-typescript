import { deserializeIntoResultInfo } from './deserializeIntoResultInfo';
import { type ResultInfo } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createResultInfoFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoResultInfo;
}
