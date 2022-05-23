import {QuotaImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createQuotaFromDiscriminatorValue(parseNode: ParseNode | undefined) : QuotaImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new QuotaImpl();
}
