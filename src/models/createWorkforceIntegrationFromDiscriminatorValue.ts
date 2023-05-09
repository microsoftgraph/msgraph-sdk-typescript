import {deserializeIntoWorkforceIntegration} from './deserializeIntoWorkforceIntegration';
import {WorkforceIntegration} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createWorkforceIntegrationFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoWorkforceIntegration;
}
