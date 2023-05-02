import {deserializeIntoCoupDaysPostRequestBody} from './deserializeIntoCoupDaysPostRequestBody';
import {CoupDaysPostRequestBody} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createCoupDaysPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoCoupDaysPostRequestBody;
}
