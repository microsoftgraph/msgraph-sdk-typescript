import { deserializeIntoPrintJobConfiguration } from './deserializeIntoPrintJobConfiguration';
import { type PrintJobConfiguration } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createPrintJobConfigurationFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoPrintJobConfiguration;
}
