import {deserializeIntoCompliance} from './deserializeIntoCompliance';
import {Compliance} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createComplianceFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoCompliance;
}
