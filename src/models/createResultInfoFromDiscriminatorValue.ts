import {deserializeIntoResultInfo} from './deserializeIntoResultInfo';
import {ResultInfo} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createResultInfoFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoResultInfo;
}
