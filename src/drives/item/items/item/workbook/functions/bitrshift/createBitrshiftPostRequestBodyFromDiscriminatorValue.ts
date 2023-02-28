import {BitrshiftPostRequestBody} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createBitrshiftPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) : BitrshiftPostRequestBody {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new BitrshiftPostRequestBody();
}
