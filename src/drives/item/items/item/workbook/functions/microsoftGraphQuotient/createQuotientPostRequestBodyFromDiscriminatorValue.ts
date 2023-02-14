import {QuotientPostRequestBody} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createQuotientPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) : QuotientPostRequestBody {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new QuotientPostRequestBody();
}
