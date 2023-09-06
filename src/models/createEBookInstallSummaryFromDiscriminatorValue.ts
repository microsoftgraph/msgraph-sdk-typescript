import { deserializeIntoEBookInstallSummary } from './deserializeIntoEBookInstallSummary';
import { type EBookInstallSummary } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createEBookInstallSummaryFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoEBookInstallSummary;
}
