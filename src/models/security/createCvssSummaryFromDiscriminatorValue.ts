import {deserializeIntoCvssSummary} from './deserializeIntoCvssSummary';
import {CvssSummary} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createCvssSummaryFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoCvssSummary;
}
