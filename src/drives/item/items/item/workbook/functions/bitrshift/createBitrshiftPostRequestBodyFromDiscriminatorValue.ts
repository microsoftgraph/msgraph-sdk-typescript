import {deserializeIntoBitrshiftPostRequestBody} from './deserializeIntoBitrshiftPostRequestBody';
import {BitrshiftPostRequestBody} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createBitrshiftPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoBitrshiftPostRequestBody;
}
