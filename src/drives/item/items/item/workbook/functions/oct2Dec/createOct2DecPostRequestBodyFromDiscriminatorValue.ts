import {Oct2DecPostRequestBody} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createOct2DecPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) : Oct2DecPostRequestBody {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Oct2DecPostRequestBody();
}
